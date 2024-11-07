import React from "react";
import Title from "./Title";
import { tourData } from "../data";

function Tours() {
  return  ( 
    <div className="section  mb-large" id="tours">
      <Title main_title="Featured" sub_title="tours" />

      <section className="featured-center">
        {tourData.map((tour) => {
          return (
            <article key={tour.id} className="tour-card">
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
        })}
      </section>
    </div>
  );
}

export default Tours;
