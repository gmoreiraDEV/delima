import Image from "next/image";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header>
      <div>
        <Image src="/logo.png" alt="DELIMA Logo" />
      </div>
      <Navigation />
    </header>
  );
}
