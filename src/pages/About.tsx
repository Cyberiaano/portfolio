import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiCode } from 'react-icons/fi';

const About = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Section Biographie */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            À Propos de Moi
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative">
              {/* À remplir : Votre photo */}
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700">
                <img
                  src="/placeholder-profile.jpg"
                  alt="Photo de profil"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {/* À remplir : Votre biographie */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo nec nunc congue facilisis. 
                Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {/* À remplir : Suite de votre biographie */}
                Praesent euismod, nisi vel consectetur euismod, nunc nisi euismod nunc, vitae aliquam nunc nisi vel nunc.
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Section Valeurs & Objectifs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Valeurs & Objectifs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Valeurs */}
            <div className="card">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <FiHeart className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">Valeurs</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {/* À remplir : Vos valeurs */}
                <li>• Qualité et excellence</li>
                <li>• Apprentissage continu</li>
                <li>• Travail d'équipe</li>
              </ul>
            </div>

            {/* Objectifs */}
            <div className="card">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <FiTarget className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">Objectifs</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {/* À remplir : Vos objectifs */}
                <li>• Maîtriser de nouvelles technologies</li>
                <li>• Contribuer à des projets open source</li>
                <li>• Partager mes connaissances</li>
              </ul>
            </div>

            {/* Passions */}
            <div className="card">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                <FiCode className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">Passions</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {/* À remplir : Vos passions */}
                <li>• Développement web</li>
                <li>• Nouvelles technologies</li>
                <li>• Résolution de problèmes</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 