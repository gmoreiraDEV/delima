import Image from "next/image";
import Navigation from "../Navigation";
import Link from "next/link";

import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo.png" alt="DELIMA Logo" width={185} height={47} />
      </Link>
      <Navigation />
    </header>
  );
}
