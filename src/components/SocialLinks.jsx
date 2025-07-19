import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4 justify-center">
      {/* GitHub */}
      <a
        href="https://github.com/sameerkhansabri"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white hover:bg-gray-800 p-3 rounded-full transition duration-300 hover:scale-110"
      >
        <FaGithub size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/sameerkhansabri"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white hover:bg-blue-600 p-3 rounded-full transition duration-300 hover:scale-110"
      >
        <FaLinkedin size={24} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/sameerkhansabri"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white hover:bg-blue-400 p-3 rounded-full transition duration-300 hover:scale-110"
      >
        <FaTwitter size={24} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/sameer_khan_sabri"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-white hover:bg-pink-500 p-3 rounded-full transition duration-300 hover:scale-110"
      >
        <FaInstagram size={24} />
      </a>
    </div>
  );
}