/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Cannon.glb --simplify --transform
*/
// Cannon.jsx

import React, { forwardRef } from 'react'
import { useGLTF, Text } from '@react-three/drei'

export const Cannon = forwardRef((props, ref) => {
  const { setSelectedObject, selectedObject } = props
  const { nodes, materials } = useGLTF('models/gltfjsx/Cannon-transformed.glb')

  return (
    <group name='cannon' {...props} dispose={null} onPointerDown={(obj) => {
      obj.stopPropagation()
      setSelectedObject(obj.eventObject)
    }
    }>
      <mesh geometry={nodes.Cannon.geometry} material={materials.PaintedMetal} position={[-0.261, 3.4, 4.789]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.549}>
        <Text color="black" scale={0.3} rotation={[-Math.PI / 2, Math.PI, 0]} position={[0, -1.3, -0.52]}>
          {/* v = 7.5 */}
        </Text>
      </mesh>
      <mesh ref={ref} geometry={nodes.CannonBarrel.geometry} material={materials.DarkGrayMetal} position={[-0.261, 4.0, 4.789]} scale={0.482} />
    </group>
  )
})

useGLTF.preload('models/gltfjsx/Cannon-transformed.glb')
