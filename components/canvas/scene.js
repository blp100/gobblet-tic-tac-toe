import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Gobbler from "./gobbler";

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
    <Canvas {...otherProps} camera={{ position: [0, 80, 100], fov: 20 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[100, 100, 100]} angle={0.15} penumbra={1} />
      <pointLight position={[-100, -100, -100]} />
      <OrbitControls />
      {children}
      {gobblers}
    </Canvas>
  );
};

export default Scene;
