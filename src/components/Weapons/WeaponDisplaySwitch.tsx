export const WeaponDisplaySwitch: React.FC<{
  threeDisplay: boolean;
  setThreeDisplay: (display: boolean) => void;
}> = ({ threeDisplay, setThreeDisplay }) => {
  const button = [
    {
      name: "3D",
      display: threeDisplay,
      onClick: () => setThreeDisplay(true),
    },
    {
      name: "2D",
      display: !threeDisplay,
      onClick: () => setThreeDisplay(false),
    },
  ];
  return (
    <div className="flex gap-2 rounded-lg bg-gray-700 px-2 py-1">
      {button.map((btn, index) => (
        <button
          key={index}
          onClick={btn.onClick}
          className={`${
            btn.display ? "bg-[#fcf9ddfb] text-black" : "text-white shadow-xl"
          } rounded-lg px-2 py-1 `}
        >
          {btn.name}
        </button>
      ))}
    </div>
  );
};
