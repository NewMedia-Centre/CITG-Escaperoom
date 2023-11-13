/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Level04.glb --transform --simplify
*/

import React, { forwardRef, useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations, Box } from '@react-three/drei'

export const Level04Model = forwardRef((props, ref) => {
  const group = useRef()
  const woodenFloorRef = useRef()
  const iceFloorRef = useRef()
  const sandFloorRef = useRef()
  const concreteFloorRef = useRef()
  const { materialsRef, boatRef } = ref
  const {
    animation, setAnimation,
    selectedObject, setSelectedObject,
    setGameOver,
    setGameWon,
  } = props

  const { nodes, materials, animations } = useGLTF('models/gltfjsx/Level04-transformed.glb')
  const { actions, mixer } = useAnimations(animations, group)


  useEffect(() => {
    iceFloorRef.current.visible = false
    sandFloorRef.current.visible = false
    concreteFloorRef.current.visible = false
    woodenFloorRef.current.visible = false

    switch (selectedObject?.name) {
      case "Wood":
        woodenFloorRef.current.visible = true
        break;
      case "Ice":
        iceFloorRef.current.visible = true
        break;
      case "Sand":
        sandFloorRef.current.visible = true
        break;
      case "Concrete":
        concreteFloorRef.current.visible = true
        break;
    }
  }, [selectedObject])

  useEffect(() => {
    if (animation) {
      actions['Pushing']?.reset().play()
      actions[animation]?.reset().play()
      setAnimation()
    }
  }, [animation])

  // Set gameover or win when animation is finished
  useEffect(() => {
    const fn = (e) => {
      if (e.action !== actions['Pushing']) {
        if (e.action._clip.name === "TooNear" || e.action._clip.name === "TooFar") {
          setGameOver(true)
        }
        else if (e.action._clip.name === "Correct") {
          setGameWon(true)
        }
      }
    }

    mixer.addEventListener('finished', fn)
    return () => mixer.removeEventListener('finished', fn)
  }, [mixer])


  useEffect(() => {
    if (selectedObject) {
      // Stop & reset all animations
      actions['TooNear']?.stop().reset()
      actions['Correct']?.stop().reset()
      actions['TooFar']?.stop().reset()
      actions['Pushing']?.stop().reset()
    }
  }, [selectedObject])

  useEffect(() => {
    if (actions) {
      // Set actions animation loop to false
      actions['TooNear']?.setLoop(2200)
      actions['Correct']?.setLoop(2200)
      actions['TooFar']?.setLoop(2200)
      actions['Pushing']?.setLoop(2200)
      actions['TooNear'].clampWhenFinished = 1
      actions['Correct'].clampWhenFinished = 1
      actions['TooFar'].clampWhenFinished = 1
      actions['Pushing'].clampWhenFinished = 1
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Pushing001" position={[0, 19.452, 1.244]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.01}>
          <group name="mixamorig9Hips" position={[0, 2.109, -95.704]} rotation={[-Math.PI / 2, 0, 0]}>
            <group name="mixamorig9Spine" position={[0, 10.547, -1.005]} rotation={[-0.095, 0, 0]}>
              <group name="mixamorig9Spine1" position={[0, 12.361, 0]}>
                <group name="mixamorig9Spine2" position={[0, 14.126, 0]}>
                  <group name="mixamorig9Neck" position={[0, 15.892, 0]} rotation={[0.095, 0, 0]}>
                    <group name="mixamorig9Head" position={[0, 6.594, 1.985]}>
                      <group name="mixamorig9HeadTop_End" position={[0, 22.578, 6.796]} />
                    </group>
                  </group>
                  <group name="mixamorig9LeftShoulder" position={[6.914, 14.071, -0.18]} rotation={[1.564, -0.255, -1.597]}>
                    <group name="mixamorig9LeftArm" position={[0, 14.455, 0]} rotation={[-0.199, 0.007, -0.034]}>
                      <group name="mixamorig9LeftForeArm" position={[0, 27.398, 0]} rotation={[-0.085, -0.011, 0.125]}>
                        <group name="mixamorig9LeftHand" position={[0, 21.34, 0]} rotation={[0.117, 0.191, -0.014]}>
                          <group name="mixamorig9LeftHandThumb1" position={[-2.968, 3.164, 1.403]} rotation={[0.271, 0.168, 0.541]}>
                            <group name="mixamorig9LeftHandThumb2" position={[-0.653, 3.589, 0]} rotation={[0.091, 0, 0]}>
                              <group name="mixamorig9LeftHandThumb3" position={[-0.029, 3.246, 0]} rotation={[-0.073, 0, 0]}>
                                <group name="mixamorig9LeftHandThumb4" position={[0.682, 2.456, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9LeftHandIndex1" position={[-3.495, 9.572, 0.115]} rotation={[0.031, 0.005, 0.146]}>
                            <group name="mixamorig9LeftHandIndex2" position={[0.018, 3.403, 0]} rotation={[0.124, 0, 0]}>
                              <group name="mixamorig9LeftHandIndex3" position={[-0.011, 3.14, 0]} rotation={[-0.016, 0, 0]}>
                                <group name="mixamorig9LeftHandIndex4" position={[-0.007, 2.744, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9LeftHandMiddle1" position={[-1.094, 10.003, -0.174]} rotation={[0.006, 0, 0.004]}>
                            <group name="mixamorig9LeftHandMiddle2" position={[0.019, 3.467, 0]} rotation={[0.195, 0, 0]}>
                              <group name="mixamorig9LeftHandMiddle3" position={[-0.015, 3.319, 0]} rotation={[-0.06, 0, 0]}>
                                <group name="mixamorig9LeftHandMiddle4" position={[-0.004, 2.927, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9LeftHandRing1" position={[1.15, 10.185, -0.232]} rotation={[0.159, -0.007, -0.042]}>
                            <group name="mixamorig9LeftHandRing2" position={[-0.005, 2.914, 0]} rotation={[0.061, 0, 0]}>
                              <group name="mixamorig9LeftHandRing3" position={[-0.012, 2.751, 0]} rotation={[-0.265, 0, 0]}>
                                <group name="mixamorig9LeftHandRing4" position={[0.017, 2.295, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9LeftHandPinky1" position={[3.439, 9.137, 0]} rotation={[0.119, -0.005, -0.04]}>
                            <group name="mixamorig9LeftHandPinky2" position={[0.002, 2.57, 0]} rotation={[0.159, 0, 0]}>
                              <group name="mixamorig9LeftHandPinky3" position={[-0.014, 2.322, 0]} rotation={[-0.296, 0, 0]}>
                                <group name="mixamorig9LeftHandPinky4" position={[0.012, 1.816, 0]} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                  <group name="mixamorig9RightShoulder" position={[-6.914, 14.069, -0.167]} rotation={[1.564, 0.255, 1.596]}>
                    <group name="mixamorig9RightArm" position={[0, 14.455, 0]} rotation={[-0.199, -0.007, 0.035]}>
                      <group name="mixamorig9RightForeArm" position={[0, 27.396, 0]} rotation={[-0.086, 0.01, -0.113]}>
                        <group name="mixamorig9RightHand" position={[0, 21.327, 0]} rotation={[0.113, -0.195, -0.016]}>
                          <group name="mixamorig9RightHandThumb1" position={[2.967, 3.066, 1.339]} rotation={[0.26, -0.169, -0.563]}>
                            <group name="mixamorig9RightHandThumb2" position={[0.624, 3.522, 0]} rotation={[0.103, 0, 0]}>
                              <group name="mixamorig9RightHandThumb3" position={[-0.177, 3.36, 0]} rotation={[-0.023, 0, 0]}>
                                <group name="mixamorig9RightHandThumb4" position={[-0.447, 2.795, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9RightHandIndex1" position={[3.606, 9.874, 0.132]} rotation={[0.035, -0.002, -0.069]}>
                            <group name="mixamorig9RightHandIndex2" position={[-0.017, 3.276, 0]} rotation={[0.128, 0, 0]}>
                              <group name="mixamorig9RightHandIndex3" position={[0.009, 3.084, 0]} rotation={[0.01, 0, 0]}>
                                <group name="mixamorig9RightHandIndex4" position={[0.009, 2.615, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9RightHandMiddle1" position={[1.005, 10.212, -0.307]} rotation={[0.068, 0, 0.002]}>
                            <group name="mixamorig9RightHandMiddle2" position={[-0.012, 3.534, 0]} rotation={[0.133, 0, 0]}>
                              <group name="mixamorig9RightHandMiddle3" position={[0.012, 3.218, 0]} rotation={[-0.076, 0, 0]}>
                                <group name="mixamorig9RightHandMiddle4" position={[-0.001, 2.86, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9RightHandRing1" position={[-1.186, 10.211, -0.202]} rotation={[0.161, 0.014, 0.085]}>
                            <group name="mixamorig9RightHandRing2" position={[0.003, 2.929, 0]} rotation={[0.057, 0, 0]}>
                              <group name="mixamorig9RightHandRing3" position={[0.009, 2.741, 0]} rotation={[-0.202, 0, 0]}>
                                <group name="mixamorig9RightHandRing4" position={[-0.012, 2.344, 0]} />
                              </group>
                            </group>
                          </group>
                          <group name="mixamorig9RightHandPinky1" position={[-3.425, 8.862, 0.009]} rotation={[0.101, 0.009, 0.084]}>
                            <group name="mixamorig9RightHandPinky2" position={[-0.011, 2.789, 0]} rotation={[0.194, 0, 0]}>
                              <group name="mixamorig9RightHandPinky3" position={[0.012, 2.356, 0]} rotation={[-0.114, 0, 0]}>
                                <group name="mixamorig9RightHandPinky4" position={[0, 2.095, 0]} />
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
            <group name="mixamorig9LeftUpLeg" position={[8.927, -5.876, 0.082]} rotation={[0.083, 0, -3.049]}>
              <group name="mixamorig9LeftLeg" position={[0, 41.07, 0]} rotation={[0.011, 0, -0.036]}>
                <group name="mixamorig9LeftFoot" position={[0, 37.69, 0]} rotation={[1.093, -0.09, 0.172]}>
                  <group name="mixamorig9LeftToeBase" position={[0, 19.417, 0]} rotation={[0.595, -0.057, 0.039]}>
                    <group name="mixamorig9LeftToe_End" position={[0, 7.932, 0]} />
                  </group>
                </group>
              </group>
            </group>
            <group name="mixamorig9RightUpLeg" position={[-8.927, -5.876, 0.12]} rotation={[0.086, 0, 3.049]}>
              <group name="mixamorig9RightLeg" position={[0, 41.081, 0]} rotation={[0.004, 0, 0.036]}>
                <group name="mixamorig9RightFoot" position={[0, 37.718, 0]} rotation={[1.113, 0.084, -0.169]}>
                  <group name="mixamorig9RightToeBase" position={[0, 19.76, 0]} rotation={[0.585, 0.066, -0.044]}>
                    <group name="mixamorig9RightToe_End" position={[0, 7.937, 0]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <mesh name="CITG_Building" geometry={nodes.CITG_Building.geometry} material={materials.Gray} scale={[4, 15, 4]} />
        <group name="EWI_Building" position={[-6.263, 0, -85.479]} scale={[1.065, 41.524, 2.236]}>
          <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Gray.001']} />
          <mesh name="Cube002_1" geometry={nodes.Cube002_1.geometry} material={materials.Red} />
          <mesh name="Cube002_2" geometry={nodes.Cube002_2.geometry} material={materials.Black} />
        </group>
        <group name="Room" scale={[4, 15, 4]}>
          <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials.Room} />
          <mesh name="Cube004_1" geometry={nodes.Cube004_1.geometry} material={materials.Floor} />
        </group>
        <mesh name="Walls" geometry={nodes.Walls.geometry} material={materials.Gray} scale={[4, 15, 4]} />
        <mesh name="MaterialSelector" geometry={nodes.MaterialSelector.geometry} material={materials['Balsa wood']} position={[2.244, 19.3, -0.751]}>
          <Box ref={materialsRef} args={[3, 3, 3]} position={[-1, 1.5, 0]} visible={false} />
        </mesh>
        <mesh name="Ch31_Body" geometry={nodes.Ch31_Body.geometry} material={materials.Ch31_body} position={[-0.155, 73.27, -3.121]} scale={0.01} />
        <mesh name="Ch31_Collar" geometry={nodes.Ch31_Collar.geometry} material={materials.Ch31_body} position={[-0.15, 72.74, -3.106]} scale={0.01} />
        <mesh name="Ch31_Eyelashes" geometry={nodes.Ch31_Eyelashes.geometry} material={materials.Ch31_hair} position={[-0.149, 72.885, -3.226]} scale={0.01} />
        <mesh name="Ch31_Hair" geometry={nodes.Ch31_Hair.geometry} material={materials.Ch31_hair} position={[-0.157, 72.922, -3.111]} scale={0.01} />
        <mesh name="Ch31_Pants" geometry={nodes.Ch31_Pants.geometry} material={materials.Ch31_body} position={[-0.15, 71.82, -3.105]} scale={0.01} />
        <mesh name="Ch31_Shoes" geometry={nodes.Ch31_Shoes.geometry} material={materials.Ch31_body} position={[-0.149, 71.262, -3.147]} scale={0.01} />
        <mesh name="Ch31_Sweater" geometry={nodes.Ch31_Sweater.geometry} material={materials.Ch31_body} position={[-0.147, 72.5, -3.114]} scale={0.01} />
        <mesh name="RescueBoot" geometry={nodes.RescueBoot.geometry} material={materials.M_Boot} position={[0, 19.502, -2.748]} rotation={[0.003, 0, 0]}>
          <group name="Pushing" position={[0, -0.037, 3.952]} rotation={[1.568, 0, Math.PI]} scale={0.01}>
            <primitive object={nodes.mixamorig9Hips_1} />
            <skinnedMesh name="Ch31_Body001" geometry={nodes.Ch31_Body001.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Body001.skeleton} />
            <skinnedMesh name="Ch31_Collar001" geometry={nodes.Ch31_Collar001.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Collar001.skeleton} />
            <skinnedMesh name="Ch31_Eyelashes001" geometry={nodes.Ch31_Eyelashes001.geometry} material={materials.Ch31_hair} skeleton={nodes.Ch31_Eyelashes001.skeleton} />
            <skinnedMesh name="Ch31_Hair001" geometry={nodes.Ch31_Hair001.geometry} material={materials.Ch31_hair} skeleton={nodes.Ch31_Hair001.skeleton} />
            <skinnedMesh name="Ch31_Pants001" geometry={nodes.Ch31_Pants001.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Pants001.skeleton} />
            <skinnedMesh name="Ch31_Shoes001" geometry={nodes.Ch31_Shoes001.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Shoes001.skeleton} />
            <skinnedMesh name="Ch31_Sweater001" geometry={nodes.Ch31_Sweater001.geometry} material={materials.Ch31_body} skeleton={nodes.Ch31_Sweater001.skeleton} />
          </group>
          <group name="Passengers" position={[0, -0.019, -0.005]}>
            <mesh name="Mesh010" geometry={nodes.Mesh010.geometry} material={materials.Ch23_body} />
            <mesh name="Mesh010_1" geometry={nodes.Mesh010_1.geometry} material={materials.Ch23_hair} />
            <mesh name="Mesh010_2" geometry={nodes.Mesh010_2.geometry} material={materials.Ch12_body} />
            <mesh name="Mesh010_3" geometry={nodes.Mesh010_3.geometry} material={materials.Ch12_hair} />
            <mesh name="Mesh010_4" geometry={nodes.Mesh010_4.geometry} material={materials.Ch21_body} />
            <mesh name="Mesh010_5" geometry={nodes.Mesh010_5.geometry} material={materials.Ch21_hair} />
            <mesh name="Mesh010_6" geometry={nodes.Mesh010_6.geometry} material={materials.Ch02_body} />
            <mesh name="Mesh010_7" geometry={nodes.Mesh010_7.geometry} material={materials.Ch02_hair} />
          </group>
        </mesh>
        <mesh name="WaterSlide_Big_Half" geometry={nodes.WaterSlide_Big_Half.geometry} material={materials['Aluminium sand']} position={[0.366, 19, -4]} rotation={[0, 0, -Math.PI / 2]} />
        <mesh name="transparent-clock" geometry={nodes['transparent-clock'].geometry} material={materials['transparent-clock']} position={[-5.089, 69.943, -85.715]} rotation={[1.571, 0, -1.571]} scale={4.019} />
        <mesh ref={concreteFloorRef} name="ConcreteFloor" geometry={nodes.ConcreteFloor.geometry} material={materials.Concrate} scale={[4, 15, 4]} />
        <mesh ref={iceFloorRef} name="IceFloor" geometry={nodes.IceFloor.geometry} material={materials['Ice.002']} scale={[4, 15, 4]} />
        <mesh ref={sandFloorRef} name="SandFloor" geometry={nodes.SandFloor.geometry} material={materials['Sand.001']} scale={[4, 15, 4]} />
        <mesh ref={woodenFloorRef} name="WoodenFloor" geometry={nodes.WoodenFloor.geometry} material={materials['Wooden surface']} scale={[4, 15, 4]} />
        <mesh name="MaterialSelectorFrame" geometry={nodes.MaterialSelectorFrame.geometry} material={materials['Plastic Wood']} position={[2.244, 19.3, -0.751]} scale={[0.2, 0.2, 0.19]} />
        <mesh name="Concrete" geometry={nodes.SelectableConcrete.geometry} material={materials.Concrate} position={[2.272, 20.016, -0.439]} scale={[1, 1, 0.95]} onClick={(obj) => {
          obj.stopPropagation()
          setSelectedObject(obj.eventObject)
        }} />
        <mesh name="Ice" geometry={nodes.SelectableIce.geometry} material={materials['Ice.002']} position={[2.272, 20.016, -0.837]} scale={[1, 1, 0.95]}
          onClick={(obj) => {
            obj.stopPropagation()
            setSelectedObject(obj.eventObject)
          }} />
        <mesh name="Sand" geometry={nodes.SelectableSand.geometry} material={materials['Sand.001']} position={[2.272, 20.016, -1.257]} scale={[1, 1, 0.95]}
          onClick={(obj) => {
            obj.stopPropagation()
            setSelectedObject(obj.eventObject)
          }} />
        <mesh name="Wood" geometry={nodes.SelectableWood.geometry} material={materials['Wooden surface']} position={[2.272, 20.016, -1.436]} scale={[1, 1, 0.95]}
          onClick={(obj) => {
            obj.stopPropagation()
            setSelectedObject(obj.eventObject)
          }} />
      </group>
    </group>
  )
})

useGLTF.preload('models/gltfjsx/Level04-transformed.glb')