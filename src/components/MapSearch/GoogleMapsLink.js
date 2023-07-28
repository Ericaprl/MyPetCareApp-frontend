// GoogleMapsLink.js

import React from "react";

const GoogleMapsLink = ({ query, latitude, longitude }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(
    query
  )}/${latitude},${longitude},13z/data=!3m1!4b1`;

  return (
    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      {query}
    </a>
  );
};

export default GoogleMapsLink;
