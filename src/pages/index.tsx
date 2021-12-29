import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { scroll } = useLocomotiveScroll();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div data-scroll-section>
          <h1 className={styles.title} data-scroll data-scroll-direction="horizontal" data-scroll-speed="6">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description} data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5">
            Get started by editing <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </div>
        </div>

        <div data-scroll-section>
          <p className={styles.description} data-scroll data-scroll-speed="1">
            Simple Scroll Speed
          </p>

          <div className={styles.grid}>
            {[...Array(10).keys()].map((idx) => (
              <div className={styles.card} key={idx} data-scroll data-scroll-speed={idx}>
                <h2>data-scroll-speed</h2>
                <code>{`<div data-scroll data-scroll-speed="${idx}"></div>`}</code>
              </div>
            ))}
          </div>
        </div>

        <div data-scroll-section>
          <p className={styles.description} data-scroll data-scroll-speed="1">
            Scroll Delay
          </p>

          <div className={styles.grid}>
            {[...Array(10).keys()].map((idx) => (
              <div className={styles.card} key={idx} data-scroll data-scroll-speed="1" data-scroll-delay={idx / 100}>
                <h2>data-scroll-delay</h2>
                <code>{`<div data-scroll data-scroll-speed="1" data-scroll-delay="${idx / 100}"></div>`}</code>
              </div>
            ))}
          </div>
        </div>

        <div data-scroll-section>
          <p className={styles.description} data-scroll data-scroll-speed="1">
            Scroll Speed + Delay
          </p>

          <div className={styles.grid}>
            {[...Array(10).keys()].map((idx) => (
              <div className={styles.card} key={idx} data-scroll data-scroll-speed={idx} data-scroll-delay={idx / 100}>
                <h2>data-scroll-delay</h2>
                <code>{`<div data-scroll data-scroll-speed="${idx}" data-scroll-delay="${idx / 100}"></div>`}</code>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;