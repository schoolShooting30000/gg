import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 5000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-primary mb-8">Контакты</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">Свяжитесь с нами</h2>
            <div className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-3 text-primary" />
                <a href="tel:+74951234567" className="hover:text-primary">+7 (495) 123-45-67</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-3 text-primary" />
                <a href="mailto:IlyaPovarov@isp.ru" className="hover:text-primary">
                  IlyaPovarov@isp.ru
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="mr-3 text-primary" />
                Санкт-Петербург, ул Руставели 33
              </p>
            </div>
          </div>
        </div>
        
        <div>
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24">
                    <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth="2\" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-800">Сообщение отправлено!</h3>
              </div>
              <p className="text-green-700 mb-4">
                Спасибо за ваше обращение! Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
              </p>
              <div className="bg-white rounded p-4 text-sm">
                <p><span className="font-medium">Имя:</span> {formData.name}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Сообщение:</span> {formData.message}</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Введите ваше сообщение..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Отправить
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;