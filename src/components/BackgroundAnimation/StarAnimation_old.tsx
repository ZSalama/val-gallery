'use client'

import { useRef, useMemo, useCallback, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Mousemodel({ className }: { className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const mouseNDC = useRef(new THREE.Vector2())
    const pending = useRef({ x: 0, y: 0 })
    const framePending = useRef(false)

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        pending.current.x = e.clientX
        pending.current.y = e.clientY
        if (!framePending.current) {
            framePending.current = true
            requestAnimationFrame(() => {
                framePending.current = false
                const rect = containerRef.current!.getBoundingClientRect()
                mouseNDC.current.set(
                    ((pending.current.x - rect.left) / rect.width) * 2 - 1,
                    -((pending.current.y - rect.top) / rect.height) * 2 + 1
                )
            })
        }
    }, [])

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            // className='h-screen w-full'
            className={className}
        >
            <Canvas
                shadows
                camera={{ position: [0, 0, 30], fov: 50 }}
                gl={{ antialias: true }}
            >
                <ambientLight intensity={0.4} />
                <directionalLight
                    castShadow
                    position={[5, 5, 5]}
                    intensity={0.8}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                {/* <gridHelper args={[20, 20, '#888', '#444']} /> */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <shadowMaterial transparent opacity={0.2} />
                </mesh>
                <MouseFollower mouseNDC={mouseNDC.current} />
            </Canvas>
        </div>
    )
}

function MouseFollower({ mouseNDC }: { mouseNDC: THREE.Vector2 }) {
    const gltf = useGLTF('/star.glb')
    const groupRef = useRef<THREE.Group>(null)
    const tailRef = useRef<THREE.Object3D>(null)
    const { camera } = useThree()

    // cache helpers
    const raycaster = useMemo(() => new THREE.Raycaster(), [])
    const plane = useMemo(
        () => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
        []
    )
    const worldTarget = useRef(new THREE.Vector3())
    const chaseTarget = useRef(new THREE.Vector3())
    const up = useMemo(() => new THREE.Vector3(0, 0, 1), [])

    // grab the tail object once
    useEffect(() => {
        const tail = gltf.scene.getObjectByName('Tail')
        if (tail) tailRef.current = tail
    }, [gltf])

    useFrame((state) => {
        const grp = groupRef.current!
        // 1) raycast cursor to plane
        raycaster.setFromCamera(mouseNDC, camera)
        raycaster.ray.intersectPlane(plane, worldTarget.current)

        // 2) chase point behind cursor
        const dir = worldTarget.current.clone().sub(grp.position).normalize()
        chaseTarget.current.copy(worldTarget.current).addScaledVector(dir, -1.5)

        // 3) smooth position
        grp.position.lerp(chaseTarget.current, 0.6)

        // 4) look-at cursor
        const m = new THREE.Matrix4().lookAt(
            grp.position,
            worldTarget.current,
            up
        )
        const targetQuat = new THREE.Quaternion().setFromRotationMatrix(m)
        grp.quaternion.slerp(targetQuat, 0.1)

        // 5) lock tilt
        const e = new THREE.Euler().setFromQuaternion(grp.quaternion, 'XYZ')
        grp.quaternion.setFromEuler(new THREE.Euler(0, 0, e.z, 'XYZ'))

        // 6) wiggle tail
        if (tailRef.current) {
            const t = state.clock.getElapsedTime()
            // side-to-side wiggle in local X (adjust amplitude & speed)
            tailRef.current.rotation.y = Math.sin(t * 5) * 0.3
        }

        // 7) keep camera centered
        camera.lookAt(0, 0, 0)
    })

    return (
        <group ref={groupRef}>
            <primitive
                object={gltf.scene}
                scale={1.5}
                // lay flat, spin nose→+Z, then extra 90° right turn :contentReference[oaicite:0]{index=0}:contentReference[oaicite:1]{index=1}
                rotation={[-Math.PI / 2, 1.5, -Math.PI]}
                castShadow
            />
        </group>
    )
}

useGLTF.preload('/star.glb')
