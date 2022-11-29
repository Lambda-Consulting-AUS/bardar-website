import { motion } from "framer-motion";
import React from "react";
import { TimelineProps } from "../types/types";

const TimelineCard: React.FC<TimelineProps> = ({
  id,
  name,
  date,
  description,
}) => {
  return (
    <div
      className={`flex items-center w-full mb-8 gap-4 md:gap-16 flex-wrap md:flex-nowrap`}
    >
      <div className="z-20 flex items-center order-1 w-48 h-16 bg-neutral rounded-full flex-grow-0 flex-shrink-0">
        <h1 className="mx-auto text-lg font-semibold text-white">
          {/* {num}.&nbsp; */}
          {date}
        </h1>
      </div>
      <motion.div
        transition={{ duration: 0.25 }}
        whileHover={{ scaleX: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className={
          "order-1 shadow-xl card text-white w-full bg-white"
      }
      >
        <div className="card-body p-0 flex flex-row bg-gradient-to-b from-primary to-secondary bg-clip-text text-transparent">
          {/* <img src={logo} alt={company} className="w-20 m-0 object-cover" /> */}
          <div className="p-8">
            <span className="py-0 font-bold card-subtitle font-xs card-side">
              {id + " " + name}
            </span>
            {
              description.map((x: string): JSX.Element => {
                return <p className="font-light card-side whitespace-normal">{x}</p>
              })
            }
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimelineCard;
