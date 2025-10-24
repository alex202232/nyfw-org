export const Footer = () => {
  const sections = [
    {
      title: 'DIVISIONS',
      links: ['Women', 'Men', 'Special Bookings', 'New Faces']
    },
    {
      title: 'ABOUT',
      links: ['Our Story', 'Our Team', 'Offices', 'Contact']
    },
    {
      title: 'RESOURCES',
      links: ['Become a Model', 'News', 'Careers', 'Legal']
    },
    {
      title: 'SOCIAL',
      links: ['Instagram', 'Facebook', 'Twitter', 'LinkedIn']
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif text-lg font-semibold mb-6 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="font-sans text-sm font-light hover:text-primary-foreground/70 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-serif text-2xl font-bold">
              FORD MODELS
            </div>
            <p className="font-sans text-sm font-light text-primary-foreground/70">
              © {new Date().getFullYear()} Ford Models, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
