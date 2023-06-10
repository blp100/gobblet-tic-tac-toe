import dynamic from "next/dynamic";
import Head from "next/head";
import Loader from "../components/dom/loader";

const Game = dynamic(() => import("../components/canvas/game"), {
  ssr: false,
  loading: () => <Loader />,
});

const Page = () => {
  return (
    <>
      <Head>
        <title>Gobblet Tic Tac Toe</title>
      </Head>
      <Game />
    </>
  );
};

export default Page;
