import React from "react";

const styles = {
    school: {
        borderBottom: '2px solid lightgray',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    school_logo_div: {
        width: 250,
        heigth: 80
    },
    logo: {
        width: 250,
        heigth: '100%',
        objectFit: 'contain'
    },
    title: {
        fontSize: '1.3em',
        marginBottom: 10
    }
}

const education = [
  {
    logo: "photos/vyy_logo.png",
    alt: "Vaasan Yliopisto - University of Vaasa",
    title: "Master of Science in Economics",
    text:
      "I studiet at Vaasa from 2007 to 2011. I majored in business law and minored in accounting.",
  },
  {
    logo: "photos/codecademy_logo.png",
    alt: "CodeCademy",
    title: "Full-Stack Developer",
    text:
      "I'm currently studying at CodeCademy to become a Full-stack developer.",
  },
  {
    logo: "photos/finva_logo.png",
    alt: "FINVA - Financial training",
    title: "Insurance degree (VTS)",
    text:
      "VTS-degree is designed for insurance professionals and covers all major topics in the industry. I completed the degree back in 2013.",
  },
];

export default function Education() {
  return <section id="education_section">
      <div className="title">
          <h1>EDUCATION</h1>
        </div>
          { education.map((element, index) => {
              return (
                  <div style={styles.school} id={index}>
                      <div style={styles.school_logo_div}>
                      <img style={styles.logo} className="school_logo" src={element.logo} alt={element.alt} />
                      </div>
                      <div className="desctiption">
                          <h2 style={styles.title}>{element.title}</h2>
                          <p>{element.text}</p>
                      </div>                  
                  </div>
              )
          }) }
  </section>;
}
