import React from "react";
import Button from "./Button";
import { ReactComponent as LogoF } from "../media/images/logo.svg";
import { ReactComponent as Facebook } from "../media/images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../media/images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../media/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../media/images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../media/images/icon-instagram.svg";

function Footer() {
  return (
    <footer className="bg-[#2d314d] flex items-center justify-evenly py-12">
      <section className="flex flex-col gap-8">
        <LogoF className="fill-white" />
        <div className="flex items-center gap-2">
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </div>
      </section>
      <section>
        <h4 className="footer-link">About us</h4>
        <h4 className="footer-link">Contact</h4>
        <h4 className="footer-link">Blog</h4>
      </section>
      <section>
        <h4 className="footer-link">Careers</h4>
        <h4 className="footer-link">Support</h4>
        <h4 className="footer-link">Privacy Policy</h4>
      </section>
      <section className="flex flex-col gap-4">
        <Button>Request invite</Button>
        <p className="text-gray-400">© Easybank. All Rights Reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
