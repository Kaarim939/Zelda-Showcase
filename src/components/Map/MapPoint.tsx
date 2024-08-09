import { useMapEvents } from "react-leaflet";

export const MapPoint: React.FC = () => {
  useMapEvents({
    click(e) {
      console.log([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};
