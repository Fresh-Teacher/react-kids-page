import Link from 'next/link';
import { useState } from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}>Kids' World</div>
        <button className={styles.menuToggle} onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/games">Fun Games</Link></li>
            <li><Link href="/coloring">Coloring Zone</Link></li>
            <li><Link href="/stories">Story Time</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
