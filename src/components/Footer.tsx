import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="p-6 border-t border-white/30 shadow-lg backdrop-blur-md bg-white/3 mt-8">
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://leetcode.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition"
        >
          <SiLeetcode />
        </a>
      </div>
    </footer>
  );
}
