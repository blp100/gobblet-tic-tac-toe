import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Arrow = (props) => {
  const { color, xPos, zRot } = props;
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += delta * 1.6));
  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={[xPos, 2.5, 20]}
      rotation={[(Math.PI / 2) * 0.9, 0, zRot]}
      {...props}
    >
      <coneGeometry args={[1.5, 4.5, 4]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Arrow;
