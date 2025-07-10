
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

const EnhancedSocialLinks = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/vunoai',
      color: 'hover:bg-blue-600',
      description: 'Follow us for daily nutrition tips'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/vunoai',
      color: 'hover:bg-pink-600',
      description: 'See fresh produce photos'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/vunoai',
      color: 'hover:bg-blue-400',
      description: 'Get real-time updates'
    },
    {
      name: 'TikTok',
      icon: MessageCircle,
      url: 'https://tiktok.com/@vunoai',
      color: 'hover:bg-black',
      description: 'Watch cooking videos'
    }
  ];

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 ${link.color} hover:text-white`}
            >
              <IconComponent className="h-8 w-8 mb-2 transition-transform group-hover:scale-110" />
              <span className="font-medium text-sm">{link.name}</span>
              <span className="text-xs text-gray-500 group-hover:text-white/80 text-center mt-1">
                {link.description}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default EnhancedSocialLinks;
