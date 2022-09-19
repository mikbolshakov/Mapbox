import React, { useState, useLayoutEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./index.css";

function App() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoid3JremciLCJhIjoiY2w1MTRsMW41MDI0ejNkcnliczMyNmpjNyJ9.Oydx12NzpiCwXiQ8qKG9-Q";

  const [marker, setMarker] = useState();

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [13.6466, 47.5558],
      zoom: 4
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([13.6466, 47.5558])
      .addTo(map);
    setMarker(marker);
  }, []);

  const resorts = {
    hallstatt: [13.6466, 47.5558],
    stm: [9.8391, 46.4984],
    matera: [16.6046, 40.6659],
    kash: [29.6376, 36.2017],
    bled: [14.1136, 46.3691],
    kotor: [18.7682, 42.4206],
    como: [9.0832, 45.8081]
  };

  function handleChange(e) {
    marker.setLngLat(resorts[e.target.value]);
    setMarker(marker);
  }

  return (
    <>
      <div className="map-overlay">
        <h3>Select resort: </h3>
        <select onChange={handleChange}>
          <option value="hallstatt">Hallstatt</option>
          <option value="stm">Saint Moritz</option>
          <option value="matera">Matera</option>
          <option value="kash">Kaş</option>
          <option value="bled">Bled</option>
          <option value="kotor">Kotor</option>
          <option value="como">Como</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

export default App