import Head from "next/head";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cool Spline Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section style={{ width: "100vw", height: "100vh" }}>
        <Spline scene="https://prod.spline.design/tmWfdFEWE6G4qmKM/scene.splinecode" />
      </section>
    </div>
  );
}
