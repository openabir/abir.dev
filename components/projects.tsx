import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// You can move this data to a separate file, e.g., `lib/projects-data.ts`
const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio website to showcase my skills and projects. Built with Next.js, TypeScript, and Tailwind CSS.",
    imageUrl: "/images/portfolio.png", // Make sure to add this image to public/images
    projectUrl: "https://github.com/openabir/nextPortfolio",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product catalog, and a shopping cart. Developed using the MERN stack.",
    imageUrl: "/images/ecommerce.png", // Make sure to add this image to public/images
    projectUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A simple and intuitive task management application to help users stay organized and productive. Built with React and Firebase.",
    imageUrl: "/images/task-manager.png", // Make sure to add this image to public/images
    projectUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center"
                >
                  View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
