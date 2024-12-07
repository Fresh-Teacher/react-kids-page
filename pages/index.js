import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome to Kids' Colorful World!</h1>
      <div className={styles.cardsContainer}>
        <Link href="/games">
          <Card title="Fun Games" description="Play and learn with interactive games!" />
        </Link>
        <Link href="/coloring">
          <Card title="Coloring Zone" description="Unleash your creativity with colors!" />
        </Link>
        <Link href="/stories">
          <Card title="Story Time" description="Dive into magical adventures!" />
        </Link>
      </div>
    </div>
  );
}
