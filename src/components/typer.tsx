"use client";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <h1 className="text-zinc-500 text-sm base:text-base sm:text-lg md:text-xl font-bold text-center">
      <Typewriter
        options={{
          strings: ["Full Stack Web Developer", "Student"],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}
