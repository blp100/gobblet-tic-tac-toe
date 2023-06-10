import { Canvas } from "@react-three/fiber";

const Gobbler = (props) => {
  const { size, color } = props;
  const radius = size / 2;
  const height = size;
  return (
    <mesh {...props}>
      <cylinderGeometry args={[radius, radius, height, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Gobbler;
