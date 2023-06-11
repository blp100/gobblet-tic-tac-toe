import { useEffect, useState } from "react";
import Scene from "./scene";
import { useGobblerStore, usePlaneStore } from "../../store/store";

const Game = () => {
  const activeGobbler = useGobblerStore((state) => state.active);
  const unsetActiveGobbler = useGobblerStore((state) => state.unsetActive);
  const activePlane = usePlaneStore((state) => state.active);
  const unsetActivePlane = usePlaneStore((state) => state.unsetActive);

  useEffect(() => {
    if (activeGobbler && activePlane) {
      activeGobbler.userData.plane = activePlane;
      unsetActiveGobbler();
      unsetActivePlane();
    }
  }, [activeGobbler, activePlane]);

  return <Scene style={{ height: "100vh" }} />;
};

export default Game;
