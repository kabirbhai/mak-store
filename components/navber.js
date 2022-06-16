import React from "react";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row justify-between py-6 items-center">
        <div className="logo">
          <Link href="/">
            <a className="text-4xl">MakStore</a>
          </Link>
        </div>
        <div className="navItem">
          <ul className="flex mt-5 md:mt-0  space-x-4">
            <Link href="/">
              <a>
                {" "}
                <li>Glass</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                {" "}
                <li>Mug</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                {" "}
                <li>t-shirt</li>
              </a>
            </Link>
            <Link href="/">
              <a>
                {" "}
                <li>Phone</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-0">
          <Link href="/">
            <a>
              <BsCart3 className="text-2xl"></BsCart3>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
