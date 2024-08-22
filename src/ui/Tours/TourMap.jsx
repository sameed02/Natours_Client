import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";

const Map = styled.div`
  background-color: #f2fbf1;
  padding: 2rem;
  height: 40rem;
`;

const StyledPopup = styled.div`
  font-size: 1.5rem;
`;

function TourMap({ locations }) {
  // lat, lng

  console.log(locations);
  const posi = [locations[0].coordinates[1], locations[0].coordinates[0]];
  return (
    <Map>
      <MapContainer
        center={posi}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />

        {locations.map((loc) => {
          return (
            <Marker
              position={[loc.coordinates[1], loc.coordinates[0]]}
              key={`${loc.coordinates[1]}-${loc.coordinates[0]}`}
            >
              <Popup>
                <StyledPopup>{loc.description}</StyledPopup>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </Map>
  );
}

export default TourMap;
