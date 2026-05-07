"use client";

export default function GoToProjects() {
  return (
    <button
      onClick={() => {
        const element = document.getElementById("projects");
        element?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }}
      className="bg-[#005bc4] text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all group cursor-pointer"
    >
      <span>View Projects</span>
      <svg
        className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    </button>
  );
}
