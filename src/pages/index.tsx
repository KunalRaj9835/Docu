import * as React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
     
  return (
    <>
      <Head>
        <title>{siteConfig.title}</title>
        <meta name="description" content={siteConfig.tagline} />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
        </div>
                 
        <div className={styles.navigation}>
          <Link to="/docs" className={styles.navCard}>
            <div className={styles.cardContent}>
              <h2>Documentation</h2>
              <p>Explore guides, tutorials, and API reference</p>
            </div>
          </Link>
                     
          <Link to="/blog" className={styles.navCard}>
            <div className={styles.cardContent}>
              <h2>Blog</h2>
              <p>Read the latest updates and articles</p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}