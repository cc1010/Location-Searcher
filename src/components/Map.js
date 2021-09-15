import React, { useRef, useEffect, useState } from 'react';
import API_Map from '../config1'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = API_Map;

export default function Map({latLon}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(latLon.lon);
    const [lat, setLat] = useState(latLon.lan);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
            });
        });

        useEffect(() => {
            if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
              setLng(map.current.getCenter().lng.toFixed(3));
              setLat(map.current.getCenter().lat.toFixed(3));
              setZoom(map.current.getZoom().toFixed(3));
            });
          });

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
                <div>
                    <div className="sidebar">
                        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                    </div>
                <div ref={mapContainer} className="map-container" />
            </div>
        </div>
        
    );
}