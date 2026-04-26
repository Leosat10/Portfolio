import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';
import getExperience from './api/experience';
import Head from 'next/head';
import { ProjectsSection } from "./projects";
import { ContactSection } from "./contact";
import { SettingsSection } from "./settings";



export default function HomePage({ experience, title }) {
  return (
    <>
      <Head>
        <title>Santhosh | {title}</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.textSection}>   
              <h1 className={styles.name}>Santhosh</h1>
              <h2 className={styles.title}>Concurrency Craftsman</h2>

              

              <div className={styles.expertise}>
                <div className={styles.expertiseTitle}>Skills</div>
                <div className={styles.expertiseGrid}>
                  <span className={styles.expertiseTag}>OS Dev</span>
                  <span className={styles.expertiseTag}>Networking</span>
                  {/*<span className={styles.expertiseTag}>HTML</span>
                  <span className={styles.expertiseTag}>CSS</span>*/}
                  <span className={styles.expertiseTag}>Python</span>

                </div>

              </div>

              <div className={styles.actions}>
                <Link href="/resume">
                  <button className={styles.primaryButton}>Resume</button>
                </Link>
                <Link href="/contact">
                  <button className={styles.secondaryButton}>Contact</button>
                </Link>
              </div>
            </div>

            <div className={styles.imageSection}>
              <div className={styles.imageWrapper}>
                <Image
                  className={styles.profileImage}
                  src="/me.jpeg"
                  width={500}
                  height={500}
                  alt="Santhosh"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="projects">
          <ProjectsSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      
    <section id="settings">
       <SettingsSection />    
    </section>
    </>
  );
}

export async function getStaticProps() {
  const experience = getExperience();

  return {
    props: {
      title: 'Home',
      experience,
    },
  };
}

