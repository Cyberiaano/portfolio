import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    url: '/* À remplir : URL GitHub */',
    icon: FiGithub,
  },
  {
    name: 'LinkedIn',
    url: '/* À remplir : URL LinkedIn */',
    icon: FiLinkedin,
  },
  {
    name: 'Twitter',
    url: '/* À remplir : URL Twitter */',
    icon: FiTwitter,
  },
  {
    name: 'Instagram',
    url: '/* À remplir : URL Instagram */',
    icon: FiInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} {/* À remplir : Votre nom */}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 