/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Target.glb --simplify --transform
*/

import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

export const Target = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('models/gltfjsx/Target-transformed.glb')
  return (
    <group ref={ref} {...props} dispose={null}>
      <group position={[-3.572, 5.667, 4.887]}>
        <mesh geometry={nodes.Circle001.geometry} material={materials.WhiteTarget} />
        <mesh geometry={nodes.Circle001_1.geometry} material={materials.BlackTarget} />
        <mesh geometry={nodes.Circle001_2.geometry} material={materials.RedTarget} />
      </group>
    </group>
  )
})

useGLTF.preload('models/gltfjsx/Target-transformed.glb')
