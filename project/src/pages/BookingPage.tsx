import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Users, Phone, Mail, User, CreditCard } from 'lucide-react';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    travelers: '2',
    departureDate: '',
    specialRequests: '',
    paymentMethod: 'card'
  });

  // Данные о турах
  const tours = {
    1: {
      id: 1,
      title: 'Пляжный отдых в Турции',
      price: '45 000',
      duration: '7 дней',
      location: 'Анталья, Турция',
    },
    2: {
      id: 2,
      title: 'Экскурсионный тур по Италии',
      price: '89 000',
      duration: '10 дней',
      location: 'Рим - Флоренция - Венеция',
    },
    3: {
      id: 3,
      title: 'Отдых на Мальдивах',
      price: '156 000',
      duration: '8 дней',
      location: 'Мальдивские острова',
    },
  };

  const tour = tours[Number(id)];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleBackToTours = () => {
    navigate('/tours');
  };

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Тур не найден</h1>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="font-heading text-3xl font-bold text-green-800 mb-4">
              Бронирование успешно отправлено!
            </h1>
            <p className="text-green-700 mb-6">
              Спасибо за ваше обращение! Мы получили вашу заявку на бронирование тура "{tour.title}". 
              Наш менеджер свяжется с вами в течение 30 минут для подтверждения деталей.
            </p>
            <div className="bg-white rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-800 mb-4">Детали бронирования:</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><span className="font-medium">Тур:</span> {tour.title}</p>
                <p><span className="font-medium">Имя:</span> {formData.firstName} {formData.lastName}</p>
                <p><span className="font-medium">Email:</span> {formData.email}</p>
                <p><span className="font-medium">Телефон:</span> {formData.phone}</p>
                <p><span className="font-medium">Количество туристов:</span> {formData.travelers}</p>
                <p><span className="font-medium">Дата отправления:</span> {formData.departureDate}</p>
              </div>
            </div>
            <button
              onClick={handleBackToTours}
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Вернуться к турам
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl font-bold text-primary mb-8">Бронирование тура</h1>
        
        {/* Информация о туре */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="font-heading text-2xl font-semibold mb-4">{tour.title}</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="text-primary mr-2" size={16} />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="text-primary mr-2" size={16} />
              <span>{tour.location}</span>
            </div>
            <div className="flex items-center">
              <CreditCard className="text-primary mr-2" size={16} />
              <span className="font-semibold text-primary">от {tour.price} ₽</span>
            </div>
          </div>
        </div>

        {/* Форма бронирования */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="font-heading text-2xl font-semibold mb-6">Данные для бронирования</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-2 font-medium text-gray-700">
                  <User className="inline mr-2" size={16} />
                  Имя *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block mb-2 font-medium text-gray-700">
                  <User className="inline mr-2" size={16} />
                  Фамилия *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Введите вашу фамилию"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                  <Mail className="inline mr-2" size={16} />
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                  <Phone className="inline mr-2" size={16} />
                  Телефон *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="travelers" className="block mb-2 font-medium text-gray-700">
                  <Users className="inline mr-2" size={16} />
                  Количество туристов
                </label>
                <select
                  id="travelers"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="1">1 человек</option>
                  <option value="2">2 человека</option>
                  <option value="3">3 человека</option>
                  <option value="4">4 человека</option>
                  <option value="5">5+ человек</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="departureDate" className="block mb-2 font-medium text-gray-700">
                  <Calendar className="inline mr-2" size={16} />
                  Предпочтительная дата отправления
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="paymentMethod" className="block mb-2 font-medium text-gray-700">
                <CreditCard className="inline mr-2" size={16} />
                Способ оплаты
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="card">Банковская карта</option>
                <option value="cash">Наличные в офисе</option>
                <option value="transfer">Банковский перевод</option>
                <option value="installment">Рассрочка</option>
              </select>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block mb-2 font-medium text-gray-700">
                Особые пожелания
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Укажите любые особые пожелания или требования..."
              ></textarea>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium">Итоговая стоимость:</span>
                <span className="text-2xl font-bold text-primary">
                  {(parseInt(tour.price.replace(/\s/g, '')) * parseInt(formData.travelers)).toLocaleString()} ₽
                </span>
              </div>
              <p className="text-sm text-gray-600">
                * Окончательная стоимость может измениться в зависимости от выбранных дат и дополнительных услуг
              </p>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => navigate(`/tour/${id}`)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Назад к туру
              </button>
              <button
                type="submit"
                className="flex-1 bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Отправить заявку
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;