import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';

const TourDetailPage = () => {
  const { id } = useParams();

  // Данные о турах
  const tours = {
    1: {
      id: 1,
      title: 'Пляжный отдых в Турции',
      description: 'Незабываемый отдых на берегу Средиземного моря в роскошном отеле 5 звезд с системой "все включено". Насладитесь теплым морем, великолепной кухней и комфортным размещением.',
      price: '45 000',
      duration: '7 дней',
      location: 'Анталья, Турция',
      image: 'https://blog.ostrovok.ru/wp-content/uploads/2023/08/1копия-21.jpg',
      includes: [
        'Перелет Москва - Анталья - Москва',
        'Трансфер аэропорт - отель - аэропорт',
        'Проживание в отеле 5* Rixos Premium',
        'Питание "все включено"',
        'Медицинская страховка',
        'Групповой трансфер',
      ],
    },
    2: {
      id: 2,
      title: 'Экскурсионный тур по Италии',
      description: 'Увлекательное путешествие по красивейшим городам Италии. Посетите Рим, Флоренцию и Венецию, познакомьтесь с историей, искусством и гастрономией этой удивительной страны.',
      price: '89 000',
      duration: '10 дней',
      location: 'Рим - Флоренция - Венеция',
      image: 'https://th-thumbnailer.cdn-si-edu.com/Ze3Tfz93HI7MNeezqOsXC9sDpkQ=/fit-in/1600x0/filters:focal(1040x515:1041x516)/https://tf-cmsv2-journeys-media.s3.amazonaws.com/filer/83/06/83065c6c-3628-44a5-a2a6-8296c2ce1f94/ita_vernazza_cinqueterre_ist_473678608.jpg',
      includes: [
        'Авиаперелет',
        'Проживание в отелях 4*',
        'Завтраки',
        'Экскурсионная программа',
        'Трансферы по программе',
        'Услуги русскоговорящего гида',
      ],
    },
    3: {
      id: 3,
      title: 'Отдых на Мальдивах',
      description: 'Райский отдых на белоснежных пляжах Мальдивских островов. Кристально чистая вода, роскошные виллы над океаном и непревзойденный сервис сделают ваш отпуск незабываемым.',
      price: '156 000',
      duration: '8 дней',
      location: 'Мальдивские острова',
      image: 'https://avatars.mds.yandex.net/i?id=bb69544f420a199ca478b8edf67aec8c_l-12890014-images-thumbs&n=13',
      includes: [
        'Перелет бизнес-классом',
        'Проживание в вилле 5* люкс',
        'Питание полный пансион',
        'Трансфер на гидросамолете',
        'Спа-процедуры',
        'Премиум страховка',
      ],
    },
  };

  const tour = tours[Number(id)];

  if (!tour) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Тур не найден</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="font-heading text-4xl font-bold text-primary mb-4">{tour.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{tour.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar className="text-primary mr-2" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-primary mr-2" />
              <span>{tour.location}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">В стоимость входит:</h2>
            <ul className="space-y-2">
              {tour.includes.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="text-3xl font-bold text-primary mb-2">от {tour.price} ₽</p>
            <p className="text-gray-600">за человека</p>
          </div>

          <Link
            to={`/booking/${tour.id}`}
            className="block w-full text-center bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Забронировать
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;