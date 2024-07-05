import L from "leaflet";
import "leaflet/dist/leaflet.css";
import osmtogeojson from "osmtogeojson";
import { useEffect, useState } from "react";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";

// Corregir la ruta de los íconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const position = [41.733169, 1.827596];

const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create("div", "info legend");
      div.style.backgroundColor = "white"; // Fondo blanco para la leyenda
      div.style.padding = "10px"; // Padding para la leyenda
      div.style.border = "2px solid #ccc"; // Borde para la leyenda
      div.style.borderRadius = "5px"; // Bordes redondeados

      const labels = [
        { color: "#e6d185", label: "Alerta" },
        { color: "#ffa040", label: "Excepcionalitat" },
        { color: "#ee000c", label: "Emergencia" },
        { color: "#03a64f", label: "Prealerta" },
      ];

      div.innerHTML = "<h4>Estado de las reservas de agua</h4>";
      labels.forEach((item) => {
        div.innerHTML += `
          <i style="background:${item.color}; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ${item.label}<br>
        `;
      });

      return div;
    };

    legend.addTo(map);
    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

const MapView = () => {
  const [geoJsonDataArray, setGeoJsonDataArray] = useState([]);

  useEffect(() => {
    const osmUrls = [
      "https://www.openstreetmap.org/api/0.6/relation/2809180/full",
      "https://www.openstreetmap.org/api/0.6/relation/2807397/full",
      "https://www.openstreetmap.org/api/0.6/relation/2822040/full",
      "https://www.openstreetmap.org/api/0.6/relation/2807395/full",
      "https://www.openstreetmap.org/api/0.6/relation/11745120/full",
      "https://www.openstreetmap.org/api/0.6/relation/2826216/full",
      "https://www.openstreetmap.org/api/0.6/relation/2815580/full",
      "https://www.openstreetmap.org/api/0.6/relation/349023/full",
    ];

    Promise.all(
      osmUrls.map((url) => fetch(url).then((response) => response.text()))
    )
      .then((osmDataArray) => {
        const parser = new DOMParser();
        const geoJsonArray = osmDataArray.map((osmData) => {
          const xmlDoc = parser.parseFromString(osmData, "text/xml");
          return osmtogeojson(xmlDoc);
        });

        setGeoJsonDataArray(geoJsonArray);
      })
      .catch((error) => console.error("Error fetching OSM data:", error));
  }, []);

  const colors = [
    "#e6d185", // Alt Pirineu i Aran (Lleida)
    "#e6d185", // Àmbit metropolità
    "#03a64f", // Baix Penedes
    "#ffa040", // Comarques centrals
    "#ee000c", // Catalunya del Nord
    "#03a64f", // Terres de l'ebre
    "#e6d185", // Ponent
    "#e6d185", // Comarques gironines
  ];

  const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
      layer.bindPopup(feature.properties.name);
    }
  };

  const getGeoJsonStyle = (index) => ({
    color: colors[index],
    weight: 2,
    opacity: 1,
    fillOpacity: 0.5,
  });

  return (
    <div style={{ height: "75vh", width: "75%" }}>
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geoJsonDataArray.map((geoJsonData, index) => (
          <GeoJSON
            key={index}
            data={geoJsonData}
            style={getGeoJsonStyle(index)}
            onEachFeature={onEachFeature}
          />
        ))}
        <Legend />
      </MapContainer>
    </div>
  );
};

export default MapView;
