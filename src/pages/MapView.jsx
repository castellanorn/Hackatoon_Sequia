import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

const municipios = [
  { nombre: "Barcelona", lat: 41.3851, lng: 2.1734 },
  { nombre: "Girona", lat: 41.9794, lng: 2.8214 },
  { nombre: "Lleida", lat: 41.6176, lng: 0.6200 },
  { nombre: "Tarragona", lat: 41.1189, lng: 1.2445 },
  // Agrega más municipios según sea necesario
];

const Mapa = () => {
  const [posicion, setPosicion] = useState({ lat: 41.725559, lng: 1.827794 });

  const manejarCambioMunicipio = (event) => {
    const municipioSeleccionado = municipios.find(m => m.nombre === event.target.value);
    setPosicion({ lat: municipioSeleccionado.lat, lng: municipioSeleccionado.lng });
  };

  return (
    <div className='flex-col items-center'>
      <select onChange={manejarCambioMunicipio} className='mb-2'>
        {municipios.map((municipio) => (
          <option key={municipio.nombre} value={municipio.nombre}>
            {municipio.nombre}
          </option>
        ))}
      </select>
      <div className="">
        <MapContainer center={[posicion.lat, posicion.lng]} zoom={8} className='h-4/5 w-4/5'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default Mapa;