import { usePlaneStore } from "../../store/store";
import { useRef } from "react";

const Plane = (props) => {
  const ref = useRef();
  const { color, pos, ...otherProps } = props;
  const setActive = usePlaneStore((state) => state.setActive);
  const activePlane = usePlaneStore((state) => state.active);
  const isActive = activePlane === ref.current;

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={pos}
      rotation={[-Math.PI / 2, 0, 0]}
      onClick={(e) => {
        e.stopPropagation();
        setActive(e.object);
      }}
      {...otherProps}
    >
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Plane;
