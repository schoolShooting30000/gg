import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-heading font-bold text-primary">ПутешествуйКлуб</span>
          </Link>

          {/* Контакты в шапке */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+74951234567" className="flex items-center text-gray-600 hover:text-primary">
              <Phone className="h-5 w-5 mr-2" />
              <span>+7 (495) 123-45-67</span>
            </a>
          </div>

          {/* Кнопка мобильного меню */}
          <button
            className="lg:hidden text-gray-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Десктопное меню */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary font-medium">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-600 hover:text-primary font-medium">
                  Туры
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary font-medium">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-primary font-medium">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md z-50">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="block text-gray-600 hover:text-primary font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Главная
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tours"
                    className="block text-gray-600 hover:text-primary font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Туры
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block text-gray-600 hover:text-primary font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block text-gray-600 hover:text-primary font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;