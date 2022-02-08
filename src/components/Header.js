/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { ReactComponent as Logo } from "../media/images/logo.svg";
import Button from "./Button";

function Header() {
  return (
    <header className="flex items-center justify-around w-screen bg-white z-10">
      <span className="cursor-pointer">
        <Logo className="fill-[#2d314d]" />
      </span>
      <nav className="flex items-center gap-5">
        <a className="nav-link" href="#">
          Home
        </a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Contact</a>
        <a className="nav-link" href="#">Blog</a>
        <a className="nav-link" href="#">Careers</a>
      </nav>
      <Button>
        request invatation
      </Button>
    </header>
  );
}

export default Header;
