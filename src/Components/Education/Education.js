import React from "react";
import './Education.css';
import Fade from "react-reveal/Fade";

const styles = {
  school: {
    borderBottom: "2px solid lightgray",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  school_logo_div: {
    width: 250,
    heigth: 80,
  },
  logo: {
    width: 250,
    heigth: "100%",
    objectFit: "contain",
  },
  title: {
    fontSize: "1.3em",
    marginBottom: 10,
  },
};

const photoPath = "https://portfolio-images-juhani.s3.eu-north-1.amazonaws.com/";

const education = [
  {
    logo: photoPath + "vyy_logo.png",
    alt: "Vaasan Yliopisto - University of Vaasa",
    title: "Master of Science in Economics",
    text:
      "I studied in Vaasa from 2007 to 2011. I majored in business law and minored in accounting.",
  },
  {
    logo: photoPath + "codecademy_logo.png",
    alt: "CodeCademy",
    title: "Full-Stack Developer",
    text:
      "I'm currently studying at CodeCademy to become a Full-stack developer.",
  },
  {
    logo: photoPath + "finva_logo.png",
    alt: "FINVA - Financial training",
    title: "Insurance degree (VTS)",
    text:
      "VTS-degree is designed for insurance professionals and covers all major topics in the industry. I completed the degree back in 2013.",
  },
];

export default function Education() {
  return (
    <section id="education_section">
      <Fade left>
        <div className="title">
          <h1>EDUCATION</h1>
        </div>
        {education.map((element, index) => {
          return (
            <div className="school" key={index}>
              <div className="school_logo_div">
                <img
                  className="school_logo"
                  src={element.logo}
                  alt={element.alt}
                />
              </div>
              <div className="education_description">
                <h2 className="education_title">{element.title}</h2>
                <p>{element.text}</p>
              </div>
            </div>
          );
        })}
      </Fade>
    </section>
  );
}
