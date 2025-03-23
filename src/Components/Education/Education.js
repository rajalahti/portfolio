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
          marginBottom: "40px"
        }}
      >
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "linear-gradient(90deg, #4cc9f0, #7209b7)",
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
          gap: "30px"
        }}
      >
        {education.map((element, index) => {
          return (
            <motion.div 
              key={index}
              variants={itemVariant}
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                overflow: "hidden",
                padding: "25px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease",
              }}
            >
              <div style={{
                width: "120px",
                height: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "12px",
                padding: "15px",
                marginRight: isMobile ? 0 : "25px",
                marginBottom: isMobile ? "20px" : 0,
                alignSelf: isMobile ? "center" : "flex-start",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
              }}>
                <img
                  style={{
                    maxWidth: "85%",
                    maxHeight: "85%",
                    objectFit: "contain",
                    filter: "brightness(1)"
                  }}
                  src={element.logo}
                  alt={element.alt}
                />
              </div>
              <div>
                <h2 style={{
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  marginBottom: "8px",
                  color: "#f8f9fa",
                  textAlign: isMobile ? "center" : "left"
                }}>{element.title}</h2>
                <p style={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  color: "#e0e0e0"
                }}>{element.text}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
