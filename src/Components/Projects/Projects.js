import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";

const projects = [
  {
    name: "Fennia.fi",
    type: "Work",
    image: "photos/fenniaFI.jpg",
    live: "https://www.fennia.fi",
    git: "",
    description: `A new, fresh website for Fennia, a Finnish insurance company. 
    I was a team member in the project and helped to build, improve and 
    maintain the website.`,
    tech: "React, AWS, GatsbyJS, Contentful, NodeJS",
  },
  {
    name: "Kompassi - Insurance Sales UI",
    type: "Work",
    image: "photos/Kompassi.jpg",
    live: "",
    git: "",
    description: `We developed a front end insurance sales UI for Fennia's account managers with
    Rohea, a software company based in Helsinki. I've been working on this project since 
    october 2015 in a project manager and business analyst role.`,
    tech: "React, MongoDB, PACE-platform from Rohea",
  },
  {
    name: "Random Traveller",
    type: "For fun",
    image: "photos/random_traveller.jpg",
    live: "http://randomtraveller.surge.sh",
    git: "",
    description: `I built a small React app which randomly pics a location from Europe, US, Finland, 
    Thailand or Japan and displays a streetview from that location. Liked locations are 
    saved to DynamoDB and the user can browse and like those as well.`,
    tech:
      "React, Material UI, AWS API Gateway, AWS Lambda, DynamoDB, GoogleMaps, HERE",
  },
  {
    name: "Investment Calculator",
    type: "For fun",
    image: "photos/investment_calc.jpg",
    live: "http://investmentcalculator.s3-website.eu-north-1.amazonaws.com/",
    git: "",
    description: `Investing in index funds and ETFs has been my hobby for 10 years now. I wanted
    to build a simple investment calculator and display the end results using ChartsJS.`,
    tech: "React, ChartsJS, Material UI, AWS APIGW, AWS Lambda",
  },
  {
    name: "Wine Club",
    type: "For fun",
    image: "photos/wine_club.jpg",
    live: "http://wine-club-demo.surge.sh",
    git: "",
    description: `This was a training project on CodeCademy. I practiced building responsive 
    websites using CSS-grid.`,
    tech: "HTML, CSS",
  },
];

export default function Project() {
  return (
    <main className="projects_grid">
      <Fade up>
        <div className="title">
          <h1>PROJECTS</h1>
        </div>
        <div className="project_flex">
          {projects.map((element, index) => {
            return (
              <section className="project_grid" key={index}>
                <h2>{element.name}</h2>
                <img src={element.image} alt={element.name} />
                
                <div className="project_description">
                  <h3>Description</h3>
                  <p>{element.description}</p>
                  <h3>Tech</h3>
                  <p className="project_tech">{element.tech}</p>
                </div>
                {element.live ? (
                  <a
                    href={element.live}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Live version
                  </a>
                ) : (
                  ""
                )}
              </section>
            );
          })}
        </div>
      </Fade>
    </main>
  );
}
