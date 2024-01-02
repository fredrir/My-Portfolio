import Image from 'next/image';
import Navbar from './navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative h-[500px]">
        <Image
          src="/background-portofolio.png"
          layout="fill"
          objectFit="cover"
          alt="Background"
          className="z-0"
        />
        <div
          className="absolute left-1/2 top-[10%] z-10 -translate-x-1/2 transform rounded p-4 shadow-lg"
          style={{ background: 'rgba(117, 58, 136, 0.5)' }}
        >
          <p className="text-shadow text-xl font-bold text-white">
            Welcome to my portfolio
          </p>
        </div>

        <div
          className="absolute left-[10%] top-[40%] z-10 -translate-x-1/2 -translate-y-1/2 transform rounded p-4 shadow-lg"
          style={{ background: 'rgba(117, 58, 136, 0.7)' }}
        >
          <p className="text-shadow text-lg font-semibold text-white">
            My name is Fredrik
          </p>
        </div>

        <div
          className="absolute left-[35%] top-[70%] z-10 -translate-x-1/2 -translate-y-1/2 transform rounded p-4 shadow-lg"
          style={{ background: 'rgba(117, 58, 136, 0.7)' }}
        >
          <p className="text-shadow text-lg font-semibold text-white">
            {"I'm Fredrik, a student and in my 2. year studying taking a bachelor in informatics at 'Norwegian University of Science and Technology' (NTNU) Based In Trondheim, Norway. This is a portfolio website where I showcase some of my personal projects and skills in the field of software development. If you would like to know more about me, you can check out my CV or contact me."}
          </p>
        </div>
      </div>
    </>
  );
}
