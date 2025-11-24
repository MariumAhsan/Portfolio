import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { name: "GitHub", icon: <FaGithub />, url: "https://github.com/MariumAhsan/" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com/in/marium-ahsan/" },
    { name: "Email", icon: <FaEnvelope />, url: "mailto:mariumahsan937@gmail.com" },
  ];

  return (
    <footer className="relative w-full py-20 mt-32 bg-black/20 backdrop-blur-xl border-t border-white/5 text-gray-300">
      {/* Gradient glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-purple-400 to-teal-300 mb-3">
              Marium Ahsan
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences where <br /> art meets intelligence.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-fuchsia-400 transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-fuchsia-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-fuchsia-400 transition-colors">Skills</a></li>
              <li><a href="#contact" className="hover:text-fuchsia-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Connect</h4>
            <p className="text-gray-400 text-sm mb-4">
              Let’s collaborate or talk design & data.
            </p>
            <div className="flex justify-center lg:justify-start space-x-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-xl text-gray-400 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_10px_rgba(255,255,255,0.05)] group-hover:border-fuchsia-500 group-hover:shadow-[0_0_20px_rgba(192,38,211,0.3)] transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <p className="text-gray-400 text-sm">
              Dhaka, Bangladesh
              <br />
              <a href="mailto:example@email.com" className="hover:text-fuchsia-400 transition-colors">
                mariumahsan937@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-fuchsia-400">Marium Ahsan</span> — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
