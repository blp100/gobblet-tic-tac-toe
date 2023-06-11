import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

import { useGobblerStore, usePlaneStore } from "../../store/store";

const Gobbler = (props) => {
  const ref = useRef();
  const { size, color, ...otherProps } = props;
  const [x, y, z] = props.position;
  const { nodes } = useGLTF("/models/cylinder.gltf");
  const activePlane = usePlaneStore((state) => state.active);
  const setActive = useGobblerStore((state) => state.setActive);
  const activeGobbler = useGobblerStore((state) => state.active);
  const isActive = activeGobbler === ref.current;

  const plane = ref.current?.userData?.plane;

  return (
    <motion.group
      animate={{
        x: plane ? plane.position.x - x : 0,
        y: isActive ? 3 : 0,
        z: plane ? plane.position.z - z : 0,
      }}
    >
      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.cylinder.geometry}
        scale={size}
        onClick={(e) => {
          e.stopPropagation();
          setActive(e.object);
        }}
        {...otherProps}
      >
        <meshStandardMaterial color={color} />
      </mesh>
    </motion.group>
  );
};

export default Gobbler;

useGLTF.preload("/models/cylinder.gltf");
