import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Gobbler from "./gobbler";
import Ground from "./ground";
import Grid from "./grid";

const Scene = ({ children, ...otherProps }) => {
  const gobblers = [];
  for (let player = 0; player < 2; player++) {
    for (let size = 0; size < 3; size++) {
      const color = player === 0 ? 0xff731d : 0x5f9df7;
      const pos = player === 0 ? -40 : 40;
      const gobblerSize = (size + 1) * 2 + 6;
      const zPos = (size - 1) * 15;
      const yPos = gobblerSize / 2;
      gobblers.push(
        <Gobbler
          key={"player" + player + "size" + size + "left"}
          position={[pos - gobblerSize / 2 - 2, yPos, zPos]}
          size={gobblerSize}
          color={color}
        />
      );
      gobblers.push(
        <Gobbler
          key={"player" + player + "size" + size + "right"}
          position={[pos + gobblerSize / 2 + 2, yPos, zPos]}
          size={gobblerSize}
          color={color}
        />
      );
    }
  }
  console.log(gobblers);

  return (
    <Canvas
      shadows
      camera={{ position: [-12, 160, 200], fov: 20 }}
      {...otherProps}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        castShadow
        position={[200, 200, 200]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.6}
      />
      <spotLight
        castShadow
        position={[-200, 200, 200]}
        angle={0.2}
        penumbra={0.5}
        intensity={0.3}
      />
      <pointLight position={[-50, -50, -50]} />
      <directionalLight
        castShadow
        position={[5, 100, 0]}
        intensity={0.4}
        penumbra={0.5}
        color={0xffffff}
      />
      <OrbitControls />
      {children}
      <Ground color={0xf9d3b7} />
      <Grid />
      {gobblers}
    </Canvas>
  );
};

export default Scene;
