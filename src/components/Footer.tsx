import React from "react";
import { NAME } from "../data/data";
const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pt-3 bg-primary md:items-center f-f-l">
          <h1 className="text-4xl font-black text-white">
            BARDAR PTY LTD.
          </h1>
          <div className="my-1 text-base text-center text-white ">
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
          <div className="mb-3 text-md text-white">
            <p>
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
          </div>
        </div>
    </>
  );
};

export default Footer;
