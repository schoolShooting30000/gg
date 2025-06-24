import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-heading text-4xl font-bold text-primary mb-8">О нашей компании</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-6">
            ПутешествуйКлуб — это команда профессионалов с многолетним опытом в сфере туризма. 
            Мы помогаем нашим клиентам организовать незабываемый отдых в любой точке мира.
          </p>
          <p className="text-lg">
            Наша миссия — делать путешествия доступными, комфортными и безопасными для каждого.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="font-heading text-2xl font-semibold mb-6">Наши преимущества</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
              <span>Индивидуальный подход к каждому клиенту</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
              <span>Выгодные цены и специальные предложения</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
              <span>Поддержка 24/7 во время путешествия</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;