import React, { useState } from 'react';
import Image from 'next/image';

export default function ProjectBox() {
  const [isHovered, setIsHovered] = useState(false);

  const flipStyle: React.CSSProperties = {
    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    width: '300px',
    height: '300px',
  };

  const frontBackStyle: React.CSSProperties = {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backStyle: React.CSSProperties = {
    ...frontBackStyle,
    transform: 'rotateY(180deg)',
    background:
      'linear-gradient(135deg, rgba(0, 40, 128, 0.5), rgba(40, 75, 30, 0.5))',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-2 shadow-lg"
      style={{
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={flipStyle}>
        <div style={frontBackStyle}>
          <Image
            src="/app-picture.png"
            alt="Image of the app"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div style={backStyle}>
          <h3
            style={{ color: 'white', fontSize: '32px', marginBottom: '10px' }}
          >
            Online Events
          </h3>
          <span style={{ color: 'white' }}>
            An flutter app, designed for signing up for events, getting notified
            for events, and playing games
          </span>
        </div>
      </div>
    </div>
  );
}

export function ProjectBoxTwo() {
  const [isHovered, setIsHovered] = useState(false);

  const flipStyle: React.CSSProperties = {
    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    width: '300px',
    height: '300px',
  };

  const frontBackStyle: React.CSSProperties = {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backStyle: React.CSSProperties = {
    ...frontBackStyle,
    transform: 'rotateY(180deg)',
    background:
      'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-2 shadow-lg"
      style={{
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={flipStyle}>
        <div style={frontBackStyle}>
          <Image
            src="/this-website.png"
            alt="Image of the website"
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div style={backStyle}>
          <h3
            style={{ color: 'white', fontSize: '32px', marginBottom: '10px' }}
          >
            Portfolio
          </h3>
          <span style={{ color: 'white' }}>This website</span>
        </div>
      </div>
    </div>
  );
}

export function ProjectBoxThree() {
  const [isHovered, setIsHovered] = useState(false);

  const flipStyle: React.CSSProperties = {
    transform: isHovered ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    position: 'relative',
    width: '300px',
    height: '300px',
  };

  const frontBackStyle: React.CSSProperties = {
    position: 'absolute',
    backfaceVisibility: 'hidden',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const backStyle: React.CSSProperties = {
    ...frontBackStyle,
    transform: 'rotateY(180deg)',
    background:
      'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-2 shadow-lg"
      style={{
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={flipStyle}>
        <div style={frontBackStyle}>
          <Image
            src="/this-website.png"
            alt="Image of the website"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div style={backStyle}>
          <h3
            style={{ color: 'white', fontSize: '32px', marginBottom: '10px' }}
          >
            Pixel
          </h3>
          <span style={{ color: 'white' }}>
            A social media app, where user can share, comment and like photos.
          </span>
        </div>
      </div>
    </div>
  );
}
