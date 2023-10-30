export const SectionHeader = ({ title, desc }) => {
  return (
    <div className="xl:w-[470px] mx-auto">
      <h2 className="heading text-center">{title}</h2>
      <p className="text__para text-center">{desc}</p>
    </div>
  );
};
