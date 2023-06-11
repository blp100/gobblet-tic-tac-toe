const Plane = (props) => {
  const { color , pos } = props;

  return (
    <mesh castShadow receiveShadow position={pos} rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Plane;
