import styles from '../styles/Page.module.css';

export default function Stories() {
  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.pageHeader}>Story Time</h1>
      <p>Welcome to Story Time! Dive into magical adventures and captivating tales that spark imagination.</p>
      <p>From fairy tales to modern stories, there’s a story for every young reader!</p>
    </div>
  );
}
