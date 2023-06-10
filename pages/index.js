import dynamic from "next/dynamic";
import Head from "next/head";

const Game = dynamic(() => import("../components/game"), {
  ssr: false,
  loading: ()=> <h1>Loading...</h1>
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
