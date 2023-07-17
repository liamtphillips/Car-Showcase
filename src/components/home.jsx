import React, { useState } from 'react';
import homeImage from '../images/carImage.jpg';
import mclarenImage from '../images/mclaren.jpg';
import lamboImage from '../images/Lambo.jpg';
import ageraImage from '../images/agera.jpg';


const Home = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (car) => {
    setSelectedCar(car);
  };

  const handleBackClick = () => {
    setSelectedCar(null);
  };

  const cars = [
    {
      id: 1,
      title: 'Mclaren 650S',
      image: mclarenImage,
      description: 'The McLaren 650S is a stunning supercar that combines stunning design with exceptional performance. With its twin-turbocharged V8 engine, lightweight carbon fiber construction, and advanced aerodynamics, it delivers thrilling speed and handling on both road and track.',
      topSpeed: '330 km/h',
      engineSize: '3.8L V8',
      acceleration: '0-100 km/h in 2.9s',
      yearBuilt: '2014',
    },
    {
      id: 2,
      title: 'Lamborghini Huracan',
      image: lamboImage,
      description: 'The Lamborghini Huracan is a dynamic supercar renowned for its aggressive styling and exhilarating performance. It boasts a powerful V10 engine, advanced aerodynamics, and cutting-edge technology, making it a true symbol of Italian automotive excellence.',
      topSpeed: '325 km/h',
      engineSize: '5.2L V10',
      acceleration: '0-100 km/h in 3.2s',
      yearBuilt: '2014',
    },
    {
      id: 3,
      title: 'Koenigsegg Agera',
      image: ageraImage,
      description: 'The Koenigsegg Agera is a high-performance hypercar known for its exceptional speed and precision engineering. It features a lightweight carbon fiber construction, powerful V8 engine, and striking aerodynamic design.',
      topSpeed: '447 km/h',
      engineSize: '5.0L V8',
      acceleration: '0-100 km/h in 2.8s',
      yearBuilt: '2011',
    },
  ];

  return (
    <div className='bg-blue-900 flex min-h-screen font-mono items-center justify-center p-10'>
      <div>
        <div className='flex flex-col md:flex-row items-center justify-center mx-auto bg-slate-800 rounded-xl max-w-[1100px]'>
          <div>
            {selectedCar ? (
              <img
                className='rounded-t-xl md:rounded-l-xl md:rounded-tr-none'
                src={selectedCar.image}
                alt={selectedCar.title}
              />
            ) : (
              <img
                className='rounded-t-xl md:rounded-l-xl md:rounded-tr-none'
                src={homeImage}
                alt='Home Image'
              />
            )}
          </div>
          <div className='md:max-w-[600px] md:w-2/3  lg:p-6 p-2'>
            {selectedCar ? (
              <>
                <div>
                  <h2 className='text-white text-xl font-bold text-center mt-5 underline decoration-blue-600 underline-offset-4 mb-10'>
                    {selectedCar.title}
                  </h2>
                  <p className='text-white text-sm md:text-base text-center mt-3 md:p-4 p-2 border-2 border-blue-600 rounded-lg bg-slate-900'>
                    {selectedCar.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className=" border-2 border-blue-600  p-4 rounded-lg text-center bg-slate-900">
                    <h3 className="text-white font-bold text-xs lg:text-base">Top Speed</h3>
                    <p className="text-gray-300 text-xs lg:text-base">{selectedCar.topSpeed}</p>
                  </div>
                  <div className="border-2 border-blue-600 p-4 rounded-lg text-center bg-slate-900">
                    <h3 className="text-white font-bold text-xs lg:text-base">Engine Size</h3>
                    <p className="text-gray-300 text-xs lg:text-base">{selectedCar.engineSize}</p>
                  </div>
                  <div className="border-2 border-blue-600 p-4 rounded-lg text-center bg-slate-900 ">
                    <h3 className="text-white font-bold text-xs lg:text-base">Acceleration</h3>
                    <p className="text-gray-300 text-xs lg:text-base">{selectedCar.acceleration}</p>
                  </div>
                  <div className="border-2 border-blue-600 p-4 rounded-lg text-center bg-slate-900">
                    <h3 className="text-white font-bold text-xs lg:text-base">Year Built</h3>
                    <p className="text-gray-300 text-xs lg:text-base">{selectedCar.yearBuilt}</p>
                  </div>
                </div>
                <div className='flex items-center justify-center'>
                  <button
                    className='hover:bg-slate-700  cursor-pointer mt-10 text-white border-blue-600 border-2 px-6 py-2 rounded-lg list-none text-center mb-10'
                    onClick={handleBackClick}
                  >
                    Back
                  </button>
                </div>
              </>
            ) : (
              <>
                <h1 className='text-white text-sm md:text-base text-center pt-10 md:py-0'>
                  Select a car to view information.
                </h1>
                <ul className='text-white text-base text-center mt-3 py-10 md:py-0'>
                  {cars.map((car) => (
                    <li
                      key={car.id}
                      className='hover:bg-slate-700 border-2 border-blue-600 cursor-pointer mt-10 text-white p-2 rounded-lg list-none text-center mb-10'
                      onClick={() => handleCarClick(car)}
                    >
                      {car.title}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;