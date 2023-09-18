import React from "react";
import { motion } from "framer-motion";

function Tokenomics() {
  return (
    <div className="h-full mb-10" id="Tokenomics">
      <div className="flex justify-center items-center">
        <div className="border-2 rounded-xl">
          <p className="text-4xl px-4 py-2">Tokenomics</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.4 }}
      >
        <img
          className="absolute w-96 rounded-xl left-20 -mt-10 max-[1335px]:left-5 max-[1335px]:w-72 max-[1335px]:mt-0 max-[790px]:hidden"
          src="/pepo.jpeg"
          alt=""
        />
      </motion.div>

      <div className="flex flex-col justify-between h-[600px] ml-32 max-[700px]:ml-0  max-[700px]:mt-10">
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="flex justify-end mr-[20%] mt-4 -mb-6 max-[700px]:mr-0 max-[700px]:justify-center"
        >
          <div className="border-2 border-green-800 py-10 px-10 rounded-xl bg-green-800 bg-opacity-60 shadow-green-800 shadow-md">
            <p className="text-xl">Taxes : 2/2</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="flex justify-center"
        >
          <div className="border-2 border-green-700 ml-[10%] py-10 px-7 rounded-xl bg-green-700 bg-opacity-60 shadow-green-700 shadow-md  max-[700px]:ml-0">
            <p className="text-xl">LP : 100% (fair launch)</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="flex justify-start ml-[29%] max-[700px]:ml-0 max-[700px]:justify-center"
        >
          <div className="border-2 border-green-600 py-10 px-7 rounded-xl bg-green-600 bg-opacity-60 shadow-green-600 shadow-md">
            <p className="text-xl">Liquidity : Locked</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex justify-start ml-[9%] max-[700px]:ml-0 max-[700px]:justify-center"
        >
          <div className="border-2 border-green-400 py-10 px-7 rounded-xl bg-green-400 bg-opacity-60 shadow-green-400 shadow-md">
            <p className="text-xl">Contract : Renounced</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Tokenomics;
