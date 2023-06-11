import { useGLTF } from "@react-three/drei";

const Gobbler = (props) => {
  const { size, color } = props;
  const { nodes } = useGLTF("/models/cylinder.gltf");
  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.cylinder.geometry}
      scale={size}
      {...props}
    >
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Gobbler;

useGLTF.preload("/models/cylinder.gltf");
