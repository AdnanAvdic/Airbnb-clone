import { useState } from "react";
import GlMap, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Map = ({ searchResults }) => {
  //Transform the search results object into the latitude, longitude object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 3.5,
  });

  //   const [selectedLocation, setSelectedLocation] = useState({});

  return (
    <GlMap
      mapStyle="mapbox://styles/adnan-avdic/clbm1m9qn000n14mtlfhkegso"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={viewport}
      onViewPortChange={(nextViewport) => {
        setViewport(nextViewport);
      }}
    >
      {/* {searchResults.map((result) => (
        <div key={result.title}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              className="cursor-pointer text-2xl animate-bounce"
              onClick={() => setSelectedLocation(result)}
            >
              📌
            </p>
          </Marker>
        </div>
      ))} */}
    </GlMap>
  );
};

export default Map;
