"use client";

import ThemeShifter from "./theme";

export default function Header() {
  return (
    <div className="flex w-full justify-around items-center mt-8 mx-auto">
      <h1
        className="text-sm xs:text-md sm:text-xl md:text-xl font-[550] text-center cursor-pointer select-none"
        onClick={() =>
          (window.location.href = "mailto:sairahulurumu@gmail.com")
        }
      >
        me@rahul.com
      </h1>
      <ThemeShifter />
    </div>
  );
}
