import React from "react";
import { serviceData } from "../data";

function Services() {
  return (
    <div className="section" id="services">
      <div className="section-title mb-3">
        <h2>
          Our <span>Services</span>
        </h2>

        <div className="section-center services-center">
          {serviceData.map((data) => {
            return (
              <article className="service" key={data.id}>
                <span className="service-icon">
                  <i className={data.icon}></i>
                </span>

                <div className="service-info">
                  <h4 className="service-title">{data.title}</h4>
                  <p className="service-text">{data.content}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
