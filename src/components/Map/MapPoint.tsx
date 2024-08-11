import { useMapEvents } from "react-leaflet";

export const MapPoint: React.FC = () => {
  useMapEvents({
    click() {
      // To do in futur version : add behavior on click
    },
  });
  return null;
};
