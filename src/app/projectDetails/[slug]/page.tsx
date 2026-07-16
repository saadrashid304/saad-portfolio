import Image from "next/image";

import LawfulInterceptionThumbnail from "@/assets/thumbnails/LawfulThumbnail.png";
import BulletLocalizationThumbnail from "@/assets/thumbnails/BulletThumbnail.png";
import IJournalistThumbnail from "@/assets/thumbnails/IJournalistThumbnail.png";
import QaisThumbnail from "@/assets/thumbnails/QaisThumbnail.png";
import NorasolThumbnail from "@/assets/thumbnails/NoraSolThumbnail.png";

import BackButton from "@/components/BackButton";

const projects = [
  {
    id: 1,
    thumbnail: (
      <Image
        priority
        alt="LawfulInterceptionThumbnail"
        className="w-full h-full object-cover"
        data-alt="A secure surveillance and monitoring platform developed for authorized agencies to manage lawful interception workflows and communication data analysis."
        src={LawfulInterceptionThumbnail}
      />
    ),
    title: "Lawful Interception System",
    description:
      "A secure surveillance and monitoring platform developed for authorized agencies to manage lawful interception workflows and communication data analysis.",
    features: [
      {
        id: 1,
        description: "Role-based access control and secure authentication",
      },
      {
        id: 2,
        description: "Real-time monitoring dashboard and data visualization",
      },
    ],
    techStack: [
      {
        id: 1,
        name: "React.js",
      },
      {
        id: 2,
        name: "Spring Boot",
      },
      {
        id: 3,
        name: "MongoDB",
      },
    ],
    slug: "LawfulInterception",
  },
];

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectDetails = projects.find((project) => project.slug === slug);

  return (
    <main className="w-[90%] mx-auto px-6 md:px-12 py-10">
      <BackButton />
      <h1 className="font-h1 text-h1 font-bold text-on-surface mb-md underline">
        {projectDetails?.title}
      </h1>
      {projectDetails?.thumbnail}
    </main>
  );
}
