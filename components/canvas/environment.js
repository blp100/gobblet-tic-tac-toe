import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Gobbler from "./gobbler";
import Ground from "./ground";
import Grid from "./grid";
import Plane from "./plane";
import Arrow from "./arrow";
import { SIZES, GOBBLER_TYPE, PLANE_TYPE, PLAYER_INFO } from "../../constants";
import WinnerText from "./winner-text";

const Scene = ({ children, ...otherProps }) => {
  // Build gobblers
  const gobblers = [];
  const sizeKeys = Object.keys(SIZES);
  for (let player = 0; player < 2; player++) {
    for (let size = 0; size < 3; size++) {
      const color =
        player === 0 ? PLAYER_INFO.PLAYER1.COLOR : PLAYER_INFO.PLAYER2.COLOR;
      const playerName =
        player === 0 ? PLAYER_INFO.PLAYER1.NAME : PLAYER_INFO.PLAYER2.NAME;
      const pos = player === 0 ? -30 : 30;
      const gobblerSize = SIZES[sizeKeys[size]].VALUE;
      const z = (size - 1) * 12;
      const y = gobblerSize / 2;
      const leftName = "player" + player + "size" + size + "left";
      const rightName = "player" + player + "size" + size + "right";
      gobblers.push(
        <Gobbler
          key={leftName}
          name={leftName}
          position={[pos - gobblerSize / 2 - 1, y, z]}
          size={gobblerSize}
          color={color}
          userData={{
            size: SIZES[sizeKeys[size]],
            player: playerName,
          }}
        />
      );
      gobblers.push(
        <Gobbler
          key={rightName}
          name={rightName}
          position={[pos + gobblerSize / 2 + 1, y, z]}
          size={gobblerSize}
          color={color}
          userData={{
            size: SIZES[sizeKeys[size]],
            player: playerName,
          }}
        />
      );
    }
  }
  // Build Panel
  const planes = [];
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      const pos = [(j - 2) * 10, 0.1, (i - 2) * 10];
      planes.push(
        <Plane
          key={"plane" + i + "" + j}
          color={0xf9d3b7}
          position={pos}
          name={"plane" + i + "" + j}
          userData={{ key: i + "" + j }}
        />
      );
    }
  }
  const arrows = [];
  arrows.push(
    <Arrow
      key={PLAYER_INFO.PLAYER1.ARROW_NAME}
      name={PLAYER_INFO.PLAYER1.ARROW_NAME}
      color={PLAYER_INFO.PLAYER1.COLOR}
      xPos={-10}
      zRot={Math.PI / 2}
    />
  );
  arrows.push(
    <Arrow
      key={PLAYER_INFO.PLAYER2.ARROW_NAME}
      name={PLAYER_INFO.PLAYER2.ARROW_NAME}
      color={PLAYER_INFO.PLAYER2.COLOR}
      xPos={10}
      zRot={-Math.PI / 2}
      visible={false}
    />
  );
  const winnerTexts = []
  winnerTexts.push(
    <WinnerText
      key={PLAYER_INFO.PLAYER1.WINNER_NAME}
      name={PLAYER_INFO.PLAYER1.WINNER_NAME}
      color={PLAYER_INFO.PLAYER1.COLOR}
      visible={false}
    />
  );
  winnerTexts.push(
    <WinnerText
      key={PLAYER_INFO.PLAYER2.WINNER_NAME}
      name={PLAYER_INFO.PLAYER2.WINNER_NAME}
      color={PLAYER_INFO.PLAYER2.COLOR}
      visible={false}
    />
  );

  return (
    <Canvas
      shadows
      camera={{ position: [-12, 160, 200], fov: 20 }}
      {...otherProps}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        castShadow
        position={[100, 250, 200]}
        angle={0.3}
        penumbra={0.5}
        intensity={0.7}
      />
      <spotLight
        castShadow
        position={[-100, 200, 200]}
        angle={0.2}
        penumbra={0.5}
        intensity={0.3}
      />
      <pointLight position={[-50, -50, -50]} />
      <directionalLight
        castShadow
        position={[-157.21, 300, 300]}
        intensity={0.3}
        penumbra={0.5}
        color={0xffffff}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={-10000}
        shadow-camera-far={100000}
        shadow-camera-left={-1500}
        shadow-camera-right={1500}
        shadow-camera-top={1500}
        shadow-camera-bottom={-1500}
        shadow-bias={-0.00004}
      />
      <OrbitControls maxPolarAngle={(Math.PI / 2) * 0.9} />
      {children}
      <Ground color={0xf9d3b7} />
      <Grid color={0x967e76} />
      {planes}
      {gobblers}
      {arrows}
      {winnerTexts}
    </Canvas>
  );
};

export default Scene;
