import React from "react";
import { NAME } from "../data/data";
const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col py-4 bg-white md:items-center f-f-l">
          <h1 className="text-4xl font-black text-black">
            BARDAR PTY LTD.
          </h1>
          <div className="my-1 text-base text-center text-black ">
            <div className="items-center flex">
              <div className="mx-4">
                ABN: 61664482384
              </div>
              <div className="mx-4">
                REDFERN NSW
              </div>
              <div className="mx-4">
                DEVELOPER@BARDAR.APP
              </div>
            </div>
          </div>
          <div className="text-md text-black">
            <p>
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
          </div>
        </div>
    </>
  );
};

export default Footer;
