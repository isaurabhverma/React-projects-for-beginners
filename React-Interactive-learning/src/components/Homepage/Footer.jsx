// Footer.jsx
import React from "react";
import { Linkedin, Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6">
         <hr className="border-t border-gray-600 my-6" />
      <div className="max-w-6xl mx-auto text-center">
        {/* Tagline */}
        <h2 className="text-3xl font-bold text-white mb-4">
          Code Today, Build Tomorrow
        </h2>


        {/* Connect with me */}
        <p className="text-lg mb-4">Connect with me:</p>
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-fuchsia-700 transition"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-fuchsia-700 transition"
          >
            <Github size={28} />
          </a>
          <a
            href="https://discord.com/users/yourdiscord"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-fuchsia-700 transition"
          >
            <FaDiscord size={28} />
          </a>
        </div>

        <hr className="border-t border-gray-600 my-6" />

        {/* Made by & copyright */}
        <p className="text-sm text-gray-400 mb-1">Made with ☕ by Annanya</p>
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Reactive Interactive Learning
        </p>
      </div>
    </footer>
  );
}
