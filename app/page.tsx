import Navbar from './navbar';
import WelcomeBox from './ui/text-boxes';
import { MyNameBox } from './ui/text-boxes';
import BackgroundImage from './ui/background-image';
import { AboutMeBox } from './ui/text-boxes';
import { MyCvBox } from './ui/text-boxes';
import SkillBox from './ui/skill-box';

export default function Home() {
  return (
    <>
      <div className="relative h-[150vh] w-full">
        <BackgroundImage />
        <Navbar />
        <div className="flex flex-col items-start justify-start w-full h-full pt-16 px-20">
          <WelcomeBox />
          {/* <MyNameBox />*/}
          <AboutMeBox />
          <MyCvBox />
          <SkillBox/>
        </div>
      </div>
      <div className="relative h-screen w-full text-white">
        
      </div>
    </>
  );
}
