import Link from "next/link";
import Image from "next/image";
import LogoImg from "@/public/images/logo.svg";

export default function Logo() {
  return (
    <Link className="block" href="/" aria-label="Cruip">
      <Image src={LogoImg} width={200} height={200} priority alt="keploy" />
    </Link>
  );
}
