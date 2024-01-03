'use client';

import Navbar from './navbar';
import WelcomeBox from './ui/text-boxes';
import { MyNameBox } from './ui/text-boxes';
import BackgroundImage from './ui/background-image';
import { AboutMeBox } from './ui/text-boxes';
import { MyCvBox } from './ui/text-boxes';
import SkillBox from './ui/skill-box';
import { BackendBox, FrontendBox, LanguagesBox } from './ui/skill-box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, } from 'react';
import { BackgroundImageTwo, ImageOfMe } from './ui/background-image';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="relative h-[150vh] w-full">
        <BackgroundImage />
        <Navbar />
        <div className="flex h-full w-full flex-col items-start justify-start px-20 pt-16">
        <div className="flex items-center space-x-20"> 
            <WelcomeBox />
            <ImageOfMe />
          </div>
          {/* <MyNameBox />*/}
          <AboutMeBox />
          <MyCvBox />
          <SkillBox />
          <div className="flex w-full flex-col justify-between space-y-4 md:flex-row md:space-y-0">
            <div
              className="skill-box flex-grow"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <LanguagesBox />
            </div>
            <div
              className="skill-box flex-grow"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              <FrontendBox />
            </div>
            <div
              className="skill-box flex-grow"
              data-aos="fade-right"
              data-aos-delay="900"
            >
              <BackendBox />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[150vh] w-full text-white">
        <BackgroundImageTwo/>
      </div>
    </>
  );
}
