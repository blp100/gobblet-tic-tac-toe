import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

import { useGobblerStore } from "../../store/store";

const Gobbler = (props) => {
  const ref = useRef();
  const { size, color, ...otherProps } = props;
  const { nodes } = useGLTF("/models/cylinder.gltf");
  const setActive = useGobblerStore((state) => state.setActive);
  const activeGobbler = useGobblerStore((state) => state.active);
  const isActive = activeGobbler === props.name;

  return (
    <motion.mesh
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.cylinder.geometry}
      scale={size}
      animate={{
        y: isActive ? otherProps.position[1] + 3 : otherProps.position[1],
      }}
      onClick={(e) => {
        e.stopPropagation();
        setActive(e.object.name);
      }}
      {...otherProps}
    >
      <meshStandardMaterial color={color} />
    </motion.mesh>
  );
};

export default Gobbler;

useGLTF.preload("/models/cylinder.gltf");
