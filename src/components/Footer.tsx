const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Email', icon: '✉️', url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Main Footer Text */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">John Doe</h3>
          <p className="text-gray-300 text-lg">
            Building amazing digital experiences with passion and creativity
          </p>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-gray-400 hover:text-white transition-colors duration-200 group"
              aria-label={social.name}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  {social.icon}
                </span>
                <span className="text-sm font-medium">{social.name}</span>
              </div>
            </a>
          ))}
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
