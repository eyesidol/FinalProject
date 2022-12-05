import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import styled from "styled-components";
const mapsKey = window.__RUNTIME_CONFIG__.REACT_APP_MAPS;

const Map = ({ lat, lng }) => {
  const center = { lat: lat, lng: lng };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <StyledMap>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{
          width: "800px",
          height: "400px",
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </StyledMap>
  );
};

export default Map;

const StyledMap = styled.div`
border: 3px solid #2fe1b9 ;
margin: 10px;

`