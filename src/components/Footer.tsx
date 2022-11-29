import { HeartIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-scroll";
import { ReactComponent as Illustration } from "../assets/footer.svg";
import { MENU, NAME } from "../data/data";
const Footer: React.FC = () => {
  return (
    <>
      <div className="px-0 pb-0 mx-0 mb-0 mt-8 antialiased text-center">
        <Illustration color={"#D237FB"}/>
        <div className="flex flex-col pt-3 bg-primary md:items-center f-f-l">
          <h1 className="text-4xl font-black text-white">
            Piyush Mehta
          </h1>
          <div className="my-3 text-base text-center text-white ">
            <ul className="items-center md:flex">
              {MENU.map(({ key, name, route }) => (
                <Link
                  key={key}
                  activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-extrabold text-secondary-focus transition "
                  to={route}
                  spy={true}
                  smooth={true}
                  duration={300}
                  className={
                    "btn-primary btn-ghost btn-sm rounded-btn cursor-pointer md:mr-6 lg:py-0"
                  }
                >
                  {name}
                </Link>
              ))}
            </ul>
          </div>
          <div className="mb-3 text-md text-white">
            <p>
              © {new Date().getFullYear()} {NAME}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
