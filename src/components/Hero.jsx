import React, { useState, useEffect } from 'react';
import { projectsDone, slogan, techStack } from '../constants/constants';
import { Globe } from '../assets/assets';
import styles from '../style';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === techStack.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const getItemClass = (index) => {
    if (index === currentIndex) return "translate-x-0 opacity-100";
    if (index === (currentIndex + 1) % techStack.length) return "translate-x-full opacity-50";
    if (index === (currentIndex - 1 + techStack.length) % techStack.length) return "-translate-x-full opacity-50";
    return "hidden";
  };

  const techTitle = "</> Tech Stack "

  return (
    <main className='p-12 pt-32 w-full grid grid-cols-1 h-full absolute top-0' id='Home'>
      <section className='font-epilogue uppercase font-extrabold text-7xl text-title '>
        Holla! My name is <span className="bg-gradient-to-l from-primary to-title bg-clip-text text-transparent">Fadlan</span> i'm a Frontend Web Developer
      </section>

      <section className=''>
        <div className='flex w-full justify-end'>
          <div className='rounded-lg bg-gradient-to-t from-tertiary to-secondary grid grid-cols-2 group cursor-pointer overflow-hidden'>
            <div className='text-left pl-4 pt-4 pb-4 w-32'>
              {projectsDone.map((project, index) => (
                  <p key={index} className={`text-[14px] text-lightGray ${index === 0 ? "text-[40px] font-bold font-epilogue text-title" : ''}`}>{project.title}</p>
              ))}
            </div>

            <div className="bg-cover group-hover:scale-110 duration-500" style={{ backgroundImage: `url(${Globe})` }}>
            </div>
          </div>
        </div>
      </section>

      <section className='flex justify-between'>
        <div className='w-1/4'>
          {slogan.map((item, index) => (item.title === "Reach Me" ? (
            <button key={index} className={`${styles.button}`}>
              {item.title}
            </button>
          ) : (
            <p key={index} className={`${index === 0 ? "text-lightGray mb-8" : ""}`}>
              {item.title}
            </p>
          )
          ))}
        </div>

        <div className="w-1/6 container overflow-hidden">
        <p className='font-epilogue font-bold text-title uppercase bg-gradient-to-l from-primary to-title bg-clip-text text-transparent '>{techTitle}</p>
          <div className="relative h-24 flex items-center justify-center">
            {techStack.map((item, index) => (
              <div key={index} className={`absolute inset-0 flex justify-start items-center transition-transform duration-1000 ease-in-out ${getItemClass(index)} text-lightGray`}>
                <div className="text-3xl mr-2 mb-1">
                  {React.createElement(item.icon)}
                </div>
                <h2 className="text-xl font-bold font-epilogue">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero;
