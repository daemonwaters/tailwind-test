import React from "react";
import { data } from "../utilities/FeaturesData";

function WhySection() {
  return (
    <main className="bg-[#F4F5F7] p-20">
      <div className="flex flex-col gap-20">
        <header>
          <h3 className="text-4xl oil my-6 cursor-default">
            Why choose Easybank?
          </h3>
          <p className="w-[50%] text-gray-400 cursor-default">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before
          </p>
        </header>
        <section>
          <div className="flex items-center justify-around gap-4">
            {data.map((col, idx) => (
              <section className="flex flex-col gap-4" key={idx}>
                <col.svg />
                <h3 className="oil">{col.title}</h3>
                <p className="text-gray-400">{col.text}</p>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default WhySection;
