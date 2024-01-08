import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    >
      <Image
        src="/sup-background.png"
        alt="background image"
        fill
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

export function CvBackgroundImage() {
  return (
    <Image
      src="/cv-background-image.png"
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
    <div data-aos="slide-left" data-aos-delay="2150">
      <Image
        src="/image-of-me.png"
        alt="Image of me"
        width={200}
        height={200}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

export function ImageOfMeMobile() {
  return (
    <div data-aos="slide-left" data-aos-delay="2150">
      <Image
        src="/image-of-me.png"
        alt="Image of me"
        width={125}
        height={125}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}
