import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Développeur Full Stack",
    company: "Entreprise A",
    period: "Jan 2023 - Présent",
    location: "Paris, France",
    description: [
      "Développement de nouvelles fonctionnalités pour une application web React/Node.js",
      "Optimisation des performances et de l'expérience utilisateur",
      "Collaboration avec une équipe de 5 développeurs en méthodologie Agile",
    ],
  },
  {
    title: "Développeur Frontend",
    company: "Entreprise B",
    period: "Juin 2022 - Déc 2022",
    location: "Lyon, France",
    description: [
      "Création d'interfaces utilisateur responsives avec React et TypeScript",
      "Intégration d'APIs RESTful et gestion d'état avec Redux",
      "Participation aux revues de code et à l'amélioration des processus",
    ],
  },
  {
    title: "Stage Développeur Web",
    company: "Entreprise C",
    period: "Jan 2022 - Mai 2022",
    location: "Bordeaux, France",
    description: [
      "Développement de composants React réutilisables",
      "Intégration de maquettes Figma en HTML/CSS",
      "Participation aux daily meetings et aux sprints planning",
    ],
  },
];

const Experience = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Mon Expérience
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Parcours professionnel et expériences qui ont façonné mes compétences en développement web.
        </p>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-[30px] bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <FiBriefcase className="w-3 h-3 text-white" />
              </div>

              {/* Content */}
              <div className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <FiCalendar className="w-4 h-4" />
                    <span className="text-sm">{experience.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {experience.location}
                </p>

                <ul className="space-y-2">
                  {experience.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 