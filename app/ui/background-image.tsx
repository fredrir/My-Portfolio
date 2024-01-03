import Image from 'next/image';

export default function BackgroundImage() {
    return (
        <Image
        src="/background-portofolio.png"
        alt="background image"
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
    );
  }