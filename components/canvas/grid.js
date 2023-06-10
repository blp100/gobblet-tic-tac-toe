const Grid = (props) => {
  const color = 0x967E76;
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
