import useStore from "../../store/store";

const Plane = (props) => {
  const { color, ...otherProps } = props;
  const setActivePlane = useStore((state) => state.setActivePlane);
  const activeGobbler = useStore((state) => state.activeGobbler);

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={(e) => {
        e.stopPropagation();
        if (activeGobbler) setActivePlane(e.object);
      }}
      {...otherProps}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Plane;
