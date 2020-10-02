import React from "react";
import ReactMapboxGL, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGL({
  accessToken:
    "pk.eyJ1IjoiamVzc2ljYW1odW50IiwiYSI6ImNrZnFpYnQ2dDA1bGcycWxzbmR2dmZtd20ifQ.vFAXkCau_cN7mjzSF9VNSg",
});

const Mapbox = () => {
  return (
    <div>
      <Map
        style={"mapbox://styles/mapbox/streets-v9"}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
        </Layer>
      </Map>
      ;
    </div>
  );
};

export default Mapbox;
