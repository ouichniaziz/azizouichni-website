import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aziz Ouichni</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.navigation}>
          <a>
            <p>Aziz Ouichni</p>
          </a>
        </nav>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I&apos;m Aziz 👋</h1>
        <div className={styles.about}>
          <p className={styles.intro}>
            Current working (happily) as a fullstack developer at bulldozer.🦊
          </p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
