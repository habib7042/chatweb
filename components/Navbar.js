import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nev>
      <div className="logo">
        <Link href="/">
          <Image src="../logo.svg" width={128} height={77} />
        </Link>
      </div>
      <Link href="/" legacyBehavior>
        <a>Home</a>
      </Link>
      <Link href="/users" legacyBehavior>
        <a>Users</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a>About</a>
      </Link>
    </nev>
  );
}

export default Navbar;
