import Link from "next/link";

import styles from "./styles.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"} className={styles.link}>
        Home
      </Link>
      <Link href={"/services"} className={styles.link}>
        Services
      </Link>
      <Link className={styles.button} href={"/get-in-touch"}>
        GET IN TOUCH
      </Link>
    </nav>
  );
}
