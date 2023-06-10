const Grid = (props) => {
  const { color } = props;
  return (
    <group>
      <mesh castShadow receiveShadow position={[-5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 30]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh castShadow receiveShadow position={[5, 0.5, 0]}>
        <boxGeometry args={[1, 1, 30]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.5, 5]}>
        <boxGeometry args={[30, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.5, -5]}>
        <boxGeometry args={[30, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};

export default Grid;
