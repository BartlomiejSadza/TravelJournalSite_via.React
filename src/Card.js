import React from "react";


export default function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.imageUrl} alt="photo" />
        <div className="card-content">
          <div className="card-map">
            <img src="../Marker.png" id="marker" alt="location" />
            <p>JAPAN</p>
            <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">Open in Google Maps</a>
          </div>
          <h3>{props.title}</h3>
          <h6>12 Jan, 2021 - 24 Jan, 2021</h6>
          <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </div>
      <hr />
    </div>
  )
}







{/*   {
      title: "Mount Fuji",
      location: "Japan",
      googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
      startDate: "12 Jan, 2021",
      endDate: "24 Jan, 2021",
      description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      imageUrl: "https://source.unsplash.com/WLxQvbMyfas"
  },
 */}