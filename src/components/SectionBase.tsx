import { SectionTitle } from "./SectionTitle";

export const SectionBase: React.FC<{
  title: string;
  section: JSX.Element;
}> = ({ title, section }) => {
  return (
    <div>
      <SectionTitle title={title} />
      <div>{section}</div>
    </div>
  );
};
