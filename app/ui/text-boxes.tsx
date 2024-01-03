import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function WelcomeBox() {
  const fullText = "Hi! I'm Fredrik.";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100); // Typing speed in milliseconds
    }
  }, [index, text, fullText]);

  return (
    <div
      className="my-4 rounded border-2 border-white p-4 shadow-lg"
      style={{
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
        maxWidth: '600px',
      }}
    >
      <p className="text-shadow text-[32px] font-bold text-white">{text}</p>
    </div>
  );
}

export function MyNameBox() {
  return (
    <div
      className="my-4 rounded border-2 border-white p-4 shadow-lg"
      style={{ background: 'rgba(117, 58, 136, 0.7)' }}
    >
      <p className="text-shadow text-lg font-semibold text-white">
        {"Hi, I'm Fredrik, a devloper"}
      </p>
    </div>
  );
}

export function AboutMeBox() {
  return (
    <div
      className="my-4 rounded border-2 border-white p-4 shadow-lg"
      style={{
        background:
          'linear-gradient(135deg, rgba(25, 0, 51, 0.7), rgba(75, 0, 30, 0.7))',
        maxWidth: '600px',
      }}
    >
      <p className="text-shadow text-lg font-semibold text-white ">
        {
          "I'm currently in my second year pursuing a Bachelor's degree in Informatics at the Norwegian University of Science and Technology (NTNU) in Trondheim, Norway. Welcome to my portfolio website, a space where I exhibit my personal projects and expertise in software development. For a deeper insight into my professional journey, feel free to explore my CV or get in touch with me."
        }
      </p>
    </div>
  );
}

export function MyCvBox() {
  return (
    <Link href={''}>
      <div className="cv-box my-4 rounded border-2 border-white p-4 shadow-lg">
        <p className="cv-text text-shadow text-lg font-semibold text-white">
          My CV
        </p>
      </div>
    </Link>
  );
}
