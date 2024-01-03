import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div>
    <Image
      src="/sup-background.png"
      alt="background image"
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
    </div>
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
        zIndex: -2,
      }}
    />
  );
}

export function ImageOfMe() {
    return (
      <div data-aos="slide-left" data-aos-delay="2150">
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
