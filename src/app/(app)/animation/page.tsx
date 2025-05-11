'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'
import * as THREE from 'three'

export default function StarAnimation() {
    const [star, setStar] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
        setStar({ x, y })
    }

    // Precompute 24 positions: 12 on left, 12 on right
    const starPositions = useMemo(() => {
        const leftX = -8
        const rightX = 8
        const count = 12
        const spacing = 20 / (count - 1) // total cover from +10 to -10
        const leftStars = Array.from({ length: count }, (_, i) => ({
            position: [leftX, 10 - i * spacing, 0] as [number, number, number],
        }))
        const rightStars = Array.from({ length: count }, (_, i) => ({
            position: [rightX, 10 - i * spacing, 0] as [number, number, number],
        }))
        return [...leftStars, ...rightStars]
    }, [])

    return (
        <>
            <div className='fixed inset-0 z-10' onMouseMove={handleMouseMove}>
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 10], fov: 50 }}
                    gl={{ antialias: true }}
                    className='w-full h-full'
                >
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

                    {starPositions.map((starPos, idx) => (
                        <StarResponsiveModel
                            key={idx}
                            star={star}
                            position={starPos.position}
                        />
                    ))}
                </Canvas>
            </div>
            <div className='relative min-h-screen mx-auto text-center mt-60'>
                pic goes here
            </div>
        </>
    )
}

interface StarProps {
    star: { x: number; y: number }
    position: [number, number, number]
}

function StarResponsiveModel({ star, position }: StarProps) {
    const gltf = useGLTF('/star.glb')
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (!groupRef.current) return
        // Smooth rotation based on cursor
        const targetRotX = star.y * 0.5
        const targetRotY = star.x * 0.5
        groupRef.current.rotation.x +=
            (targetRotX - groupRef.current.rotation.x) * 0.1
        groupRef.current.rotation.y +=
            (targetRotY - groupRef.current.rotation.y) * 0.1
    })

    return (
        <group ref={groupRef} position={position} scale={1.5}>
            <primitive
                object={gltf.scene}
                castShadow
                rotation={[-Math.PI / 2, 1.5, -Math.PI]}
            />
        </group>
    )
}

useGLTF.preload('/star.glb')
