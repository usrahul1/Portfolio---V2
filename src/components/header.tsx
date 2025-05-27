"use client";

import ThemeShifter from "./theme";

export default function Header() {
  return (
    <div className="flex mt-6 w-full justify-around items-center  mx-auto">
      <h1
        className="text-md select-none cursor-pointer text-lg font-semibold"
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
