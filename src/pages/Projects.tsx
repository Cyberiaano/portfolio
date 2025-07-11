import { FiDatabase, FiLayout } from 'react-icons/fi';
import { SiTypescript, SiTailwindcss, SiNodedotjs, SiReact } from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';

// Exemple de projets (à remplacer par vos propres projets)
const projects = [
  {
    title: "Application de Gestion de Tâches",
    description: "Une application web moderne permettant aux utilisateurs de gérer leurs tâches quotidiennes avec des fonctionnalités de tri, filtrage et catégorisation.",
    image: "/projects/task-manager.jpg",
    technologies: [
      { name: "React", icon: <SiReact className="w-4 h-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
    ],
    demoUrl: "https://task-manager-demo.com",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    title: "Portfolio Personnel",
    description: "Un site web personnel présentant mes projets et compétences, construit avec React et Tailwind CSS. Design responsive et animations fluides.",
    image: "/projects/portfolio.jpg",
    technologies: [
      { name: "React", icon: <SiReact className="w-4 h-4" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
    ],
    demoUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/username/portfolio",
  },
  {
    title: "API REST E-commerce",
    description: "Une API REST complète pour une plateforme e-commerce, incluant l'authentification, la gestion des produits et des commandes.",
    image: "/projects/ecommerce-api.jpg",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4" /> },
      { name: "MongoDB", icon: <FiDatabase className="w-4 h-4" /> },
      { name: "Express", icon: <FiLayout className="w-4 h-4" /> },
    ],
    githubUrl: "https://github.com/username/ecommerce-api",
  },
];

const Projects = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Mes Projets
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets les plus récents, démontrant mes compétences
          en développement web et ma passion pour la création d'applications modernes.
        </p>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 