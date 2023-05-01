import { type NextPage } from "next";
import Head from "next/head";

import { api } from "@/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Next.GG</title>
        <meta name="description" content="Next.GG" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center justify-center text-slate-200">
        This is Next.GG
      </main>
    </>
  );
};

export default Home;
