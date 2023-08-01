import React, { useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import config from "./config";
import "./style.css";
import GoogleMapsLink from "./GoogleMapsLink";

const petShops = [
    {
        name: "Shauna's Pet Shop",
        position: { lat: 53.35159714281118, lng: -6.268742439473792 },
    },
    {
        name: "Pet Palace",
        position: { lat: 53.355695552690726, lng: -6.263249274592091 },
    },
    {
        name: "Barts Pets",
        position: { lat: 53.364710666820656, lng: -6.287625189061938 },
    },

    {
        name: "Petworld Dublin Santry",
        position: { lat: 53.3962485489582, lng: -6.251919624919642 },
    },
    {
        name: "Petland",
        position: { lat: 53.33909455944593, lng: -6.265309212783713 },
    },

    {
        name: "Bird Jungle",
        position: { lat: 53.30401445445316, lng: -6.24609514623764 },
    },

    {
        name: "Breffni House Pets",
        position: { lat: 53.338958085131786, lng: -6.3005518936206535 },
    },

    {
        name: "Rocky's Dog Grooming",
        position: { lat: 53.30164864601803, lng: -6.1755102314443695 },
    },

    {
        name: "Grooming.dog",
        position: { lat: 53.336205864878536, lng: -6.234390085172904 },
    },

    {
        name: "Fluffy Mutts",
        position: { lat: 53.347889510527104, lng: -6.224090403002551 },
    },

    {
        name: "Dublin Dog Grooming",
        position: { lat: 53.28040823052119, lng: -6.126586738390919 },
    },

    {
        name: "Glamour Dogs",
        position: { lat: 53.36940363723774, lng: -6.229240241570566 },
    },

    {
        name: "ParknBark Professional Grooming Studio",
        position: { lat: 53.29697832605866, lng: -6.2705111534581555 },
    },


];

function MapSearch() {
    const mapContainerRef = useRef(null);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: config.googleMapsApiKey,
        version: "weekly",
        libraries: ["places"],
    });

 

    useEffect(() => {
      
        
    function createMarkers() {
        const center = {
            lat: 53.34762448470476,
            lng: -6.26695454200322,
        };
        const map = new window.google.maps.Map(mapContainerRef.current, {
            zoom: 12,
            center: center,
            mapId: "4504f8b37365c3d0",
        });


        const infoWindow = new window.google.maps.InfoWindow();

        petShops.forEach((petShop, index) => {
            const marker = new window.google.maps.Marker({
                position: petShop.position,
                map: map,
                title: `${index + 1}. ${petShop.name}`,
            });

            marker.addListener("click", () => {
                infoWindow.close();
                infoWindow.setContent(marker.title);
                infoWindow.open(map, marker);
            });
        });
        
    }
    if (isLoaded) {
        createMarkers();
    }
}, [isLoaded]);

const center = {
    lat: 53.34762448470476,
    lng: -6.26695454200322,
};

    return (
        <div className="map-container">

            <div className="text1map">
                <h1> Find the perfect pet shop near you!</h1>
            </div>

            <div
                id="map"
                ref={mapContainerRef}
        
            >
                {loadError && <div> Error loading Google Maps </div>}
                {!isLoaded && <div> Loading... 
</div>}
            </div>

            <div className="text-end">
                <p>
                    Utilize our convenient platform to provide convenience and care for
                    your pets. Through our current database, you can quickly find pet
                    stores, grooming facilities, and parks in the area.
                    <br />
                    <h4>Check the full list</h4>
                    <GoogleMapsLink query=" Pet shop near me " latitude={center.lat} longitude={center.lng} />
                </p>
            </div>
        </div>
    );
}

export default MapSearch;
