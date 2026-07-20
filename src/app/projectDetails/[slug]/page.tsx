import Image from "next/image";
import { notFound } from "next/navigation";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";

import BackButton from "@/components/BackButton";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="motion-section w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-12 py-8 sm:py-10">
      <BackButton />

      <header className="mb-10">
        <p className="font-label-sm text-primary uppercase tracking-widest mb-sm">
          Project details
        </p>
        <h1 className="font-h1 text-h1 font-bold text-on-surface">
          {project.title}
        </h1>
      </header>

      <div className="motion-card relative aspect-video overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest soft-shadow">
        <Image
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      <dl className="motion-card mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ["Company", project.company],
          ["Category", project.category],
          ["Project type", project.type],
          ["Status", project.status],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-outline-variant bg-surface-container-lowest p-4"
          >
            <dt className="font-label-sm text-label-sm uppercase tracking-wider text-outline">
              {label}
            </dt>
            <dd className="mt-1 font-body-md text-body-md font-semibold text-on-surface">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] mt-12">
        <section className="space-y-10 motion-card">
          <div>
            <h2 className="font-h2 text-h2 font-bold text-on-surface mb-md">
              About the project
            </h2>
            <p className="font-body-lg text-body-lg leading-8 text-on-surface-variant">
              {project.description}
            </p>
          </div>
          <div>
            <h2 className="font-h2 text-h2 font-bold text-on-surface mb-md">
              The challenge
            </h2>
            <p className="font-body-lg text-body-lg leading-8 text-on-surface-variant">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="font-h2 text-h2 font-bold text-on-surface mb-md">
              My role
            </h2>
            <p className="font-body-lg text-body-lg leading-8 text-on-surface-variant">
              {project.role}
            </p>
            <ul className="mt-5 space-y-3">
              {project.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-on-surface-variant font-body-md text-body-md"
                >
                  <FaRegCheckCircle
                    size={18}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {project.products && (
            <div>
              <h2 className="font-h2 text-h2 font-bold text-on-surface mb-md">
                Products and solutions
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.products.map((product) => (
                  <span
                    key={product}
                    className="rounded-full bg-primary-fixed px-3 py-1.5 font-label-sm text-label-sm text-on-primary-fixed-variant"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        <aside className="motion-card h-fit rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 soft-shadow">
          <h2 className="font-h2 text-h2 font-bold text-on-surface mb-md">
            Tech stack
          </h2>
          <div className="mb-8 space-y-5">
            {project.stackGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-2 font-label-sm text-label-sm font-semibold uppercase tracking-wider text-outline">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-surface-container-high px-3 py-1.5 font-label-sm text-label-sm text-on-surface-variant"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-h2 text-h2 font-bold text-on-surface mb-md">
            Key features
          </h2>
          <ul className="space-y-3">
            {project.features.map((feature) => (
              <li
                key={feature.id}
                className="flex items-start gap-2 text-on-surface-variant font-body-md text-body-md"
              >
                <FaRegCheckCircle
                  size={18}
                  className="text-primary mt-0.5 shrink-0"
                />
                {feature.description}
              </li>
            ))}
          </ul>

          {(project.links?.github || project.links?.liveDemo) && (
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-outline-variant/50">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-primary text-on-primary rounded-lg inline-flex items-center gap-2 font-label-sm text-label-sm hover:opacity-90"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-outline-variant text-secondary rounded-lg inline-flex items-center gap-2 font-label-sm text-label-sm hover:bg-surface-container-low"
                >
                  <FaArrowUpRightFromSquare /> Live demo
                </a>
              )}
            </div>
          )}
          <p className="mt-6 border-t border-outline-variant/50 pt-5 font-label-sm text-label-sm leading-6 text-outline">
            {project.availability}
          </p>
        </aside>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <section className="motion-card mt-16">
          <h2 className="font-h2 text-h2 font-bold text-on-surface mb-6">
            Project gallery
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {project.gallery.map((media) => (
              <figure
                key={media.name}
                className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest soft-shadow"
              >
                <figcaption className="border-b border-outline-variant/60 px-4 py-3 font-label-sm text-label-sm font-semibold text-on-surface">
                  {media.name}
                </figcaption>
                {media.type === "video" ? (
                  <video
                    src={media.src as string}
                    controls
                    preload="metadata"
                    playsInline
                    className="block h-auto max-h-[70vh] w-full bg-black object-contain"
                    aria-label={media.alt}
                  />
                ) : (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    className="h-auto max-h-128 w-full object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </figure>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
