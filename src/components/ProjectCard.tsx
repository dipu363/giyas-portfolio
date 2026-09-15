import Link from "next/link";
import { Project } from "@/data/projects";
import { Smartphone } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project Visual */}
      <div className="relative flex h-56 items-center justify-center overflow-hidden bg-gray-50">
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-100 transition duration-500 group-hover:scale-125" />

        <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-emerald-50 transition duration-500 group-hover:scale-125" />
        <div className="relative flex h-28 w-28 items-center justify-center rounded-3xl bg-emerald-600 text-white shadow-lg transition duration-500 group-hover:scale-105">
        <Smartphone size={48} strokeWidth={1.8} />
          </div>


      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
          {project.category}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Role + Link */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
          <span className="text-xs text-gray-500">{project.role}</span>

          <Link
            href={`/projects/${project.id}`}
            className="text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            View Project →
          </Link>
        </div>
      </div>
    </article>
  );
}