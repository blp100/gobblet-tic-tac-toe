import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ground from "./ground";
import Grid from "./grid";
import { useEffect } from "react";

// Set camerra view on different screen size
const Resize = () => {
  const camera = useThree((state) => state.camera);
  const viewport = useThree((state) => state.viewport);

  useEffect(() => {
    if (viewport.width / viewport.height < 1) {
      camera.position.y = 500;
      camera.position.z = 300;
    } else {
      camera.position.y = 160;
      camera.position.z = 200;
    }
  }, []);
};

const Scene = ({ children, ...otherProps }) => {
  return (
    <Canvas
      shadows
      camera={{ position: [-12, 160, 200], fov: 20 }}
      {...otherProps}
    >
      <Resize />
      <color attach="background" args={["#D3C1B0"]} />
      <ambientLight intensity={0.5} />
      <spotLight
        castShadow
        position={[100, 250, 200]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.7}
      />
      <spotLight
        castShadow
        position={[-100, 200, 200]}
        angle={0.2}
        penumbra={0.5}
        intensity={0.3}
      />
      <pointLight position={[-50, -50, -50]} />
      <directionalLight
        castShadow
        position={[-157.21, 300, 300]}
        intensity={0.3}
        penumbra={0.5}
        color={0xffffff}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1500}
        shadow-camera-right={1500}
        shadow-camera-top={1500}
        shadow-camera-bottom={-1500}
        shadow-bias={-0.00004}
      />
      <OrbitControls
        enablePan={false}
        minDistance={150}
        maxDistance={600}
        maxPolarAngle={(Math.PI / 2) * 0.9}
      />
      <Ground color={0xf9d3b7} />
      <Grid color={0x967e76} />
      {children}
    </Canvas>
  );
};

export default Scene;
