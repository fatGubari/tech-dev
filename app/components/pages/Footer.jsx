"use client";

import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-10">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-zinc-400 mb-8">
          Have any questions or want to work together? Connect with us through our social media or email!
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://www.facebook.com/people/Tech-Dev/61570433391711/?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={32} />
          </a>
          <a
            href="https://www.instagram.com/tech.dev_official/profilecard/?igsh=a2lza2NtZWMxMTI="
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={32} />
          </a>
          <a
            href="mailto:techdev.team.info@gmail.com"
            className="text-green-500 hover:text-green-400 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
