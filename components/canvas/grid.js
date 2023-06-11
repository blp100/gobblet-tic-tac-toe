import { RoundedBox } from "@react-three/drei";

const Grid = (props) => {
  const { color } = props;

  const defaultProps = {
    castShadow: true,
    receiveShadow: true,
    radius: 0.1,
  };

  return (
    <group>
      <RoundedBox {...defaultProps} position={[-5, 0.5, 0]} args={[1, 1, 30]}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
      <RoundedBox {...defaultProps} position={[5, 0.5, 0]} args={[1, 1, 30]}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
      <RoundedBox {...defaultProps} position={[0, 0.5, 5]} args={[30, 1, 1]}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
      <RoundedBox {...defaultProps} position={[0, 0.5, -5]} args={[30, 1, 1]}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
    </group>
  );
};

export default Grid;
