import Link from 'next/link';

export default function SkillBox({ title }: { title: string }) {
  return (
    <div
      className="mx-auto my-4 w-full rounded border-2 border-white p-4 shadow-lg"
      style={{
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[24px] font-bold text-white">{title}</p>
      </div>
    </div>
  );
}

export function LanguagesBox() {
  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg "
      style={{
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
        maxWidth: '350px',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[24px] font-bold text-white">
          Languages
        </p>
      </div>

      <div
        className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
        style={{
          background:
            'linear-gradient(135deg, rgba(189, 195, 199, 0.5), rgba(75, 0, 30, 0.5))',
        }}
      >
        <Link href={'https://dart.dev/'}>
          <div className="flex items-center link-hover-effect">
            <img src="/dart-icon.svg" alt="Dart" className="mr-2 h-[28px]" />
            <p className="text-shadow text-[20px] font-bold text-white">Dart</p>
          </div>
        </Link>

        <Link href={'https://developer.mozilla.org/en-US/docs/Web/HTML'}>
          <div className="flex items-center link-hover-effect">
            <img src="/html-logo.svg" alt="HTML" className="mr-2 h-[28px]" />
            <p className="text-shadow text-[20px] font-bold text-white">HTML</p>
          </div>
        </Link>

        <Link href={'https://www.java.com/en/'}>
          <div className="flex items-center link-hover-effect">
            <img src="/java-logo.svg" alt="Java" className="mr-2 h-[28px]" />
            <p className="text-shadow text-[20px] font-bold text-white">Java</p>
          </div>
        </Link>

        <Link href={'https://developer.mozilla.org/en-US/docs/Web/javascript'}>
          <div className="flex items-center link-hover-effect">
            <img
              src="/javascript-logo.svg"
              alt="JavaScript"
              className="mr-2 h-[28px]"
            />
            <p className="text-shadow text-[20px] font-bold text-white">
              JavaScript
            </p>
          </div>
        </Link>

        <Link href={'https://www.python.org/'}>
        <div className="flex items-center link-hover-effect">
          <img src="/python-logo.svg" alt="Python" className="mr-2 h-[28px]" />
          <p className="text-shadow text-[20px] font-bold text-white">Python</p>
        </div>
        </Link>

        <Link href={'https://www.typescriptlang.org/'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/typescript-logo.svg"
            alt="TypeScript"
            className="mr-2 h-[28px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            TypeScript
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export function FrontendBox() {
  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
      style={{
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
        maxWidth: '350px',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[24px] font-bold text-white">Frontend</p>
      </div>
      <div
        className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
        style={{
          background:
            'linear-gradient(135deg, rgba(189, 195, 199, 0.5), rgba(75, 0, 30, 0.5))',
        }}
      >
        <Link href={'https://developer.mozilla.org/en-US/docs/Web/CSS'}>
        <div className="flex items-center link-hover-effect">
          <img src="/css-logo.svg" alt="Dart" className="mr-2 h-[28px]" />
          <p className="text-shadow text-[20px] font-bold text-white">CSS</p>
        </div>
        </Link>

        <Link href={'https://flutter.dev/'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/flutter-logo.svg"
            alt="Flutter"
            className="mr-2 h-[28px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            Flutter
          </p>
        </div>
        </Link>

        <Link href={'https://openjfx.io/'}>
        <div className="flex items-center link-hover-effect">
          <img src="/java-logo.svg" alt="JavaFX" className="mr-2 h-[28px]" />
          <p className="text-shadow text-[20px] font-bold text-white">JavaFX</p>
        </div>
        </Link>
        
        <Link href={'https://nextjs.org/'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/next-js-logo.svg"
            alt="Next.js"
            className="mr-2 h-[28px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            Next.js
          </p>
        </div>
        </Link>

        <Link href={'https://react.dev/'}>
        <div className="flex items-center link-hover-effect">
          <img src="/react-logo.svg" alt="Java" className="mr-2 h-[28px]" />
          <p className="text-shadow text-[20px] font-bold text-white">React</p>
        </div>
        </Link>
        <Link href={'https://tailwindcss.com/'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/tailwind-logo.svg"
            alt="JavaScript"
            className="mr-2 h-[28px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            Tailwind CSS
          </p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export function BackendBox() {
  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
      style={{
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
        maxWidth: '350px',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[24px] font-bold text-white">Backend</p>
      </div>
      <div
        className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg"
        style={{
          background:
            'linear-gradient(135deg, rgba(189, 195, 199, 0.5), rgba(75, 0, 30, 0.5))',
        }}
      >
        <Link href={'https://appwrite.io/'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/appwrite-logo.svg"
            alt="Appwrite"
            className="mr-2 h-[24px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            Appwrite
          </p>
        </div>
        </Link>

        <Link href={'https://cloud.google.com/'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/google-cloud-services-logo.svg"
            alt="Google Cloud Platform"
            className="mr-2 h-[28px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            GCP
          </p>
        </div>
        </Link>

        <Link href={'https://nodejs.org/en'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/node-js-logo.svg"
            alt="Node.js"
            className="mr-2 h-[28px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            Node.js
          </p>
        </div>
        </Link> 

        <Link href={'https://www.postgresql.org/'}>
        <div className="flex items-center link-hover-effect">
          <img
            src="/postgresql-logo.svg"
            alt="PostgreSQL"
            className="mr-2 h-[28px]"
          />
          <p className="text-shadow text-[20px] font-bold text-white">
            PostgreSQL
          </p>
        </div>
        </Link>

        <div className="flex items-center">
          <p className="text-shadow text-[20px] font-bold text-white">
            {' ...'}
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-shadow text-[20px] font-bold text-white">
            {' ...'}
          </p>
        </div>
      </div>
    </div>
  );
}
