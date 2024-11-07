import React from "react";
import data, { tours } from "../data";

/* id: 4,
    image: "../img/feature04.jpg",
    date: "Aug 26th 2024",
    title: "tibet adventure",
    info: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit vel corrupti voluptate, ducimus laudantium eum quidem mollitia qui quo dolorem amet cumque culpa rerum porro adipisci aliquid dicta, tenetur exercitationem.",
    location: "China",
    duration: "6 Days",
    cost: "From $2100", */

function TourCard() {
  return tours.map((tour) => {
    return (
      <article className="tour-card">
        <div className="tour-img-container">
          <img src={tour.image} alt={tour.alt} />
          <p className="tour-date">{tour.date}/</p>
        </div>

        <div className="tour-info">
          <h4 className="mb-1">{tour.title}</h4>
          <p className="mb-1">{tour.info}</p>
          <div className="tour-footer">
            <ul className="tour-footer-info">
              <li>
                <i className="fa-solid fa-map"></i>
                {tour.location}
              </li>
              <li>{tour.duration}</li>
              <li>{tour.cost}</li>
            </ul>
          </div>
        </div>
      </article>
    );
  });
}

export default TourCard;
