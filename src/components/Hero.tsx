const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 via-gray-50 to-white opacity-60" />
      
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 drop-shadow-sm leading-tight">
          Building solutions<br />
          <span className="text-gray-500">that matter.</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Full-stack Developer specialized in modern web technologies. 
          Combining clean code with thoughtful design.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#projects" className="px-8 py-3.5 rounded-full text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/20">
            View my work
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-full text-base font-medium text-blue-600 bg-transparent hover:bg-blue-50 transition-colors flex items-center gap-2">
            Contact me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
