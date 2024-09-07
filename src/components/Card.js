import React from "react";


export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imageUrl} alt="photo" />
        <div className="card-content">
          <div className="card-map">
            <img src="../Marker.png" id="marker" alt="location" />
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>Open in Google Maps</a>
          </div>
          <h3>{props.title}</h3>
          <h6>{`${props.startDate} - ${props.endDate}`}</h6>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

