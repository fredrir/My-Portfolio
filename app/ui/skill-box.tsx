export default function SkillBox() {
    return (
      <div
        className="rounded border-2 border-white p-4 shadow-lg my-4 mx-auto"
        style={{
          background: 'linear-gradient(135deg, rgba(128, 0, 128, 0.5), rgba(75, 0, 30, 0.5))',
          maxWidth: '600px',
        }}
      >
        <p className="text-shadow text-[32px] font-bold text-white">
          Skills
        </p>
      </div>
    );
}