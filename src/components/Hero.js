import React from "react";
import { ReactComponent as HeroSvg } from "../media/images/bg-intro-desktop.svg";
import Pic from "../media/images/image-mockups.png";
import Button from "./Button";

function Hero() {
  return (
    <main className="flex min-h-[80vh] bg-[#FAFAFA]">
      <section className="basis-1/2 flex items-center pl-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl oil">
            Next generation <br />
            digital banking
          </h2>
          <p className="w-[80%] text-gray-400 cursor-default text-xl">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more
          </p>
          <Button>request invitation</Button>
        </div>
      </section>
      <section className="basis-1/2 relative overflow-hidden">
        <span className="absolute top-[-50%] right-[-85%] ">
          <HeroSvg />
        </span>
        <img src={Pic} alt="" className="absolute top-[-20%] right-[-15%]" />
      </section>
    </main>
  );
}

export default Hero;
