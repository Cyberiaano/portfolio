import { motion } from 'framer-motion';
import { FiAward, FiCalendar } from 'react-icons/fi';

interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string[];
}

const educations: Education[] = [
  {
    degree: "Master en Développement Web",
    school: "École Supérieure du Digital",
    period: "2021 - 2023",
    location: "Paris, France",
    description: [
      "Spécialisation en développement web full stack",
      "Projets pratiques en équipe sur des cas réels",
      "Mémoire sur l'optimisation des applications React",
    ],
  },
  {
    degree: "Licence en Informatique",
    school: "Université de Lyon",
    period: "2018 - 2021",
    location: "Lyon, France",
    description: [
      "Formation complète en programmation et algorithmique",
      "Projets de développement logiciel",
      "Introduction aux technologies web modernes",
    ],
  },
  {
    degree: "DUT Informatique",
    school: "IUT de Bordeaux",
    period: "2016 - 2018",
    location: "Bordeaux, France",
    description: [
      "Bases de la programmation et des systèmes",
      "Projets pratiques en développement web",
      "Stage de fin d'études en entreprise",
    ],
  },
];

const certifications = [
  {
    name: "React Developer Certification",
    organization: "Meta",
    date: "2023",
    link: "https://example.com/cert1",
  },
  {
    name: "Professional Scrum Master I",
    organization: "Scrum.org",
    date: "2022",
    link: "https://example.com/cert2",
  },
  {
    name: "AWS Cloud Practitioner",
    organization: "Amazon Web Services",
    date: "2022",
    link: "https://example.com/cert3",
  },
];

const Education = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Formation
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Mon parcours académique et mes certifications professionnelles dans le domaine du développement web.
        </p>

        {/* Parcours académique */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Parcours Académique
          </h3>

          <div className="space-y-8">
            {educations.map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {education.degree}
                    </h4>
                    <p className="text-primary font-medium">{education.school}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <FiCalendar className="w-4 h-4" />
                    <span className="text-sm">{education.period}</span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {education.location}
                </p>

                <ul className="space-y-2">
                  {education.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-600 dark:text-gray-300 flex items-start"
                    >
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
                  <FiAward className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                  {cert.organization}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-center text-sm mt-1">
                  {cert.date}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education; 