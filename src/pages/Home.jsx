import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import Sakure from '../assets/sakura.mp3'
import { soundoff, soundon } from "../assets/icons";
const Home = () => {

  const audioRef = useRef(new Audio(Sakure))
  audioRef.current.volume = 0.4;
  audioRef.current.loop = 0.4;
  const [CurrentStage, setCurrentStage] = useState(1)
  const [isRotating, setIsRotating] = useState(false)
  const [isPlayingMusic, setIsPlayingMusic] = useState(false)

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play()
    }
    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])
  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    // If screen width is less than 768px, adjust the scale and position
    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };
  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];

    } else {
      screenScale = [1, 1, 1];

    }

    return [screenScale, screenPosition, rotation];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, IslandPosition, islandRotation] = adjustIslandForScreenSize()

  return (
    <section className='w-full h-screen relative'>
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
        {CurrentStage && <HomeInfo currentStage={CurrentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight position={[1, 1, 1]} intensity={0} />
          <ambientLight intensity={0} />
          <pointLight position={[10, 5, 10]} intensity={0} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          <Bird />

          <Sky isRotating={isRotating} />
          <Island
            position={IslandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10  cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
