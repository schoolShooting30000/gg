import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Instagram as Telegram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">ПутешествуйКлуб</h3>
            <p className="text-gray-300 mb-4">Ваш надежный партнер в мире путешествий. Организуем незабываемый отдых в любой точке мира.</p>
           
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="mr-2" size={18} />
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" size={18} />
                <a href="mailto:info@puteshestclub.ru">IlyaPovarov@isp.ru</a>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2" size={18} />
                Санкт-Петербург, ул Руставели 33
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/tours" className="hover:text-accent transition-colors">Туры</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">О нас</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} ПутешествуйКлуб. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;