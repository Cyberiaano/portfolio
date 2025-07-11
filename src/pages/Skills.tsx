import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiDocker,
} from 'react-icons/si';
import { FiCode } from 'react-icons/fi';

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

const skills = {
  frontend: [
    { name: 'React', level: 90, icon: <SiReact className="w-6 h-6" /> },
    { name: 'TypeScript', level: 85, icon: <SiTypescript className="w-6 h-6" /> },
    { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="w-6 h-6" /> },
  ],
  backend: [
    { name: 'Node.js', level: 80, icon: <SiNodedotjs className="w-6 h-6" /> },
    { name: 'MongoDB', level: 75, icon: <SiMongodb className="w-6 h-6" /> },
  ],
  tools: [
    { name: 'Git', level: 85, icon: <SiGit className="w-6 h-6" /> },
    { name: 'Docker', level: 70, icon: <SiDocker className="w-6 h-6" /> },
    { name: 'VS Code', level: 90, icon: <FiCode className="w-6 h-6" /> },
  ],
};

const SkillBar = ({ skill }: { skill: Skill }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Mes Compétences
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Un aperçu de mes compétences techniques et des outils que j'utilise quotidiennement
          pour créer des applications web modernes et performantes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Frontend
            </h3>
            {skills.frontend.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Backend
            </h3>
            {skills.backend.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>

          {/* Outils */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="card"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
              Outils
            </h3>
            {skills.tools.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </div>

        {/* Compétences personnelles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Compétences Personnelles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* À remplir : Vos compétences personnelles */}
            <div className="card">
              <h4 className="font-semibold mb-4">Communication</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Travail d'équipe efficace</li>
                <li>• Communication claire et précise</li>
                <li>• Présentation de projets</li>
              </ul>
            </div>
            <div className="card">
              <h4 className="font-semibold mb-4">Gestion de Projet</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Méthodologie Agile/Scrum</li>
                <li>• Planification et organisation</li>
                <li>• Résolution de problèmes</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 