import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {/* À remplir : Votre nom */}
            Salut, je suis <span className="text-primary">Développeur</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {/* À remplir : Votre phrase d'accroche */}
            Passionné par le développement web et spécialisé dans la création d'applications modernes et performantes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/cv.pdf"
              className="btn btn-primary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiDownload className="mr-2" />
              Télécharger mon CV
            </a>
            <Link to="/projets" className="btn btn-outline w-full sm:w-auto">
              <span>Voir mes projets</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {/* À remplir : Vos compétences principales */}
          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Frontend</h3>
            <p className="text-gray-600 dark:text-gray-300">React, TypeScript, Tailwind CSS</p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Backend</h3>
            <p className="text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB</p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg font-semibold mb-2">Outils</h3>
            <p className="text-gray-600 dark:text-gray-300">Git, Docker, VS Code</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 