const Arrow = (props) => {
  const { color, xPos, zRot } = props;
  return (
    <mesh
      castShadow
      receiveShadow
      position={[xPos, 2.5, 20]}
      rotation={[(Math.PI / 2) * 0.9, 0, zRot]}
      {...props}
    >
      <coneGeometry args={[2, 5, 4]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Arrow;
