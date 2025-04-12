import React, { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

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

  // Animation variants
  const fadeLeftVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const fadeRightVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: isMobile ? "center" : "flex-start",
      gap: isMobile ? "40px" : "60px",
      padding: "40px 0",
    },
    imageSection: {
      flex: "1 1 400px",
      display: "flex",
      justifyContent: "center",
      maxWidth: isMobile ? "100%" : "500px"
    },
    image: {
      width: "100%",
      maxWidth: isMobile ? "300px" : "450px",
      height: "auto",
      objectFit: "cover",
      borderRadius: "15px",
      border: "3px solid rgba(255, 255, 255, 0.1)",
      boxShadow: `0 16px 32px var(--shadow-color)`,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    contentSection: {
      flex: "1 1 500px",
      display: "flex",
      flexDirection: "column",
      alignItems: isMobile ? "center" : "flex-start"
    },
    heading: {
      fontSize: isMobile ? "2.2rem" : "2.8rem",
      fontWeight: "bold",
      marginBottom: "30px",
      background: "var(--gradient-text)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      textAlign: isMobile ? "center" : "left"
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.8",
      marginBottom: "25px",
      color: "var(--text-primary)",
      textAlign: isMobile ? "center" : "left"
    },
    contactHeading: {
      fontSize: "1.8rem",
      fontWeight: "600",
      marginTop: "30px",
      marginBottom: "20px",
      color: "var(--text-highlight)",
      textAlign: isMobile ? "center" : "left"
    },
    socialIcons: {
      display: "flex",
      gap: "25px",
      justifyContent: isMobile ? "center" : "flex-start"
    }
  };

  return (
    <main style={styles.container}>
      <motion.section 
        style={styles.contentSection}
        variants={fadeLeftVariant}
        initial="hidden"
        animate="visible"
      >
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
              transform: hoveredIcon === 'linkedin' ? "scale(1.15) translateY(-3px)" : "scale(1) translateY(0)", 
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: hoveredIcon === 'linkedin' ? `0 10px 20px var(--hover-shadow-color)` : "none",
              borderRadius: '50%',
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
              transform: hoveredIcon === 'github' ? "scale(1.15) translateY(-3px)" : "scale(1) translateY(0)", 
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: hoveredIcon === 'github' ? `0 10px 20px var(--hover-shadow-color)` : "none",
              borderRadius: '50%',
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
              transform: hoveredIcon === 'email' ? "scale(1.15) translateY(-3px)" : "scale(1) translateY(0)", 
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              boxShadow: hoveredIcon === 'email' ? `0 10px 20px var(--hover-shadow-color)` : "none",
              borderRadius: '50%',
            }}
            className="some_icon"
            url="mailto:juhani.rajalahti@gmail.com"
            bgColor="#4cc9f0"
            onMouseEnter={() => setHoveredIcon('email')}
            onMouseLeave={() => setHoveredIcon(null)}
          />
        </div>
      </motion.section>
      <motion.div 
        style={styles.imageSection}
        variants={fadeRightVariant}
        initial="hidden"
        animate="visible"
      >
        <img
          style={styles.image}
          src="https://portfolio-images-juhani.s3.eu-north-1.amazonaws.com/juhani_rajalahti.jpg"
          alt="Juhani Rajalahti"
        />
      </motion.div>
    </main>
  );
}
