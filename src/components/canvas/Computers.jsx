import { Suspense, useEffect, useState } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'


const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene-opt.glb')

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor='black' />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 :  0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes of screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the isMobile
    setIsMobile(mediaQuery.matches)

    // Define cb function
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the cb function as a listener
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas 