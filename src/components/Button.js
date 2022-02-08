import React from "react";

function Button({ children }) {
  return (
    <button className="py-[0.4rem] w-max px-4 text-white cursor-pointer rounded-full capitalize border-none bg-[hsl(165,61%,47%)] hover:bg-[hsl(165,61%,57%)]">
      {children}
    </button>
  );
}

export default Button;
