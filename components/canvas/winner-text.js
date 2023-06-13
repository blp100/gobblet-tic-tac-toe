import { Center, Text3D } from "@react-three/drei";
import externalFont from "../../public/fonts/Mansalva_Regular.json"

const WinnerText = (props) => {
  const { color, ...otherProps } = props;

  return (
    <Center top position={[0, 2, -30]} rotation={[-Math.PI / 4, 0, 0]} {...otherProps}>
      <Text3D
        castShadow
        receiveShadow
        curveSegments={32}
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.5}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.1}
        size={10}
        font={externalFont}
      >
        winner
        <meshStandardMaterial color={color} />
      </Text3D>
    </Center>
  );
};

export default WinnerText;
