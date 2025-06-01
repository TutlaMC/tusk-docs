import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <span className={styles.heroPreTitle}>A New generation to Discord Bots</span>
          <h1 className={styles.heroMainTitle}>
            <span className={styles.gradientText}>Tusk</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Discord bot maker that <span className={styles.emphasis}>revolutionizes</span> the way you make bots
          </p>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroVideoWrapper}>
            <img src="banner.png"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradientButton({ title, link }) {
  return (
    <a
      href={link}
      className={styles.downloadBtnLarge}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
}

function GradientButtonRow() {
  return (
    <div className={styles.downloadRow}>
      <GradientButton title="Check it out" link="https://github.com/tutlamc/tusk" />
      <GradientButton title="Documentation" link="docs/home" />
    </div>
  );
}

/*
function ExampleScriptsSection() {
  return (
    <section className={styles.ExampleScriptsSection}>
      <div className={styles.ExampleScriptsContent}>
        <nav className={styles.ExampleScriptsNav}>
          <ul>
            <li className={styles.active}>Make better ExampleScripts decisions</li>
            <li>Fundraising and Investor Reporting</li>
            <li>Stay Compliant</li>
            <li>Save time</li>
          </ul>
        </nav>
        <div className={styles.ExampleScriptsMain}>
          <h2 className={styles.ExampleScriptsTitle}>Auto Responder Bot</h2>
          <p className={styles.ExampleScriptsDesc}>
            A bot that automatically responds to specific messages in a specific channel.
          </p>
          <div className={styles.ExampleScriptsChart}>
            <code>

            </code>
            // we'll use shiki for codeblocks or docusaurus codeblocks for the script
          </div>
        </div>
      </div>
    </section>
  );
}
*/

export default function Home() {
  return (
    <Layout title="Tusk" description="Tusk: A new generation to Discord Bots">
      <div className={styles.pageBackground}>
        <HeroSection />
        <main>
          <HomepageFeatures />
          <GradientButtonRow />
          {/*<ExampleScriptsSection />*/}
        </main>
      </div>
    </Layout>
  );
}
