import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecyclingFacilityLocator() {
    const [facilities, setFacilities] = useState([]);
    const [userLocation, setUserLocation] = useState(null); // Declare userLocation state

    useEffect(() => {
        const fetchUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const { latitude, longitude } = position.coords;
                        setUserLocation({ lat: latitude, lng: longitude }); // Update userLocation
                    },
                    (error) => console.error('Error fetching location:', error)
                );
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };

        fetchUserLocation();
    }, []);

    useEffect(() => {
        if (userLocation) {
            const fetchFacilities = async () => {
                try {
                    const { data } = await axios.get('/api/recycle/facilities', {
                        params: { lat: userLocation.lat, lng: userLocation.lng },
                    });
                    setFacilities(data);
                } catch (error) {
                    console.error('Error fetching facilities:', error);
                }
            };

            fetchFacilities();
        }
    }, [userLocation]);

    return (
        <div>
            <h2>Find Recycling Facilities Near You</h2>
            <ul>
                {facilities.map((facility, index) => (
                    <li key={index}>
                        {facility.name} ({facility.address}) - {facility.distance} km away
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecyclingFacilityLocator;
