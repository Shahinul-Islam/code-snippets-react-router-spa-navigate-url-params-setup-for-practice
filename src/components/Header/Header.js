import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4">
      <div>
        <img src="https://www.svgrepo.com/show/303149/creative-cloud-cc-logo.svg" className="h-20 w-20" alt="" />
      </div>
      <div>
        <div onClick={() => setOpen(!open)} className="h-12 w-12 sm:hidden">
          {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
        <ul className={`md:flex absolute p-6 font-bold bg-slate-400 md:bg-white  md:font-semibold md:static ${open ? "top-15 right-1" : "top-[-290px]"}`}>
          <li className="my-3 md:mr-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="my-3 md:mr-3">
            <NavLink to="/friends">Friends</NavLink>
          </li>
          <li className="my-3 md:mr-3">
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li className="my-3 md:mr-3">
            <NavLink to="/support">Support</NavLink>
          </li>
          <li className="my-3 md:mr-3">
            <NavLink to="/contact">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
