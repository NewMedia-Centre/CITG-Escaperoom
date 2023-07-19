//Scene.jsx
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  PerformanceMonitor,
  CameraControls,
  Grid,
  Sphere,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { EffectComposer, N8AO, SMAA } from "@react-three/postprocessing";
import React, { useEffect, useRef, useState, useTransition } from "react";
import { Model as CannonLevel } from "../public/models/gltfjsx/CannonLevel";
import { Cannon } from "../public/models/gltfjsx/Cannon";
import { Target } from "../public/models/gltfjsx/Target";
import { useSphere, usePlane, useBox } from '@react-three/cannon'
import Ocean from "./Ocean";

export default function Scene({ cannonRef, setFireFunction, lives, setLives, setGameOver, gameOver, setGameWon, gameWon, setResetGame, resetGame }) {
  const meshRef = useRef()
  const cameraControlsRef = useRef()
  const oceanRef = useRef()
  const [cannonBallRef, cannonBallApi] = useSphere(() => ({
    args: [0.4],
    mass: 1,
    onCollide: (e) => handleCollision(e, "cannonBall")
  }))
  const [targetRef] = useBox(() => ({
    args: [2.2, 0.2, 2.2],
    position: [-2, 0.1, 16],
    type: "Kinematic",
    onCollide: (e) => handleCollision(e, "target")
  }))
  const [groundRef] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0.1, 0],
    type: "Static",
    onCollide: (e) => handleCollision(e, "ground")
  }))

  let hitHandled = false
  const [elapsed, setElapsed] = useState(0) // time elapsed
  const waterRisingDuration = 60 // duration of transition in seconds
  const gameOverThreshold = 18 // water level at which game is over

  const handleCollision = (event, name) => {
    if (name === "cannonBall" && !hitHandled && !gameOver && !gameWon) {
      if (event.body.uuid === targetRef.current.uuid) {
        console.log("The target was hit first!")
        setGameWon(true)
      } else if (event.body.uuid === groundRef.current.uuid) {
        console.log("The ground was hit first!")
        takeLive()
      }
      hitHandled = true
    }
  }

  const takeLive = () => {
    setLives(lives => lives - 1) // Updates lives using callback
  }

  // Define a function to switch the mass
  const switchMass = (newMass = 0) => {
    cannonBallApi.mass.set(newMass);
  }

  const fireCannon = (forceMagnitude = 1000) => {
    if (cannonRef.current && cannonBallRef.current) {

      hitHandled = false

      cannonBallApi.mass.set(1)
      const cannonPosition = cannonRef.current.getWorldPosition(new THREE.Vector3())
      const cannonRotation = cannonRef.current.getWorldQuaternion(new THREE.Quaternion())

      // Create a direction vector pointing in the direction of the cannon barrel
      const direction = new THREE.Vector3(0, 1, 0); // 1 unit along the y-axis
      direction.applyQuaternion(cannonRotation);

      // Scale the direction by the magnitude of the force to be applied
      const force = direction.multiplyScalar(forceMagnitude);

      // Reset cannonball values
      cannonBallApi.position.set(cannonPosition.x, cannonPosition.y, cannonPosition.z)
      cannonBallApi.rotation.set(cannonRotation.x, cannonRotation.y, cannonRotation.z)
      cannonBallApi.velocity.set(0, 0, 0)

      // Apply the force at the center of the cannonball
      cannonBallApi.applyForce(force.toArray(), cannonBallRef.current.position.toArray());
    }
  }

  const resetWaterLevel = () => {
    setElapsed(0);
    if (oceanRef.current) {
      oceanRef.current.position.y = 0;
    }
  }

  const { camera } = useThree()
  camera.maxZoom = 0
  camera.minZoom = 0

  useEffect(() => {
    if (cameraControlsRef.current) {
      cameraControlsRef.current?.setLookAt(-2, 9, 40, -2, 9, 35, true)
    }
    if (cannonBallRef.current && cannonRef.current) {
      switchMass()
      let worldPos = new THREE.Vector3()
      cannonRef.current.getWorldPosition(worldPos)
      cannonBallApi.position.set(worldPos.x, worldPos.y, worldPos.z)
    }
    if (resetGame) {
      resetWaterLevel()
      setResetGame(false)
    }
    setFireFunction(() => fireCannon)
  }, [setFireFunction, resetGame])

  useFrame((state, delta) => {
    if (oceanRef.current && !gameWon && !gameOver) {
      setElapsed((prev) => prev + delta);
      const fraction = Math.min(elapsed / waterRisingDuration, 1);
      const newPosition = THREE.MathUtils.lerp(0, gameOverThreshold, fraction);
      oceanRef.current.position.y = newPosition;

      if (newPosition >= gameOverThreshold) {
        setGameOver(true)
      }
    }
  })

  return (
    <>
      <group position={[0, 0, 0]}>
        <Center top>
          <CannonLevel ref={meshRef} />
          <Cannon position={[-2, 0, 0]} ref={cannonRef} />
          <Target ref={targetRef} />
        </Center>

        <Sphere castShadow receiveShadow ref={cannonBallRef} args={[0.4, 64, 64]}>
          <meshStandardMaterial color="gray" metalness={0.9} roughness={0.4} />
        </Sphere>


        <AccumulativeShadows temporal frames={200} color="black" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
          <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
        {/* <Effects /> */}
        <spotLight intensity={0.8} angle={1} penumbra={0.2} position={[25, 25, 0]} castShadow />
        <Env />
        <Ground />
        <Ocean ref={oceanRef} />
        <ContactShadows position={[0, 0, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
        <CameraControls
          ref={cameraControlsRef}
          enabled={true}
          dollySpeed={0}
          truckSpeed={0}
        />
      </group>
    </>
  );
}

function Env() {
  const [preset, setPreset] = useState("sunset");
  const [degraded, degrade] = useState(false);
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition();
  const { blur } = useControls({
    blur: { value: 0.65, min: 0, max: 1 },
    preset: {
      value: preset,
      options: [
        "sunset",
        "dawn",
        "night",
        "warehouse",
        "forest",
        "apartment",
        "studio",
        "city",
        "park",
        "lobby",
      ],
      onChange: (value) => startTransition(() => setPreset(value)),
    },
  });
  return (
    <>
      <PerformanceMonitor onDecline={() => degrade(true)} />
      <Environment
        preset={preset}
        background={true}
        blur={blur}
      >
      </Environment>
    </>
  );
}

function Ground({ ref }) {
  const gridConfig = {
    cellSize: 0.5,
    cellThickness: 0.5,
    cellColor: 'white',
    sectionSize: 3,
    sectionThickness: 1,
    sectionColor: 'gray',
    fadeDistance: 30,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }
  return (
    <>
      <Grid ref={ref} position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
    </>)
}

function Effects() {
  const { ambinentOcclusion, smaa } = useControls({
    ambinentOcclusion: { value: true },
    smaa: { value: true },
  });

  return (
    <>
      <EffectComposer disableNormalPass multisampling={0}>
        {ambinentOcclusion && (
          <N8AO
            aoRadius={0.2}
            intensity={2}
            aoSamples={6}
            denoiseSamples={4}
          />
        )}
        {smaa && <SMAA />}
      </EffectComposer>

    </>
  );
}