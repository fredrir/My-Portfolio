'use client';

import Navbar from './navbar';
import Image from 'next/image';
import WelcomeBox from './ui/text-boxes';
import BackgroundImage from './ui/background-image';
import { AboutMeBox } from './ui/text-boxes';
import { MyCvBox } from './ui/text-boxes';
import SkillBox from './ui/skill-box';
import { BackendBox, FrontendBox, LanguagesBox } from './ui/skill-box';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { ContactMeForm } from './ui/contact-me-form';
import { ImageOfMe, ImageOfMeMobile } from './ui/background-image';
import ProjectBox from './ui/project-box';
import { ProjectBoxTwo, ProjectBoxThree } from './ui/project-box';
import CvTree from './ui/cv-tree';
import CvTreeMobile from './ui/cv-tree-mobile';
import { Analytics } from '@vercel/analytics/react';
import { FredrikStats } from './ui/fredrik-stats';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="relative h-[300vh] w-full">
        <Navbar />
        <div className="relative h-[300vh] w-full">
          <BackgroundImage />
          <div className="flex h-full w-full flex-col items-start justify-start px-20 pt-16">
            <div className="mt-[4%] flex items-center justify-start space-x-20">
              <div className="flex-shrink-0">
                <WelcomeBox />
              </div>
              <div className="hidden flex-shrink-0 md:block">
                <ImageOfMe />
              </div>
            </div>
            <div className="md:hidden">
              <ImageOfMeMobile />
            </div>
            {/* <MyNameBox />*/}
            <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
              <AboutMeBox />
              {/* <FredrikStats /> */}
            </div>

            <MyCvBox />
            <SkillBox title={'Skills'} />

            <div className="Skills flex w-full flex-col justify-between space-y-4 md:flex-row md:space-y-0">
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
            <div>
              <Image
                src="/rocket-ship.svg"
                width={100}
                height={100}
                alt="Rocket Ship"
                className="rocket-ship"
              />
            </div>
            <SkillBox title={'Projects'} />
            <div className="Projects flex w-full flex-col justify-between space-y-4 md:flex-row md:space-y-0">
              <div
                className="skill-box flex-grow"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <ProjectBox />
              </div>
              <div
                className="skill-box flex-grow"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <ProjectBoxTwo />
              </div>
              <div
                className="skill-box flex-grow"
                data-aos="fade-right"
                data-aos-delay="900"
              >
                <ProjectBoxThree />
              </div>
            </div>

            <div className="hide-on-mobile flex w-full">
              <CvTree />
            </div>
            <div className="hide-on-desktop flex w-full items-center justify-center">
              <CvTreeMobile />
            </div>
            <div className="hide-on-desktop">
              <ContactMeForm />
            </div>
          </div>
        </div>

        <Analytics />
      </div>
    </>
  );
}
