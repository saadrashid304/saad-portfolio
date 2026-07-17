"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MdOutlineMailOutline,
  MdOutlinePhone,
  MdOutlineSchedule,
  MdOutlineLock,
} from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setLoading(false);
    form.reset();
    alert("Message sent successfully!");
  };

  return (
    <main
      id="contact"
      className="motion-section max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
        {/* <!-- Left Column: Information --> */}
        <div className="lg:col-span-5 flex flex-col gap-lg">
          <div className="inline-flex items-center gap-sm px-3 py-1.5 rounded-full bg-white border border-[#E5E5E7] shadow-[0px_4px_20px_rgba(0,0,0,0.04)] w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-label-sm text-xs text-on-surface-variant">
              Available for work
            </span>
          </div>
          <h1 className="font-h1 text-h1 font-bold text-on-surface">
            {`Let's work together`}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-110">
            {`I'm currently seeking new opportunities to build high-performance
            software. Whether it's a freelance project, a full-time role, or
            just a technical discussion, I'd love to hear from you.`}
          </p>
          <div className="flex flex-col gap-md mt-sm">
            {/* <!-- Contact Item --> */}
            <div className="group flex items-center gap-md">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E5E7] text-primary group-hover:border-primary transition-colors">
                <MdOutlineMailOutline size={22} />
              </div>
              <div>
                <p className="text-xs font-label-sm text-outline uppercase tracking-wider">
                  Email
                </p>
                <a
                  className="font-body-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  href="mailto:saadrashid304@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  saadrashid304@gmail.com
                </a>
              </div>
            </div>
            {/* <!-- Contact Item --> */}
            <div className="group flex items-center gap-md">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E5E7] text-primary group-hover:border-primary transition-colors">
                <MdOutlinePhone size={22} />
              </div>
              <div>
                <p className="text-xs font-label-sm text-outline uppercase tracking-wider">
                  Phone
                </p>
                <a
                  className="font-body-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  href="tel:+923135163383"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92 313 5163383
                </a>
              </div>
            </div>
            {/* <!-- Contact Item --> */}
            <div className="group flex items-center gap-md">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E5E7] text-primary group-hover:border-primary transition-colors">
                <FaLinkedin size={20} />
              </div>
              <div>
                <p className="text-xs font-label-sm text-outline uppercase tracking-wider">
                  LinkedIn
                </p>
                <a
                  className="font-body-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  href="https://www.linkedin.com/in/saadrashid304"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.linkedin.com/in/saadrashid304
                </a>
              </div>
            </div>
            {/* <!-- Contact Item --> */}
            <div className="group flex items-center gap-md">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-[#E5E5E7] text-primary group-hover:border-primary transition-colors">
                <FaGithub size={20} />
              </div>
              <div>
                <p className="text-xs font-label-sm text-outline uppercase tracking-wider">
                  GitHub
                </p>
                <a
                  className="font-body-md text-on-surface hover:text-primary transition-colors cursor-pointer"
                  href="https://github.com/saadrashid304"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.github.com/saadrashid304
                </a>
              </div>
            </div>
          </div>
          <div className="mt-lg">
            <div className="p-lg bg-surface-container-lowest border border-[#E5E5E7] rounded-xl shadow-[0px_4px_20px_rgba(0,0,0,0.04)] overflow-hidden relative">
              <div className="absolute top-2 right-0 p-4 opacity-10">
                <MdOutlineSchedule className="text-6xl!" />
              </div>
              <p className="font-h3 text-h3 text-primary">24h</p>
              <p className="font-label-sm text-on-surface-variant">
                Average response time
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Right Column: Contact Form --> */}
        <div className="lg:col-span-7">
          <div className="motion-card bg-surface-container-lowest p-6 sm:p-xl rounded-xl border border-[#E5E5E7] shadow-[0px_4px_20px_rgba(0,0,0,0.04)]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
                <div className="flex flex-col gap-sm">
                  <label
                    className="font-label-sm text-on-surface-variant"
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-md py-3 bg-white border border-[#E5E5E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant font-body-md"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-sm">
                  <label
                    className="font-label-sm text-on-surface-variant"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    className="w-full px-md py-3 bg-white border border-[#E5E5E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant font-body-md"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-sm">
                <label
                  className="font-label-sm text-on-surface-variant"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full px-md py-3 bg-white border border-[#E5E5E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant font-body-md"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  type="text"
                  required
                />
              </div>
              <div className="flex flex-col gap-sm">
                <label
                  className="font-label-sm text-on-surface-variant"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-md py-3 bg-white border border-[#E5E5E7] rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-outline-variant font-body-md resize-none"
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hi..."
                  rows={6}
                  required
                ></textarea>
              </div>
              <div className="flex flex-col gap-md">
                <button
                  disabled={loading}
                  className="w-full py-4 cursor-pointer bg-primary text-on-primary rounded-lg font-h3 hover:bg-primary-container shadow-lg active:scale-[0.98] transition-transform duration-150"
                  type="submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <p className="text-center font-label-sm text-outline-variant flex items-center justify-center gap-xs">
                  <MdOutlineLock />
                  Your information is secure and never shared.
                </p>
              </div>
            </form>
          </div>
          {/* <!-- Technical Showcase Image --> */}
          <div className="mt-lg rounded-xl overflow-hidden h-48 border border-[#E5E5E7]">
            <Image
              alt=""
              width={512}
              height={512}
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              data-alt="A macro photograph of a high-end mechanical keyboard with custom keycaps and subtle RGB backlighting in soft white and blue tones. The lighting is crisp and modern, reflecting off the brushed aluminum surface of a nearby laptop. The overall aesthetic is clean, technical, and professional, echoing the minimalist design of the portfolio."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoeaREjh2uuhYXkUI-T2056lF1DalFDV4SDyZlFfusMKvCLXD4DHYzmpMbze7EBJaeyRnlND7LY8dtDdRMqwdhwjLXOY5vh7afBd0Tlnrl6DsnB1PKxSKuaokQ0PvMHvzSAk_uLfcfP8c9SuSnIU5a9NmbpfRTKfHq1phL2EyhZZhIJJhU_L6M2F2QwTjV90dVGF2jhOYXYkxM_2pM1YPwXnvZeyjAEQt6e9coYkOZW2Vz4V0SbIoEvW8E1qt9PbcMGAuM-1rAjgw"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
