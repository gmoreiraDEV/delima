import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/services"}>Services</Link>
      <Link href={"/get-in-touch"}>GET IN TOUCH</Link>
    </nav>
  );
};

export default Navigation;
