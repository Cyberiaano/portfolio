import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    icon: <FiGithub className="w-6 h-6" />,
    url: '/* À remplir : URL GitHub */',
  },
  {
    name: 'LinkedIn',
    icon: <FiLinkedin className="w-6 h-6" />,
    url: '/* À remplir : URL LinkedIn */',
  },
  {
    name: 'Twitter',
    icon: <FiTwitter className="w-6 h-6" />,
    url: '/* À remplir : URL Twitter */',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Ici, vous devrez implémenter l'envoi réel du formulaire
      // Par exemple, avec un service comme EmailJS ou en appelant votre API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulation
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          N'hésitez pas à me contacter pour discuter de vos projets ou pour toute autre question.
        </p>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Formulaire de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Adresse email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                    Message envoyé avec succès !
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                    Une erreur est survenue. Veuillez réessayer.
                  </p>
                )}
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiMail className="w-6 h-6 text-primary mt-1" />
                    <div className="ml-4">
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:/* À remplir : votre@email.com */"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        {/* À remplir : votre@email.com */}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiPhone className="w-6 h-6 text-primary mt-1" />
                    <div className="ml-4">
                      <p className="font-medium">Téléphone</p>
                      <a
                        href="tel:/* À remplir : +33600000000 */"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary"
                      >
                        {/* À remplir : +33 6 00 00 00 00 */}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FiMapPin className="w-6 h-6 text-primary mt-1" />
                    <div className="ml-4">
                      <p className="font-medium">Localisation</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {/* À remplir : Votre ville, Pays */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-xl font-semibold mb-6">Réseaux sociaux</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 