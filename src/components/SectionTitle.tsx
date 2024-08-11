import hyruleLogo from "/assets/ui/hyruleLogo.png";

export const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="z-50 flex items-center justify-center bg-[#fcf9ddfb] bg-[url('/assets/ui/backLabOp.png')] bg-[length:400px_400px] bg-repeat py-8">
      <img src={hyruleLogo} className="mr-1 h-10" />
      <div className="font-custom text-5xl font-bold text-[#c09c64]">
        {title}
      </div>
      <img src={hyruleLogo} className="ml-1 h-10" />
    </div>
  );
};
