import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/NavTitle";

const MobileNavbar = ({ open }) => {
  return (
    <div
      className={` transform ${
        open
          ? "translate-x-0 ease-in-out duration-500"
          : "-translate-x-full ease-in-out duration-500"
      } w-full sm:w-1/2 absolute left-0 mt-20 top-0 px-6 z-40 bg-white shadow-sm`}
    >
      {links.map((link) => (
        <Link className={link.className} to={link.to}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNavbar;
