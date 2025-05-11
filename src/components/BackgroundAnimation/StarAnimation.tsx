'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export default function Mousemodel({ className }: { className?: string }) {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
        setMouse({ x, y })
    }

    return (
        <div className={className} onMouseMove={handleMouseMove}>
            <Canvas
                shadows
                camera={{ position: [0, 0, 10], fov: 50 }}
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
                <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                    <planeGeometry args={[20, 20]} />
                    <shadowMaterial transparent opacity={0.2} />
                </mesh>
                <MouseResponsiveModel mouse={mouse} />
            </Canvas>
        </div>
    )
}

function MouseResponsiveModel({ mouse }: { mouse: { x: number; y: number } }) {
    const gltf = useGLTF('/star.glb')
    const groupRef = useRef<THREE.Group>(null)

    useFrame(() => {
        if (!groupRef.current) return

        // Smooth rotation based on cursor
        const targetRotX = mouse.y * 0.5
        const targetRotY = mouse.x * 0.5
        groupRef.current.rotation.x +=
            (targetRotX - groupRef.current.rotation.x) * 0.1
        groupRef.current.rotation.y +=
            (targetRotY - groupRef.current.rotation.y) * 0.1
    })

    return (
        <group ref={groupRef} position={[0, 0, 0]} scale={1.5}>
            <primitive
                object={gltf.scene}
                castShadow
                rotation={[-Math.PI / 2, 1.5, -Math.PI]}
            />
        </group>
    )
}

useGLTF.preload('/star.glb')
