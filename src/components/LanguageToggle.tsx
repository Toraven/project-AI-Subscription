import React from 'react';
import { Globe, Check } from 'lucide-react';

interface LanguageToggleProps {
  language: 'ru' | 'en';
  onLanguageChange: (lang: 'ru' | 'en') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onLanguageChange }) => {
  const languages = [
    { code: 'ru' as const, name: 'Русский', flag: '🇷🇺' },
    { code: 'en' as const, name: 'English', flag: '🇺🇸' }
  ];

  return (
    <div className="relative inline-block">
      <div className="flex items-center bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => onLanguageChange(lang.code)}
            className={`
              flex items-center gap-2 px-4 py-2 transition-all duration-200 relative
              ${language === lang.code
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                : 'text-gray-600 hover:bg-gray-50'
              }
            `}
          >
            <span className="text-lg">{lang.flag}</span>
            <span className="text-sm font-medium">{lang.name}</span>
            {language === lang.code && (
              <Check className="w-4 h-4 ml-1" />
            )}
          </button>
        ))}
      </div>
      
      {/* Globe icon indicator */}
      <div className="absolute -top-1 -right-1 p-1 bg-blue-500 rounded-full shadow-lg">
        <Globe className="w-3 h-3 text-white" />
      </div>
    </div>
  );
};

export default LanguageToggle;