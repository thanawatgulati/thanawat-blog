import React, { ReactElement, useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const [action, setaction] = useState(false);
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <label className={styles.logo}>G.THANAWAT</label>
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <a className={styles.a}>Home</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/me">
            <a className={styles.a}>About:me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
