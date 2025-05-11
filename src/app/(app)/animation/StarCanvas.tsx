'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export default function StarAnimation() {
    const [star, setStar] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (((e.clientX - rect.left) / rect.width) * 2 - 1) / 2
        const y = (((e.clientY - rect.top) / rect.height) * 2) / 2
        setStar({ x, y })
    }

    return (
        <>
            <div className='fixed inset-0 z-10' onMouseMove={handleMouseMove}>
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
                        castShadow
                        position={[5, 5, 5]}
                        intensity={0.8}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                    />
                    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                        <planeGeometry args={[20, 20]} />
                        <shadowMaterial transparent opacity={0.2} />
                    </mesh>

                    <StarResponsiveModel star={star} />
                </Canvas>
            </div>
            {/* <div className='relative min-h-screen mx-auto text-center text-4xl mt-60'>
                Lorem, iiam veniam voluptatem repellendus minima nisi? Cumque
                totam porro cum et?
            </div> */}
        </>
    )
}

interface StarProps {
    star: { x: number; y: number }
}

function StarResponsiveModel({ star }: StarProps) {
    const gltf = useGLTF('/stars_7.glb')
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (!groupRef.current) return
        // Smooth rotation based on cursor
        const targetRotX = star.y * 0.5
        const targetRotY = star.x * 0.5
        groupRef.current.rotation.x +=
            (targetRotX - groupRef.current.rotation.x) * 0.1
        // groupRef.current.rotation.x = 0.2
        groupRef.current.rotation.y +=
            (targetRotY - groupRef.current.rotation.y) * 0.1
    })

    return (
        <group ref={groupRef} scale={[1, 1, 1]} position={[0, 0, 0]}>
            <primitive
                object={gltf.scene}
                castShadow
                rotation={[-Math.PI / 2, 1.5, -Math.PI]}
            />
        </group>
    )
}

useGLTF.preload('/stars_7.glb')
