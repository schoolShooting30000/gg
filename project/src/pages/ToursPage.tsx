import React from 'react';
import { Link } from 'react-router-dom';

const ToursPage = () => {
  const tours = [
    {
      id: 1,
      title: 'Пляжный отдых в Турции',
      price: '45 000',
      duration: '7 дней',
      image: 'https://blog.ostrovok.ru/wp-content/uploads/2023/08/1копия-21.jpg',
    },
    {
      id: 2,
      title: 'Экскурсионный тур по Италии',
      price: '89 000',
      duration: '10 дней',
      image: 'https://th-thumbnailer.cdn-si-edu.com/Ze3Tfz93HI7MNeezqOsXC9sDpkQ=/fit-in/1600x0/filters:focal(1040x515:1041x516)/https://tf-cmsv2-journeys-media.s3.amazonaws.com/filer/83/06/83065c6c-3628-44a5-a2a6-8296c2ce1f94/ita_vernazza_cinqueterre_ist_473678608.jpg',
    },
    {
      id: 3,
      title: 'Отдых на Мальдивах',
      price: '156 000',
      duration: '8 дней',
      image: 'https://avatars.mds.yandex.net/i?id=bb69544f420a199ca478b8edf67aec8c_l-12890014-images-thumbs&n=13',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-primary mb-8">Наши туры</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <div key={tour.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-heading text-xl font-semibold mb-2">{tour.title}</h3>
              <p className="text-gray-600 mb-4">Длительность: {tour.duration}</p>
              <p className="text-2xl font-semibold text-primary mb-4">от {tour.price} ₽</p>
              <Link
                to={`/tour/${tour.id}`}
                className="block text-center bg-accent hover:bg-accent-dark text-white font-semibold py-2 px-4 rounded transition-colors"
              >
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursPage;