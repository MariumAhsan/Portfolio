import Section from "../components/Section";

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:john.doe@example.com',
      label: 'Send me an email',
      isExternal: false
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/in/johndoe',
      label: 'Connect with me on LinkedIn',
      isExternal: true
    },
    {
      name: 'GitHub',
      icon: '🐙',
      url: 'https://github.com/johndoe',
      label: 'View my projects on GitHub',
      isExternal: true
    }
  ];

  return (
    <Section id="contact" className="py-20">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600">
            I'm always interested in new opportunities and exciting projects.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-6">
            {contactLinks.map((contact) => (
              <a
                key={contact.name}
                href={contact.url}
                target={contact.isExternal ? "_blank" : undefined}
                rel={contact.isExternal ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
                aria-label={contact.label}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                    {contact.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {contact.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {contact.label}
                  </p>
                </div>

                {/* External Link Indicator */}
                {contact.isExternal && (
                  <div className="flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                )}
              </a>
            ))}
          </div>

          {/* Additional Message */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Feel free to reach out if you'd like to collaborate or just want to say hello!
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
