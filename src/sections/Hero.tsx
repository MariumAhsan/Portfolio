import Section from "../components/Section";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        {/* Big Name Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          John Doe
        </h1>
        
        {/* Short Tagline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer crafting beautiful, functional web experiences with modern technologies
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            View Projects
          </button>
          
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
