import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Technology {
  name: string;
  icon: ReactNode;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoUrl?: string;
  githubUrl?: string;
  reversed?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  reversed = false,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${
        reversed ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden`}
    >
      {/* Image du projet */}
      <div className="w-full md:w-1/2 relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Contenu */}
      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        {/* Technologies utilisées */}
        <div className="flex flex-wrap gap-3 mb-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Liens */}
        <div className="mt-auto flex gap-4">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FiExternalLink className="mr-2" />
              Voir la démo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <FiGithub className="mr-2" />
              Code source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 