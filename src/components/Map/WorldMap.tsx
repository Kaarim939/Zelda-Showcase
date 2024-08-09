import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./WorldMap.css";
import { MapPoint } from "./MapPoint";

export const WorldMap: React.FC = () => {
  return (
    <>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={3}
        className=""
        maxBounds={[
          [85.04733631224823, 179.022216796875],
          [-75.71563324165896, -179.912109375],
        ]}
        maxBoundsViscosity={2.0}
        attributionControl={false}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="/assets/map/tiles/{z}/{x}/{y}.png"
          noWrap
          maxZoom={7}
          minZoom={3}
        />
        <MapPoint />
        {/* To add : all the markers */}

        <Marker position={[51.505, -0.09]}>
          <Popup>Temporary popup</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
