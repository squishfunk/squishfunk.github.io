const Footer = () => {
  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} squishfunk. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
