import Image from "next/image";
import { logo } from "../export";
import { Fragment } from "react";
import Link from "next/link";

const navData = [
  { id: 0, title: "Home", Link: "/" },
  { id: 1, title: "The Challenge", Link: `/` },
  { id: 2, title: "Our Approach", Link: "/" },
  { id: 3, title: "Work with us", Link: "/" },
];

function Navbar() {
  return (
    <div className="navbar__container w-full inline-flex justify-between items-center">
      <div className="brand__container inline-flex">
        <Image src={logo} alt="" width={32} height={32}></Image>
        <span className="text-3xl font-bold ml-2"> Biosphere</span>
      </div>
      <div className="navbar-links__container inline-flex justify-start bg-white p-2 rounded-lg">
        {navData.map((link) => (
          <Fragment key={link.id}>
            <Link
              href={link.Link}
              className={`ml-1 px-2 py-1 rounded text-base focus:bg-bg-nav-link active:bg-bg-nav-link`}
            >
              {link.title}
            </Link>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
