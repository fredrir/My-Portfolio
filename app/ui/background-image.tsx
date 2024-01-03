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

export function BackgroundImageTwo() {
  return (
    <Image
      src="/background-image-two.png"
      alt="background image-two"
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
  );
}

export function ImageOfMe() {
    return (
      <div data-aos="slide-left" data-aos-delay="400">
        <Image
          src="/image-of-me.png"
          alt="Image of me"
          width={200} 
          height={200} 
          objectFit='cover'
        />
      </div>
    );
  }