import React from "react";
import ScrollButton from "./components/ScrollButton";
import Link from "next/link";

function Header() {
  return (
    <div className="border-b-2 p-4 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img className="w-20 ml-3" src="/pepe.png" alt="" />
        <Link href="https://twitter.com/ComupeCoin">
          <img
            className="w-11 ml-20 cursor-pointer"
            src="/twitter.svg"
            alt=""
          />
        </Link>
        <Link href="">
          <img
            className="w-11 ml-3 cursor-pointer"
            src="/telegram.svg"
            alt=""
          />
        </Link>
      </div>

      <ScrollButton targetId="Tokenomics">
        <p className="text-2xl underline cursor-pointer">Tokenomics</p>
      </ScrollButton>

      <div className="border-2 rounded-lg px-3.5 py-2 cursor-pointer hover:bg-[#5A8D3E]">
        <p>Buy $ComupeCoin</p>
      </div>
    </div>
  );
}

export default Header;
