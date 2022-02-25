import React, {useEffect } from 'react'
import { Canvas, useThree  } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from '../components/model'
import { Html, useProgress } from '@react-three/drei'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress}%</Html>
}

const CameraController = () => {
  const { camera, gl } = useThree();
  
  useEffect(
    () => {
     
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 15;
      controls.enablePan = false;

      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function App() {
  
  return (
    <>
    <div className="h-screen bg-teal-200">
      <Canvas orthographic camera={{ zoom: 200, position: [5, 3, 0] }}>
        <CameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]}/>
        <Suspense fallback={<Loader />}>
        <mesh position={[0, 0.15, 0]} rotation={[0,0.785398,0]} scale={[2.55, 1.25, 2.55]}>
          <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
          <meshPhongMaterial color="#006666" opacity={0.5} transparent />
        </mesh>
          <Model scale={0.1, 0.1, 0.1} position={[0, -0.5, 0]} rotation={[0,0.785398,0]}/>
        </Suspense>
      </Canvas>
      </div>
    </>
  );
}

export default App;
