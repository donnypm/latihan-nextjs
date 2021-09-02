import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/image/sepatu.png" width={100} height={70} />
      </div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/brands/">
            <a>Brand Listing</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
