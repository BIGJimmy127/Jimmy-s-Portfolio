import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Let's Connect</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-500 hover:text-apple-blue transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                {PERSONAL_INFO.email}
            </a>
            <div className="flex items-center text-slate-500">
                <Phone className="w-5 h-5 mr-2" />
                {PERSONAL_INFO.phone}
            </div>
            <div className="flex items-center text-slate-500">
                <MapPin className="w-5 h-5 mr-2" />
                {PERSONAL_INFO.location}
            </div>
        </div>
        <p className="text-slate-300 text-sm">
          © {new Date().getFullYear()} Yi-Hsin (Jimmy) Lin. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;