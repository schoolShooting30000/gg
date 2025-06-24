import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, CreditCard, Phone } from 'lucide-react';

const HomePage = () => {
  const popularDestinations = [
    {
      id: 1,
      title: 'Турция',
      image: 'https://cache3.youla.io/files/images/780_780/59/6c/596c26bcc3bdd223e44a2664.jpg',
      price: 'от 45 000 ₽',
    },
    {
      id: 2,
      title: 'Мальдивы',
      image: 'https://www.hibiny.ru/images/news/2025/391814/e4f894867d452f554170372cf8fe719b.webp',
      price: 'от 120 000 ₽',
    },
    {
      id: 3,
      title: 'Греция',
      image: 'https://i06.fotocdn.net/s216/b9be6e7e140a8b88/public_pin_l/2922865656.jpg',
      price: 'от 65 000 ₽',
    },
  ];

  const advantages = [
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: 'Любые направления',
      description: 'Организуем путешествие в любую точку мира',
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: 'Гибкие даты',
      description: 'Подберем оптимальные даты для вашего отпуска',
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: 'Удобная оплата',
      description: 'Различные способы оплаты, включая рассрочку',
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: '24/7 поддержка',
      description: 'Всегда на связи во время вашего путешествия',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Главный баннер */}
      <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: 'url(https://avatars.mds.yandex.net/i?id=02a95c4d4ac34327bb3eceb909dd5e27_l-5330739-images-thumbs&n=13)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="font-heading text-5xl font-bold mb-6 animate-fade-in">
              Откройте мир с нами!
            </h1>
            <p className="text-xl mb-8 animate-slide-up">
              Горящие туры от 20 000 руб. Подбор индивидуальных маршрутов.
            </p>
            <Link
              to="/tours"
              className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors animate-slide-up"
            >
              Подобрать тур
            </Link>
          </div>
        </div>
      </section>

      {/* Популярные направления */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Популярные направления
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <div key={destination.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white font-heading text-2xl font-semibold mb-2">
                    {destination.title}
                  </h3>
                  <p className="text-white/90">{destination.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{advantage.icon}</div>
                <h3 className="font-heading text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма подбора тура */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-8">
              Подберем тур специально для вас
            </h2>
            <form className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Ваше имя"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60"
              />
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60"
              />
              <input
                type="text"
                placeholder="Куда хотите поехать"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60"
              />
              <input
                type="text"
                placeholder="Предпочтительные даты"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;