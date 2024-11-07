import React from "react";

function About() {
  return (
    <section className="section my-3" id="about">
      <div className="section-title mb-large">
        <h2>
          About <span>us</span>
        </h2>
      </div>

      <div className="section-center about-center mb-large">
        <div className="about-img">
          <img className="about-photo" src="../img/about.jpg" alt="" />
        </div>

        <article className="about-content">
          <h3 className="mb-3">Explore the difference</h3>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae provident.
          </p>

          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            alias hic unde ipsa perferendis. Corrupti culpa quia maiores
            molestiae provident.
          </p>

          <a href="#" className="btn about-btn">
            Read More
          </a>
        </article>
      </div>
    </section>
  );
}

export default About;
