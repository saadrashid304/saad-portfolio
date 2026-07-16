"use client";

import { useRouter } from "next/navigation";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectDetailsButton({ slug }: { slug: string }) {
  const router = useRouter();

  const handleProjectDetailsClick = () => {
    router.push(`/projectDetails/${slug}`);
  };

  return (
    <button
      onClick={handleProjectDetailsClick}
      className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
    >
      View Project Details <FiExternalLink size={15} />
    </button>
  );
}
