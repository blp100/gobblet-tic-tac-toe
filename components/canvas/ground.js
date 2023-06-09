const Ground = (props) => {
  const { color } = props;
  return (
    <mesh castShadow receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Ground;
