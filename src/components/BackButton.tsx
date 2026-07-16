"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackButton() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBackClick}
      className="font-h1 text-body-md font-bold text-on-surface mb-md flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <FaArrowLeftLong />
      <span>Back to Projects</span>
    </button>
  );
}
