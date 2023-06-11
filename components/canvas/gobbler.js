import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

import { useGobblerStore } from "../../store/store";

const Gobbler = (props) => {
  const ref = useRef();
  const { size, color, position, ...otherProps } = props;
  const [x, y, z] = props.position;
  const { nodes } = useGLTF("/models/cylinder.gltf");
  const setActive = useGobblerStore((state) => state.setActive);
  const activeGobbler = useGobblerStore((state) => state.active);
  const isActive = activeGobbler === ref.current;

  const plane = ref.current?.userData?.plane;

  return (
    <motion.group
      animate={{
        y: isActive ? 3 : 0,
      }}
    >
      <motion.mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.cylinder.geometry}
        scale={size}
        onClick={(e) => {
          e.stopPropagation();
          setActive(e.object);
        }}
        animate={{
          x: plane ? plane.position.x : x,
          y: y,
          z: plane ? plane.position.z : z,
        }}
        {...otherProps}
      >
        <meshStandardMaterial color={color} />
      </motion.mesh>
    </motion.group>
  );
};

export default Gobbler;

useGLTF.preload("/models/cylinder.gltf");
