export const SectionTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="z-50 flex items-center justify-center bg-[#fcf9ddfb] bg-[url('/assets/ui/backLabOp.png')] bg-[length:400px_400px] bg-repeat py-8">
      <div className=" cursor-pointer font-custom text-5xl font-bold  text-yellow-900">
        {title}
      </div>
    </div>
  );
};
