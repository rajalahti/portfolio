import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [isMobile, setIsMobile] = useState(false);

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

  // Staggered animation for the education items
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section style={{width: "100%"}}>
      <motion.div 
        variants={fadeLeftVariant}
        initial="hidden"
        animate="visible"
        style={{
          textAlign: "center",
          marginBottom: "50px" // Increased spacing
        }}
      >
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "var(--gradient-text)", // Use variable
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block"
        }}>EDUCATION</h1>
      </motion.div>
      
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "35px" // Increased gap
        }}
      >
        {education.map((element, index) => {
          return (
            <motion.div 
              key={index}
              variants={itemVariant}
              whileHover={{ // Add hover effect
                y: -5,
                boxShadow: `0 15px 35px ${"var(--shadow-color)"}`
              }}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "center" : "center", // Center items vertically
                background: "var(--card-bg)", // Use variable
                borderRadius: "15px", // More rounded
                overflow: "hidden",
                padding: "30px", // Increased padding
                boxShadow: `0 10px 30px ${"var(--shadow-color)"}`, // Use variable
                transition: "transform 0.3s ease, box-shadow 0.3s ease", // Ensure transition is defined
                textAlign: isMobile ? "center" : "left", // Center text on mobile
              }}
            >
              <div style={{
                width: "100px", // Slightly smaller logo container
                height: "100px",
                flexShrink: 0, // Prevent shrinking
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#ffffff", // Keep white background for logos
                borderRadius: "15px", // Match card rounding
                padding: "10px", // Adjust padding
                marginRight: isMobile ? 0 : "30px", // Increased margin
                marginBottom: isMobile ? "20px" : 0,
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}>
                <img
                  style={{
                    maxWidth: "80%", // Adjust size
                    maxHeight: "80%",
                    objectFit: "contain",
                    filter: "brightness(1)"
                  }}
                  src={element.logo}
                  alt={element.alt}
                />
              </div>
              <div style={{ flexGrow: 1 }}> {/* Allow text content to grow */}
                <h2 style={{
                  fontSize: "1.4rem", // Adjust size
                  fontWeight: "600",
                  marginBottom: "10px", // Increased spacing
                  color: "var(--text-highlight)", // Use variable
                }}>{element.title}</h2>
                <p style={{
                  fontSize: "1rem",
                  lineHeight: "1.7", // Slightly increased line height
                  color: "var(--text-primary)" // Use variable
                }}>{element.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
