import Image from "next/image";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Make your ideas come to fruition</h1>
        <button>GET IN TOUCH</button>
      </div>
      <div className={styles.bulb}>
        <Image src="/bulb.png" alt="Image of a bulb" fill />
      </div>
    </section>
  );
}
