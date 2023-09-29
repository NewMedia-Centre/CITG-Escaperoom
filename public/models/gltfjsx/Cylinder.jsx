/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Cylinder.glb --transform --simplify
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Cylinder(props) {
  const { nodes, materials } = useGLTF('models/gltfjsx/Cylinder-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Felt} />
      <mesh geometry={nodes.Cylinder_2.geometry} material={materials.Cork} />
    </group>
  )
}

useGLTF.preload('models/gltfjsx/Cylinder-transformed.glb')
