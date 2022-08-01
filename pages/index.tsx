import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import CustomCursor from "../components/CustomCursor";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const techs: string[] = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "React",
    "Angular",
    "Next.js",
    "Nuxt",
    "Mui",
    "Express",
    "Nest.js",
    "Mongodb",
    "PostgreSQL",
    "Git / GitHub",
    "Sass / Scss",
  ];
  const [darkTheme, setDarkTheme] = React.useState<any>(undefined);
  
  const handleToggle = () => {
    setDarkTheme(Boolean(!darkTheme));
  };

  React.useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "light");
      }
    }
  }, [darkTheme]);

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setDarkTheme(initialColorValue === "dark");

  }, []);
  return (
    <div>
      <CustomCursor />
      <Head>
        <title>Aziz Ouichni</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav className={styles.navigation}>
          <div>by aziz ouichni</div>
          <div onClick={handleToggle} className={styles.dark}>
            {!darkTheme ? "so dark?" : "lot of light?"}
          </div>
          <div>2022</div>
        </nav>
      </header>

      <main className={styles.main}>
        <div>
          <p className={styles.intro}>
            Hi! My name is Mohamed Aziz Ouichni and I&apos;m a fullstack
            developer, currently working (happily) at{" "}
            <span className={styles.bulldozer}>bulldozer</span>.🦊
          </p>
        </div>

        <div className={styles.container}>
          <p className={styles.intro}>
            Technology I&apos;ve worked & <span>dabbled</span> with:
          </p>
          <ul className={styles.list}>
            {techs.map((tech, i) => (
              <li key={i} className={styles.tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className={styles.intro}>
            If you have any questions or would like to have a chat, don&apos;t
            hesitate to
            <span> get in touch.</span>
          </p>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
