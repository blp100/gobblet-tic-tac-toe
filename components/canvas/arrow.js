import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

import useStore from "../../control/controller";

const Arrow = (props) => {
  const { color, xPos, zRot } = props;
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += delta * 1.6));
  const arrow = useStore((state) => state.arrow);
  // const setArrow = useStore((state) => state.setArrow);
  // const setArrowVisible = useStore((state) => state.setArrowVisible);
  // console.log('visible', visible);
  useEffect(() => {
    // setArrow(ref.current);
    // setArrowVisible(ref.current);
    // console.log(ref.current);
    // setVisible(isArrowVisible(ref.current));
  }, []);

  console.log(props.name, arrow?.visible);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={[xPos, 2.5, 20]}
      rotation={[(Math.PI / 2) * 0.9, 0, zRot]}
      visible={arrow?.visible}
      {...props}
    >
      <coneGeometry args={[1.5, 4.5, 4]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Arrow;
