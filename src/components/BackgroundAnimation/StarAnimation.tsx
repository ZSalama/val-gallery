'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function StarAnimation() {
    const [star, setStar] = useState({ x: 0, y: 0 })
    const lastMove = useRef<number>(Date.now())

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (((e.clientX - rect.left) / rect.width) * 2 - 1) / 2
        const y = (((e.clientY - rect.top) / rect.height) * 2) / 2
        setStar({ x, y })
        lastMove.current = Date.now()
    }

    return (
        <>
            <div
                className='fixed inset-0 z-0 bg-black'
                onMouseMove={handleMouseMove}
            >
                <Canvas
                    shadows
                    gl={{ antialias: true }}
                    className='w-full h-full'
                >
                    <PerspectiveCamera
                        makeDefault
                        fov={60} // or whatever FOV you prefer
                        position={[0, -7, 5]}
                        rotation={[THREE.MathUtils.degToRad(63), 0, 0]}
                        near={0.1}
                        far={1000}
                    />
                    <ambientLight intensity={0.4} />
                    <directionalLight
                        // castShadow
                        position={[5, 5, 5]}
                        intensity={0.8}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <StarResponsiveModel star={star} lastMove={lastMove} />
                    <EffectComposer>
                        <Bloom
                            luminanceThreshold={0.2} // only glow the brightest parts
                            luminanceSmoothing={0.1} // smooth transition
                            intensity={1.5} // overall glow strength
                            kernelSize={3} // how blurry the glow is
                            // height={300} // resolution of the bloom buffer
                        />
                    </EffectComposer>
                </Canvas>
            </div>
        </>
    )
}

interface StarProps {
    star: { x: number; y: number }
    lastMove: React.RefObject<number>
}

function StarResponsiveModel({ star, lastMove }: StarProps) {
    const gltf = useGLTF('/stars_10.glb')
    const groupRef = useRef<THREE.Group>(null)
    const targetScale = useRef(new THREE.Vector3(1, 1, 1))

    useFrame((state) => {
        if (!groupRef.current) return
        // Smooth rotation based on cursor
        const targetRotX = star.y * 0.5
        const targetRotY = star.x * 0.5
        groupRef.current.rotation.x +=
            (targetRotX - groupRef.current.rotation.x) * 0.1
        // groupRef.current.rotation.x = 0.2
        groupRef.current.rotation.y +=
            (targetRotY - groupRef.current.rotation.y) * 0.1
        // 2) breathing when idle
        const idle = Date.now() - lastMove.current > 1000 // 1 s idle
        const t = state.clock.getElapsedTime()
        const scaleFactor = idle
            ? 1 + Math.sin(t * 2) * 0.05 // oscillate ±5%
            : 1

        targetScale.current.set(scaleFactor, scaleFactor, scaleFactor)
        // smoothly lerp current scale → targetScale
        groupRef.current.scale.lerp(targetScale.current, 0.1)
    })

    return (
        <group ref={groupRef} scale={[1, 1, 1]} position={[0, 0, 0]}>
            <primitive
                object={gltf.scene}
                castShadow
                rotation={[-Math.PI / 2, 1.5, -Math.PI]}
                material={
                    gltf.materials['Material.001'] as THREE.MeshStandardMaterial
                }
            />
        </group>
    )
}

useGLTF.preload('/stars_10.glb')
