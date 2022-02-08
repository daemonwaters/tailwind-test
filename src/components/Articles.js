import React from "react";
import { articleData } from "../utilities/ArticlesData";

function Articles() {
  return (
    <main className="bg-[#FAFAFA] p-20">
      <div className="flex flex-col gap-20">
        <header>
          <h3 className="text-4xl oil cursor-default">Latest Articles</h3>
        </header>
        <section>
          <div className="flex items-center justify-around">
            {articleData.map((col, idx) => (
              <section
                className="bg-white mx-2 max-h-[418.95px] cursor-pointer"
                key={idx}
              >
                <div className="h-[209.4525px] bg-red-200">
                  <img src={col.img} className="h-full object-cover" alt="" />
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <h4 className="text-gray-400">{col.author}</h4>
                  <h3 className="oil">{col.title}</h3>
                  <p className="text-gray-400">{col.text}</p>
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Articles;
