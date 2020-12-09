import React from "react";
import "./About.css";
import { SocialIcon } from "react-social-icons";
import Fade from "react-reveal/Fade";

export default function About() {
  return (
    <main class="about_grid">
      <Fade right>
        <section className="about_me">
          <div className="title" role="presentation">
            <h1>JUHANI RAJALAHTI</h1>
          </div>
          <p>
          I'm a developer / insurance professional from Espoo, Finland. I am currently working for Fennia, 
          a Finnish insurance company. During my career, I have worked in sales positions as an account 
          manager, done P&C underwriting as a risk manager and currently our team is developing digital 
          sales and customer service tools for Fennia.
          </p>
          <p>
          I've been interested in technology since childhood. I wrote my first program, a text-adventure game, 
          in elementary school. Building new things has always been my passion. On these pages you can see some 
          of my previous projects. 
          </p>
          <h2>Contact me</h2>
          <SocialIcon
            className="some_icon"
            url="https://www.linkedin.com/in/juhani-rajalahti-b822b911/"
            target="_blank"
          />
          <SocialIcon
            className="some_icon"
            url="https://github.com/rajalahti"
            target="_blank"
          />
          <SocialIcon
            className="some_icon"
            url="mailto:juhani.rajalahti@gmail.com"
          />
        </section>
        </Fade>
        <Fade left>
        <img
          id="juhani"
          src="https://portfolio-images-juhani.s3.eu-north-1.amazonaws.com/juhani_rajalahti.jpg"
          alt="Juhani Rajalahti"
        />
        </Fade>
    </main>
  );
}
