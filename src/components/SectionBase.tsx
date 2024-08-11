import { SectionTitle } from "./SectionTitle";

// The goal here was to create a base for the sections of the home page and to make it easier to modulate the sections

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
