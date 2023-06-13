import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useRef } from "react";

import useStore from "../../store/store";

const Gobbler = (props) => {
  const { size, color, position, ...otherProps } = props;
  const [x, y, z] = position;
  const ref = useRef();
  const { nodes } = useGLTF("/models/cylinder.gltf");
  const activePlayer = useStore((state) => state.activePlayer);
  const activeGobbler = useStore((state) => state.activeGobbler);
  const setActiveGobbler = useStore((state) => state.setActiveGobbler);
  const isActive = activeGobbler === ref.current;

  const plane = ref.current?.userData?.plane;

  // console.log(activePlayer.NAME, ref.current?.userData?.player);

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
          if (e.object.userData.player === activePlayer?.NAME) {
            setActiveGobbler(e.object);
          }
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
