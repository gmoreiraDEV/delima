import Image from "next/image";

import Wave from "@/components/Wave";

import styles from "./styles.module.css";

export default function Divider() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.arrow}>
        <Image src="/arrow.svg" alt="arrow to down" fill />
      </div>
      <div className={styles.wave}>
        <Image src="/wave.png" alt="Wave" fill quality="100" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, ad?
        Exercitationem molestias laboriosam vitae cupiditate, nostrum doloribus
        qui nesciunt reprehenderit non, quisquam ipsa quis minima quas quaerat,
        sed obcaecati hic. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Optio modi quidem dolores architecto repellendus dolorum vero,
        similique necessitatibus! Vel debitis, vero eos nisi fugiat quisquam
        blanditiis praesentium labore et quasi. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. In, ipsum soluta! Fugit autem molestias
        distinctio eaque provident pariatur corrupti quo nesciunt rem excepturi?
        Explicabo fugiat architecto voluptate laboriosam. Maxime, facere.
      </p>
    </div>
  );
}
