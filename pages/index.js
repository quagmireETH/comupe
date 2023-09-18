import Header from "./Header";
import Tokenomics from "./Tokenomics";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex justify-evenly items-center h-screen -mt-8 max-[1000px]:mr-10 max-[600px]:mr-0">
        <img
          className="max-[800px]:w-96 max-[690px]:w-72 max-[600px]:hidden"
          src="/pepe.png"
          alt=""
        />
        <div className="text-center max-[600px]:w-3/4">
          <p className="text-4xl font-bold">Welcome to Comupe Coin!</p>
          <p className="text-xl mt-5">
            In communism, we invest in people, <br /> not profit margins.
          </p>

          <div className="mt-10 max-[1000px]:flex max-[1000px]:flex-col max-[600px]:ml-5">
            <button className="border-2 mr-5 px-5 py-1.5 rounded-lg hover:bg-[#5A8D3E] max-[1000px]:mb-5">
              <p>View Chart</p>
            </button>
            <button className="border-2 mr-5 px-5 py-1.5 rounded-lg hover:bg-[#5A8D3E] max-[1000px]:mb-5">
              <p>Buy $ComupeCoin</p>
            </button>
            <button className="border-2 mr-5 px-5 py-1.5 rounded-lg hover:bg-[#5A8D3E] max-[1000px]:mb-5">
              <p>Contract</p>
            </button>
          </div>
        </div>
      </div>

      <div className="border-b-2 mb-14" />

      <Tokenomics />
    </div>
  );
}
