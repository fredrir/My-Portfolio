import Image from 'next/image';
import React, { useState } from 'react';
import { ContactMeForm } from './contact-me-form';

export default function CvTree() {
    
  return (
    <div className="cvTree relative md:block">
      <CvLogoBoxOne />
      <CvLogoBoxTwo />
      <CvLogoBoxThree />
      <InfoBoxOne />
      
      <div className="cvTreeBox cv-tree-box-1">
        <CvBoxOne />
      </div>
      <div className="cvTreeBox cv-tree-box-2">
        <CvBoxTwo />
      </div>
      <div className="cvTreeBox cv-tree-box-3">
        <CvBoxThree />
        
      </div>
      <p className="ContactMeText text-shadow text-[30px] font-bold text-white">
        Contact Me
      </p>
    </div>
  );
}

function InfoBoxOne() {
  return (
    <div className='md:block'>
    <div className="CvInfoBoxOne">
      <p className="text-shadow text-[16px] font-bold text-white">
        August 2023 - Today
      </p>
    </div>
    <div className="CvInfoBoxTwo">
    <p className="text-shadow text-[16px] font-bold text-white">
        August 2023 - Descember 2023
      </p>
    </div>
    <div className="CvInfoBoxThree">
    <p className="text-shadow text-[16px] font-bold text-white">
        Summer 2023
      </p>
    </div>
    </div>
  );
}

function CvLogoBoxOne() {
  return (
    <div className="CvLogoBoxOne">
      <img
        src="/online_hvit_o.svg"
        alt="Online Logo"
        className="mr-10 h-[70px]"
      />
    </div>
  );
}

function CvLogoBoxTwo() {
  return (
    <div className="CvLogoBoxTwo">
      <img src="/ntnu-logo.svg" alt="NTNU Logo" className="mr-10 h-[70px]" />
    </div>
  );
}

function CvLogoBoxThree() {
  return (
    <div className="CvLogoBoxThree">
      <Image
        src="/nat-logo.png"
        alt="NAT Logo"
        width={200}
        height={100}
        className="mr-20 h-[40px]"
      />
    </div>
  );
}

function CvBoxOne() {
  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg "
      style={{
        maxWidth: '450px',
        minWidth: '400px',
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[20px] font-bold text-white">
          Volunteering Developer
        </p>
      </div>

      <div
        className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
        style={{
          background:
            'linear-gradient(135deg, rgba(189, 195, 199, 0.5), rgba(75, 0, 30, 0.5))',
        }}
      >
        <div className=" flex items-center">
          <ul className="text-shadow list-disc space-y-2 pl-6 text-[14px] font-bold text-white">
            <li>
              Spearheaded the development of a Flutter application aimed at
              enhancing student engagement and participation within the
              organization.
            </li>
            <li>
              Designed and implemented a user-friendly interface, enabling
              students to effortlessly sign up for various events organized by
              the student body.
            </li>
            <li>
              Integrated a real-time notification system to keep students
              informed about upcoming events and updates, improving
              communication and attendance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CvBoxTwo() {
  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg "
      style={{
        maxWidth: '450px',
        minWidth: '400px',
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[20px] font-bold text-white">
          Intern at Nordic American Tankers
        </p>
      </div>

      <div
        className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
        style={{
          background:
            'linear-gradient(135deg, rgba(189, 195, 199, 0.5), rgba(75, 0, 30, 0.5))',
        }}
      >
        <div className=" flex items-center">
          <ul className="text-shadow list-disc space-y-2 pl-6 text-[14px] font-bold text-white">
            <li>
              Completed a 6-week internship, focusing on comprehensive
              market research and analysis within the tanker industry.
            </li>
            <li>
              Conducted in-depth research on global market trends, competitor
              strategies, and emerging opportunities in the tanker shipping
              sector.
            </li>
            <li>
              Prepared detailed reports and presentations to summarize findings,
              highlighting key market drivers, challenges, and potential growth
              areas.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CvBoxThree() {
  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg "
      style={{
        maxWidth: '450px',
        minWidth: '400px',
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[20px] font-bold text-white">
          Student assistant
        </p>
      </div>

      <div
        className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
        style={{
          background:
            'linear-gradient(135deg, rgba(189, 195, 199, 0.5), rgba(75, 0, 30, 0.5))',
        }}
      >
        <div className=" flex items-center">
          <ul className="text-shadow list-disc space-y-2 pl-6 text-[14px] font-bold text-white">
            <li>
              Engaged as a Student Assistant, providing academic support and
              guidance in mathematics to students.
            </li>
            <li>
              Conductedweekly tutoring sessions, where I thought mathematical
              concepts in order to enhance students understanding and academic
              performance.
            </li>
            <li>
              Responsible for correcting and providing constructive feedback on
              student assignments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

