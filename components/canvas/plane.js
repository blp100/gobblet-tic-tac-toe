import useStore from "../../control/controller";

const Plane = (props) => {
  const { color, ...otherProps } = props;
  const onClickPlane = useStore((state) => state.onClickPlane);

  return (
    <mesh
      castShadow
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={(e) => {
        e.stopPropagation();
        onClickPlane(e.object);
      }}
      {...otherProps}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Plane;
