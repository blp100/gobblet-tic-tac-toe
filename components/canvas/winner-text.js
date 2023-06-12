import { Center, Text3D } from "@react-three/drei";
// import useStore from "../../control/controller";

const WinnerText = (props) => {
  const { color, ...otherProps } = props;
  //   const onClickPlane = useStore((state) => state.onClickPlane);

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
        font="/fonts/Mansalva_Regular.json"
        // onWheel={}
      >
        winner
        <meshStandardMaterial color={color} />
      </Text3D>
    </Center>
    // <mesh
    //   castShadow
    //   receiveShadow
    //   rotation={[-Math.PI / 2, 0, 0]}
    //   onClick={(e) => {
    //     e.stopPropagation();
    //     onClickPlane(e.object);
    //   }}
    //   {...otherProps}
    // >
    //   <planeGeometry args={[10, 10]} />
    //   <meshStandardMaterial color={color} />
    // </mesh>
  );
};

export default WinnerText;
