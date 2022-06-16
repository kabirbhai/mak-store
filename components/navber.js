import React, { useRef } from "react";
import Link from "next/link";
import { BsCart3, BsHandbag } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("block")) {
      ref.current.classList.remove("block");
      ref.current.classList.add("hidden");
    } else if (!ref.current.classList.contains("block")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("block");
    }
  };
  const ref = useRef();
  return (
    <header className="max-w-screen-2xl mx-auto relative">
      <div className=" flex flex-col md:flex-row justify-start py-2 items-center shadow-md">
        <div className="logo mx-10">
          <Link href="/">
            <a className="text-3xl text-orange-500 font-sans font-bold">
              T-store
            </a>
          </Link>
        </div>
        <div className="navItem">
          <ul className="flex mt-5 md:mt-0  font-bold uppercase  space-x-4">
            <Link href="/">
              <a>
                {" "}
                <li>Home</li>
              </a>
            </Link>
            <Link href="/tshirt">
              <a>
                {" "}
                <li>tShirt</li>
              </a>
            </Link>
            <Link href="/hoodie">
              <a>
                {" "}
                <li>Hoodies</li>
              </a>
            </Link>
            <Link href="/mugs">
              <a>
                {" "}
                <li>Mugs</li>
              </a>
            </Link>
            <Link href="/sticker">
              <a>
                {" "}
                <li>Stickers</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className="cart absolute right-0 top-4">
          <BsCart3
            onClick={toggleCart}
            className="text-2xl text-orange-500 cursor-pointer"
          ></BsCart3>
        </div>

        {/* sidebar  */}
        <div
          ref={ref}
          className="cartSidebar h-screen z-10 w-72 absolute top-4 rounded-md px-8 py-8 right-0 bg-yellow-100 hidden"
        >
          <h1 className="text-center text-orange-400 font-bold">
            Shopping cart
          </h1>
          <AiFillCloseCircle
            onClick={toggleCart}
            className="absolute top-1 right-1 text-2xl cursor-pointer text-yellow-500  "
          ></AiFillCloseCircle>
          <ol className="list-decimal">
            <li>
              <div className="flex justify-center items-center my-3">
                <div className="w-3/4 font-semibold text-xl ">
                  t-shirt - store
                </div>
                <div className="w-2/5 flex justify-between text-xl items-center">
                  <AiFillMinusCircle className="cursor-pointer  text-yellow-500 " />{" "}
                  <span>1</span>
                  <AiFillPlusCircle className="cursor-pointer   text-yellow-500 " />
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center my-3">
                <div className="w-3/4 font-semibold text-xl ">
                  t-shirt - store
                </div>
                <div className="w-2/5 flex justify-between text-xl items-center">
                  <AiFillMinusCircle className="cursor-pointer  text-yellow-500 " />{" "}
                  <span>1</span>
                  <AiFillPlusCircle className="cursor-pointer   text-yellow-500 " />
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center my-3">
                <div className="w-3/4 font-semibold text-xl ">
                  t-shirt - store
                </div>
                <div className="w-2/5 flex justify-between text-xl items-center">
                  <AiFillMinusCircle className="cursor-pointer  text-yellow-500 " />{" "}
                  <span>1</span>
                  <AiFillPlusCircle className="cursor-pointer   text-yellow-500 " />
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center my-3">
                <div className="w-3/4 font-semibold text-xl ">
                  t-shirt - store
                </div>
                <div className="w-2/5 flex justify-between text-xl items-center">
                  <AiFillMinusCircle className="cursor-pointer  text-yellow-500 " />{" "}
                  <span>1</span>
                  <AiFillPlusCircle className="cursor-pointer   text-yellow-500 " />
                </div>
              </div>
            </li>
            <li>
              <div className="flex justify-center items-center my-3">
                <div className="w-3/4 font-semibold text-xl ">
                  t-shirt - store
                </div>
                <div className="w-2/5 flex justify-between text-xl items-center">
                  <AiFillMinusCircle className="cursor-pointer  text-yellow-500 " />{" "}
                  <span>1</span>
                  <AiFillPlusCircle className="cursor-pointer   text-yellow-500 " />
                </div>
              </div>
            </li>
          </ol>

          <div className="flex">
            <button className="flex mr-2   text-white bg-orange-500 border-0 p-2 focus:outline-none hover:bg-orange-800 rounded text-md">
              <BsHandbag className="text-xl mr-2" /> <span>Checkout</span>
            </button>
            <button className="flex    text-white bg-orange-500 border-0 p-2 focus:outline-none hover:bg-orange-800 rounded text-md">
              <span>Clear cart</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
