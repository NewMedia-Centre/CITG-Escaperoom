// Index.jsx
import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import Scene from "./Scene";
import { Suspense, useRef, useState } from "react";
import { CircularProgress } from "@mui/joy";
import { Stack, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Physics, Debug } from "@react-three/cannon";


function App() {
  const cannonRef = useRef()
  const [fireCannon, setFireCannon] = useState(null)

  const rotateCannonUp = () => {
    if (cannonRef.current) {
      cannonRef.current.rotation.x += 0.1
    }
  }
  const rotateCannonDown = () => {
    if (cannonRef.current) {
      cannonRef.current.rotation.x -= 0.1
    }
  }
  const fireCannonBall = () => {
    if (fireCannon) {
      fireCannon();
    }
  }

  return (
    <>
      <Stack direction="column" spacing={2} justifyContent="center"
        sx={{
          position: 'absolute',
          bottom: '1%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, // make sure it floats above
        }}
        zIndex={10000}>
        < Button onClick={rotateCannonUp} variant="contained" endIcon={<ArrowUpwardIcon />}>Move Cannon</Button>
        <Button onClick={rotateCannonDown} variant="contained" endIcon={<ArrowDownwardIcon />}>Move Cannon</Button>
        <Button onClick={fireCannonBall} variant="contained">Fire!</Button>
      </Stack >
      <Canvas
        dpr={[1, 1.5]}
        shadows
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <Physics>
            <Scene cannonRef={cannonRef} setFireFunction={setFireCannon} />
          </Physics>
        </Suspense>
      </Canvas>
      <div id="info-box">
        <div id="comment">
          <div style={{ marginBottom: 4 }}>
            Built by — <img src="/xrzone-16x16.png" /> Zone
          </div>
          <img src="tudelft-nmc-200px.png" />
        </div>
      </div>
    </>

  )
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <CircularProgress
        determinate
        soft="true"
        size="lg"
        color="neutral"
        value={progress}
      >
        {Math.trunc(progress)}%
      </CircularProgress>
    </Html>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)