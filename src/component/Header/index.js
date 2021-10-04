import React from 'react';
import Link from 'next/link';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header>
      <ul className={styles.List}>
        <li className={styles.ListItem}>
          <Link href="/">
            <a>Main</a>
          </Link>
        </li>

        <li className={styles.ListItem}>
          <Link href="/SpinButton">
            <a>SpinButton</a>
          </Link>
        </li>

        <li className={styles.ListItem}>
          <Link href="/Carousel">
            <a>Carousel</a>
          </Link>
        </li>

        <li className={styles.ListItem}>
          <Link href="/Navigation">
            <a>Navigation</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
