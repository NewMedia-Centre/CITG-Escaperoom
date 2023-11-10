/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Level02.glb --transform
*/

import React, { forwardRef, useRef, useState, createRef, useEffect } from 'react'
import { useFrame } from "@react-three/fiber"
import { useGLTF, Text3D, Text } from '@react-three/drei'
import * as THREE from 'three'
import { MathUtils } from 'three'
import Ring from './Ring'
import Cylinder from './Cylinder'
import Sphere from './Sphere'

export const Level02Model = forwardRef((props, ref) => {
  const { weightRef, laserRef, cabinetRef, solutionRef } = ref
  var { progress, setSelectedObject, weights, selectedSolution } = props

  const rope001Ref = useRef()
  const rope002Ref = useRef()
  const rope003Ref = useRef()
  const circle003Ref = useRef()
  const rope004Ref = useRef()
  const ropeRef = useRef()
  const benchRef = useRef()

  const { nodes, materials } = useGLTF('models/gltfjsx/Level02-transformed.glb')
  const [planes] = useState(() => [[-0.05, 0, 0]].map(v => new THREE.Plane(new THREE.Vector3(...v), 1))) // prettier-ignore
  const [planeObjects] = useState(() => [createRef()])

  const initRope001Position = new THREE.Vector3(0, 0.6, 2.304)
  const initRope002Position = new THREE.Vector3(0, 0.6, -2.366)
  const initRope003Position = new THREE.Vector3(0, 0.548, -2.416)
  const initCircle003Position = new THREE.Vector3(0, 0.355, -2.418)
  const initRope004Position = new THREE.Vector3(0, 0.356, -2.518)
  const initWeightPosition = new THREE.Vector3(0, 0, 0)

  // Function to scale ropes to make it look like they are connected
  const ropeScaler = () => {

    // Get the positions of the ropes
    const rope001Position = rope001Ref.current?.position
    const rope002Position = rope002Ref.current?.position
    const rope003Position = rope003Ref.current?.position
    const circle003Position = circle003Ref.current?.position
    const rope004Position = rope004Ref.current?.position
    const ropePosition = ropeRef.current?.position

    // Calculate the distance between ropes
    const distance12 = rope001Position.distanceTo(rope002Position)
    const distance23 = rope003Position.distanceTo(circle003Position)
    const distance40 = rope004Position.distanceTo(ropePosition)

    // Set the scale of ropes based on the distance and original length
    rope001Ref.current.scale.y = (distance12 / 4.66989)
    rope003Ref.current.scale.y = (distance23 / 0.194032)
    ropeRef.current.scale.y = (distance40 / 2.49068)
  }

  const getClippedMat = (planes) => ({
    color: 0xffc107,
    metalness: 0.1,
    roughness: 0.75,
    clippingPlanes: planes,
    clipShadows: true,
    shadowSide: THREE.DoubleSide,
  })

  const getPlaneMat = (plane) => ({
    color: 0xe91e63,
    metalness: 0.1,
    roughness: 0.75,
    clippingPlanes: plane,
    stencilWrite: true,
    stencilRef: 0,
    stencilFunc: THREE.NotEqualStencilFunc,
    stencilFail: THREE.ReplaceStencilOp,
    stencilZFail: THREE.ReplaceStencilOp,
    stencilZPass: THREE.ReplaceStencilOp,
  })

  useEffect(() => {
    // Should only make the group visible depending on the type of solution
    solutionRef.current.children.forEach((child) => {
      if (child.name === selectedSolution) {
        child.visible = true
      }
      else {
        child.visible = false
      }
    })
  }, [selectedSolution])

  // Call the scaleRope001 function in the useFrame hook to update the scale continuously
  useFrame(({ clock }) => {

    rope001Ref.current.position.z = MathUtils.lerp(initRope001Position.z, -2, progress.get())
    rope002Ref.current.position.z = MathUtils.lerp(initRope002Position.z, -2.36, progress.get())
    circle003Ref.current.position.y = MathUtils.lerp(initCircle003Position.y, -4, progress.get())
    rope003Ref.current.position.y = MathUtils.lerp(initRope003Position.y, 0.55, progress.get())
    rope004Ref.current.position.y = MathUtils.lerp(initRope004Position.y, -4, progress.get())
    weightRef.current.position.y = MathUtils.lerp(initWeightPosition.y, -4.35, progress.get())

    solutionRef.current.position.x = rope001Ref.current.position.x
    solutionRef.current.position.y = rope001Ref.current.position.y + 0.2
    solutionRef.current.position.z = rope001Ref.current.position.z

    ropeScaler()

    // Well clipping plane
    // planes.forEach((plane, i) => {
    //   const po = planeObjects[i].current
    //   plane.coplanarPoint(po.position)
    //   po.lookAt(po.position.x - plane.normal.x, po.position.y - plane.normal.y, po.position.z - plane.normal.z)
    // })
  })

  return (
    <group {...props} dispose={null}>
      <group name='weight' ref={weightRef} onPointerDown={(obj) => setSelectedObject(obj.eventObject)}>
        <mesh name='weight' geometry={nodes.Pulley004.geometry} material={materials.BlackMetal} position={[0, 0.355, -2.467]} />
        <mesh geometry={nodes.PulleyWeight.geometry} material={materials.Alluminium} position={[0, 0.355, -2.467]} rotation={[0, 0, -Math.PI / 2]} scale={[0.01, 0.032, 0.01]} />
        <mesh geometry={nodes.Weight.geometry} material={materials.AlluminiumDark} position={[0, 0.178, -2.467]} scale={[0.069, 0.089, 0.069]} />
        {/* TODO: CLEAR BOX MATERIAL */}
        {/* <Box position={[0, 0.178, -2.467]} scale={[1, 3, 1]} >
        </Box> */}
      </group>

      <mesh ref={rope004Ref} geometry={nodes.Rope004.geometry} material={materials.Rope} position={[0, 0.356, -2.518]} />
      <mesh ref={circle003Ref} geometry={nodes.Circle003.geometry} material={materials.Rope} position={[0, 0.355, -2.418]} />
      <mesh geometry={nodes.Ground.geometry} position={[0, -0.0005, 0]} material={materials.Ground}>
        <group position={[0, -0.15, -2.09]} rotation={[0, -Math.PI, 0]} scale={[.2, .2, .2]}>
          <Text color="white" anchorX="center" anchorY="middle" scale={[0.4, 0.4, 0.4]} text={"Gewicht: 10kg \n Acceleratie: -1"} />
        </group>
      </mesh >
      <mesh ref={rope003Ref} geometry={nodes.Rope003.geometry} material={materials.Rope} position={[0, 0.548, -2.416]} rotation={[0, 0, -Math.PI]} />
      <mesh ref={rope001Ref} geometry={nodes.Rope001.geometry} material={materials.Rope} position={[0, 0.6, 2.304]} rotation={[Math.PI / 2, 0, 0]} />
      <group name="solution" position={[0, 0, -0.2]} scale={2} ref={solutionRef} rotation={[0, Math.PI / 2, Math.PI]} onPointerDown={(obj) => setSelectedObject(obj.eventObject)}>
        <group name="ring" visible={false}>
          <Ring />
          <Text3D rotation={[Math.PI, Math.PI, 0]} position={[0.065, -0.05, -0.02]} height={.04} size={0.07} font="/Roboto_Regular.json"><meshStandardMaterial color="white" />{weights.weightRing}kg</Text3D>
        </group>
        <group name="cylinder" visible={false}>
          <Cylinder />
          <Text3D rotation={[Math.PI, Math.PI, 0]} position={[0.065, -0.05, -0.02]} height={.04} size={0.07} font="/Roboto_Regular.json"><meshStandardMaterial color="white" />{weights.weightCylinder}kg</Text3D>
        </group>
        <group name="sphere" visible={false}>
          <Sphere />
          <Text3D rotation={[Math.PI, Math.PI, 0]} position={[0.065, -0.05, -0.02]} height={.04} size={0.07} font="/Roboto_Regular.json">
            <meshStandardMaterial color="white" />{weights.weightSphere}kg</Text3D>
        </group>
      </group>
      <group position={[0, -4, -2.077]} rotation={[-Math.PI, 0, -Math.PI]}>
        <mesh geometry={nodes.Laser_1.geometry} material={materials.Alluminium} />
        <mesh ref={laserRef} rotation={[0, 0, 0]} geometry={nodes.Laser_2.geometry} material={materials.Laser} />
      </group>
      <mesh ref={benchRef} name='bench' geometry={nodes.Bench.geometry} material={materials.Wood} position={[0, 0.35, 0.231]} onPointerDown={(obj) => setSelectedObject(obj.eventObject)} />
      <mesh geometry={nodes.Foots.geometry} material={materials.Wood} position={[0.155, 0.233, -1.95]} />
      <mesh geometry={nodes.Pulley.geometry} material={materials.BlackMetal} position={[0, 0.348, -2.02]} rotation={[Math.PI / 6, 0, 0]} scale={[0.336, 1, 1]} />
      <mesh geometry={nodes.Pulley001.geometry} material={materials.BlackMetal} position={[0, 0.548, -2.366]} rotation={[Math.PI / 6, 0, 0]} scale={[0.158, 1, 1]} />
      <mesh ref={rope002Ref} geometry={nodes.Rope002.geometry} material={materials.Rope} position={[0, 0.6, -2.366]} rotation={[Math.PI / 2, 0, 0]} />
      <group name='cabinet' ref={cabinetRef} onPointerDown={(obj) => setSelectedObject(obj.eventObject)}>
        <mesh geometry={nodes.Cabinet.geometry} material={materials.Alluminium} position={[-2.75, 0, 1.209]} />
        <mesh geometry={nodes.CabinetDoor.geometry} material={materials.AlluminiumDark} position={[-2.307, 0, 1.893]} rotation={[-Math.PI, -0.527, -Math.PI]} />
        <mesh geometry={nodes.CabinetDoor001.geometry} material={materials.AlluminiumDark} position={[-2.307, 0, 0.526]} rotation={[-Math.PI, Math.PI / 6, -Math.PI]} >

          <group position={[0, 1.5, 0.05]} rotation={[0, -Math.PI / 2, 0]} scale={[0.05, 0.05, 0.05]}>
            <Text text={"Radius objecten: 0.2m \nAcceleratie: 2 \nHoekversnelling: 10"} color="white" anchorX="left" anchorY="middle">
            </Text>
          </group>

        </mesh>
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials.AlluminiumDark} position={[-2.694, 0.4, 1.209]} scale={[0.286, 0.656, 0.656]} />
      <mesh geometry={nodes.Ceiling.geometry} material={materials.Walls} position={[0, 3, -0.5]} rotation={[-Math.PI, 0, 0]} />
      <mesh geometry={nodes.PulleyCeiling.geometry} material={materials.BlackMetal} position={[0, 3, -2.518]} />
      <mesh ref={ropeRef} geometry={nodes.Rope.geometry} material={materials.Rope} position={[0, 2.847, -2.518]} rotation={[0, 0, Math.PI]} />
      <mesh geometry={nodes.Walls.geometry} material={materials.Walls} position={[3, 1, 3]} />
      <mesh geometry={nodes.Walls.geometry} material={materials.Walls} position={[3, 1, 3]} />
      <group name='door' onPointerDown={(obj) => setSelectedObject(obj.eventObject)}>
        <mesh geometry={nodes.DoorFrame.geometry} material={materials.WoodWhite} position={[-2.75, 0, -1.19]} rotation={[0, Math.PI / 2, 0]} />
        <mesh geometry={nodes.Door.geometry} material={materials.Wood} position={[-2.728, 1.05, -1.608]} rotation={[0, Math.PI / 2, 0]} />
      </group>
      <mesh geometry={nodes.Handle_Back.geometry} material={materials.Alluminium} position={[-2.733, 1.05, -0.844]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Handle_Front.geometry} material={nodes.Handle_Front.material} position={[-2.757, 1.05, -0.844]} rotation={[Math.PI, -Math.PI / 2, 0]} />

      {/* <group ref={wellRef}>
        <mesh geometry={nodes.Well.geometry} position={[0, -0.01, -2.5]} renderOrder={6}>
          <meshStandardMaterial {...getClippedMat(planes)} />
        </mesh>
        {planes.map((plane, i) => (
          <PlaneStencilGroup position={[0, -0.01, -2.5]} geometry={nodes.Well.geometry} plane={plane} renderOrder={i + 1} />
        ))}
        {planeObjects.map((planeRef, index) => (
          <Plane key={`0`} ref={planeRef} args={[10, 10]} renderOrder={index + 1.1} onAfterRender={(gl) => gl.clearStencil()}>
            <meshStandardMaterial {...getPlaneMat(planes.filter((_, i) => i !== index))} />
          </Plane>
        ))}
      </group> */}
    </group >
  )
})

function PlaneStencilGroup({ position, geometry, plane, renderOrder }) {
  const mat = {
    depthWrite: false,
    depthTest: false,
    colorWrite: false,
    stencilWrite: true,
    stencilFunc: THREE.AlwaysStencilFunc,
  }
  const matBack = {
    ...mat,
    side: THREE.BackSide,
    clippingPlanes: [plane],
    stencilFail: THREE.IncrementWrapStencilOp,
    stencilZFail: THREE.IncrementWrapStencilOp,
    stencilZPass: THREE.IncrementWrapStencilOp,
  }
  const matFront = {
    ...mat,
    side: THREE.FrontSide,
    clippingPlanes: [plane],
    stencilFail: THREE.DecrementWrapStencilOp,
    stencilZFail: THREE.DecrementWrapStencilOp,
    stencilZPass: THREE.DecrementWrapStencilOp,
  }

  return (
    <group position={position}>
      <mesh geometry={geometry} renderOrder={renderOrder}>
        <meshBasicMaterial {...matFront} />
      </mesh>
      <mesh geometry={geometry} renderOrder={renderOrder}>
        <meshBasicMaterial {...matBack} />
      </mesh>
    </group>
  )
}

useGLTF.preload('models/gltfjsx/Level02-transformed.glb')
