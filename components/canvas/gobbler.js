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
  const isActive = activeGobbler === ref.current;

  return (
    <motion.group animate={{ y: isActive ? 3 : 0 }}>
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
