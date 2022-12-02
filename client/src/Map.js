import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const mapsKey = window.__RUNTIME_CONFIG__.REACT_APP_MAPS;
console.log(mapsKey);

const Map = ({ lat, lng }) => {
    const center = {lat: lat, lng: lng}
    console.log(center)
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: mapsKey,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      MAP
      <GoogleMap zoom={10} center={center} mapContainerStyle={{width: '800px', height: '400px', marginTop: '10px'}}>
        <Marker position={center}/>
      </GoogleMap>
    </div>
  );
};

export default Map;
