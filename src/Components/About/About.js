import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import Fade from "react-reveal/Fade";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: isMobile ? "center" : "flex-start",
      gap: isMobile ? "30px" : "50px",
      padding: "20px 0",
    },
    imageSection: {
      flex: "1 1 400px",
      display: "flex",
      justifyContent: "center",
      maxWidth: isMobile ? "100%" : "500px"
    },
    image: {
      width: "100%",
      maxWidth: isMobile ? "300px" : "500px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "10px",
      boxShadow: "0 16px 32px rgba(0, 0, 0, 0.25)",
      transition: "transform 0.3s ease",
    },
    contentSection: {
      flex: "1 1 500px",
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "center" : "flex-start"
    },
    heading: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      fontWeight: "bold",
      marginBottom: "30px",
      background: "linear-gradient(90deg, #4cc9f0, #7209b7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textAlign: isMobile ? "center" : "left"
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      marginBottom: "20px",
      color: "#e0e0e0",
      textAlign: isMobile ? "center" : "left"
    },
    contactHeading: {
      fontSize: "1.8rem",
      fontWeight: "600",
      marginTop: "30px",
      marginBottom: "20px",
      color: "#f8f9fa",
      textAlign: isMobile ? "center" : "left"
    },
    socialIcons: {
      display: "flex",
      gap: "20px",
      justifyContent: isMobile ? "center" : "flex-start"
    }
  };

  return (
    <main style={styles.container}>
      <Fade left>
        <section style={styles.contentSection}>
          <h1 style={styles.heading}>JUHANI RAJALAHTI</h1>
          <p style={styles.paragraph}>
            I'm a solutions architect and insurance professional from Espoo, Finland. I am currently working for Fennia, 
            a Finnish insurance company. During my career, I have worked in sales positions as an account 
            manager, done P&C underwriting as a risk manager and currently our team is developing digital 
            sales and customer service tools for Fennia.
          </p>
          <p style={styles.paragraph}>
            I've been interested in technology since childhood. I wrote my first program, a text-adventure game, 
            in elementary school. Building new things has always been my passion. On these pages you can see some 
            of my previous projects.
          </p>
          <h2 style={styles.contactHeading}>Contact me</h2>
          <div style={styles.socialIcons}>
            <SocialIcon
              style={{
                margin: "10px 10px 10px 0", 
                transform: hoveredIcon === 'linkedin' ? "scale(1.15)" : "scale(1)", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: hoveredIcon === 'linkedin' ? "0 10px 20px rgba(76, 201, 240, 0.3)" : "none",
              }}
              className="some_icon"
              url="https://www.linkedin.com/in/juhani-rajalahti-b822b911/"
              target="_blank"
              bgColor="#4cc9f0"
              onMouseEnter={() => setHoveredIcon('linkedin')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            <SocialIcon
              style={{
                margin: "10px", 
                transform: hoveredIcon === 'github' ? "scale(1.15)" : "scale(1)", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: hoveredIcon === 'github' ? "0 10px 20px rgba(76, 201, 240, 0.3)" : "none",
              }}
              className="some_icon"
              url="https://github.com/rajalahti"
              target="_blank"
              bgColor="#4cc9f0"
              onMouseEnter={() => setHoveredIcon('github')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
            <SocialIcon
              style={{
                margin: "10px", 
                transform: hoveredIcon === 'email' ? "scale(1.15)" : "scale(1)", 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: hoveredIcon === 'email' ? "0 10px 20px rgba(76, 201, 240, 0.3)" : "none",
              }}
              className="some_icon"
              url="mailto:juhani.rajalahti@gmail.com"
              bgColor="#4cc9f0"
              onMouseEnter={() => setHoveredIcon('email')}
              onMouseLeave={() => setHoveredIcon(null)}
            />
          </div>
        </section>
      </Fade>
      <Fade right>
        <div style={styles.imageSection}>
          <img
            style={styles.image}
            src="https://portfolio-images-juhani.s3.eu-north-1.amazonaws.com/juhani_rajalahti.jpg"
            alt="Juhani Rajalahti"
          />
        </div>
      </Fade>
    </main>
  );
}
