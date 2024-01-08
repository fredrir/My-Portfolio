import Image from 'next/image';

export default function CvTreeMobile() {
  return (
    <div className="">
      <div className="cv-tree-box-1">
        <CvBoxOne />
      </div>
      <div className="cv-tree-box-2">
        <CvBoxTwo />
      </div>
      <div className="cv-tree-box-3">
        <CvBoxThree />
      </div>
    </div>
  );
}

function InfoBoxOne() {
  return (
    <div className="md:block">
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
          August 2023 - Descember 2023
        </p>
      </div>
    </div>
  );
}

function CvBoxOne() {
  return (
    <div
      className="mx-auto my-4 rounded border-2 border-white p-4 shadow-lg "
      style={{
        maxWidth: '350px',
        minWidth: '300px',
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[20px] font-bold text-white">
          Volunteering Developer
        </p>
      </div>
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[14px] font-bold text-white">
            "Online" Student Organization
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
        <div className="flex w-full justify-center">
        <p className="text-shadow text-[14px] font-bold text-white">
        August 2023 - Today
        </p>
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
        maxWidth: '350px',
        minWidth: '300px',
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[20px] font-bold text-white">
          Summer Intern
        </p>
      </div>
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[14px] font-bold text-white">
            Nordic American Tankers
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
        <div className="flex w-full justify-center">
        <p className="text-shadow text-[14px] font-bold text-white">
         Summer 2023
        </p>
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
        maxWidth: '350px',
        minWidth: '300px',
        background:
          'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
      }}
    >
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[20px] font-bold text-white">
          Student assistant
        </p>
      </div>
      <div className="flex w-full justify-center">
        <p className="text-shadow text-[14px] font-bold text-white">
            NTNU
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
        <div className="flex w-full justify-center">
        <p className="text-shadow text-[14px] font-bold text-white">
         August 2023 - December 2023
        </p>
      </div>
      </div>
    </div>
  );
}
