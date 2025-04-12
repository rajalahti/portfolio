import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const photoPath = "https://portfolio-images-juhani.s3.eu-north-1.amazonaws.com/";

const projects = [
  {
    name: "Fennia.fi",
    type: "Work",
    image: photoPath + "fenniaFI.jpg",
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
    image: photoPath + "kompassi.jpg",
    live: "",
    git: "",
    description: `We developed a front end insurance sales UI for Fennia's account managers with
    Rohea, a software company based in Helsinki. I've been working on this project since 
    October 2015 in a project manager and business analyst role.`,
    tech: "React, MongoDB, PACE-platform from Rohea",
  },
  {
    name: "Espoo Today",
    type: "For fun",
    image: photoPath + "espoo-today.jpg",
    live: "https://espoo-today.rajalahti.me",
    git: "",
    description: `Weather and current events app for Espoo, Finland. I used multiple open API's 
    for this project: Open weather map API, Helsinki's event API and real-time 
    water temperature measurements done by Forum Virium Helsinki using IOT devices.`,
    tech:
      "React, Material UI, AWS",
  },
  {
    name: "Satukone - AI Story Generator",
    type: "For fun",
    image: photoPath + "fantasy.jpg",
    live: "https://satukone.rajalahti.me",
    git: "",
    description: `A story generator app which uses GPT-3 to generate stories. 
    I used DeepL's API to translate the stories to Finnish and AWS Polly to generate audio files from the stories.`,
    tech:
      "React, Material UI, GTP3, DeepL-translator, AWS Polly",
  },
  {
    name: "Random Traveller",
    type: "For fun",
    image: photoPath + "random_traveller.jpg",
    live: "http://randomtraveller.surge.sh",
    git: "",
    description: `I built a small React app which randomly pics a location from Europe, US, Finland, 
    Thailand or Japan and displays a street view from that location. Liked locations are 
    saved to DynamoDB and the user can browse and like those as well.`,
    tech:
      "React, Material UI, AWS API Gateway, AWS Lambda, DynamoDB, GoogleMaps, HERE",
  },
  {
    name: "Investment Calculator",
    type: "For fun",
    image: photoPath + "investment_calc.jpg",
    live: "http://investmentcalculator.s3-website.eu-north-1.amazonaws.com/",
    git: "",
    description: `Investing in index funds and ETFs has been my hobby for 10 years now. I wanted
    to build a simple investment calculator and display the end results using ChartsJS.`,
    tech: "React, ChartsJS, Material UI, AWS APIGW, AWS Lambda",
  },
  {
    name: "Wine Club",
    type: "For fun",
    image: photoPath + "wine_club.jpg",
    live: "http://wine-club-demo.surge.sh",
    git: "",
    description: `This was a training project on CodeCademy. I practiced building responsive 
    websites using CSS-grid.`,
    tech: "HTML, CSS",
  },
];

export default function Project() {
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
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };
  
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <main style={{ padding: "20px 0 60px" }}>
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: "50px", textAlign: "center" }}
      >
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          background: "var(--gradient-text)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block"
        }}>PROJECTS</h1>
      </motion.div>
      
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "35px",
          width: "100%"
        }}
      >
        {projects.map((project, index) => (
          <motion.section 
            key={index}
            variants={itemVariant}
            style={{
              display: "flex",
              flexDirection: "column",
              background: "var(--card-bg)",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: `0 10px 30px ${"var(--shadow-color)"}`,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            whileHover={{ 
              y: -8,
              boxShadow: `0 18px 40px ${"var(--shadow-color)"}`
            }}
          >
            <div style={{padding: "25px 30px 0"}}>
              <h2 style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "12px",
                color: "var(--text-highlight)"
              }}>
                {project.name}
              </h2>
              <span style={{
                display: "inline-block",
                padding: "5px 12px",
                borderRadius: "6px",
                fontSize: "0.85rem",
                fontWeight: "500",
                backgroundColor: "var(--primary-accent)",
                color: "var(--bg-color)",
                marginBottom: "20px"
              }}>
                {project.type}
              </span>
            </div>
            
            <div style={{
              width: "100%",
              height: "220px",
              overflow: "hidden"
            }}>
              <motion.img 
                src={project.image} 
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                whileHover={{ 
                  scale: 1.05
                }}
                transition={{ duration: 0.4 }}
              />
            </div>
            
            <div style={{padding: "25px 30px", flex: "1", display: "flex", flexDirection: "column"}}>
              <h3 style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "10px",
                color: "var(--text-highlight)"
              }}>
                Description
              </h3>
              <p style={{
                fontSize: "0.95rem",
                lineHeight: "1.7",
                color: "var(--text-primary)",
                marginBottom: "25px",
                flexGrow: 1
              }}>
                {project.description}
              </p>
              
              <h3 style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "10px",
                color: "var(--text-highlight)"
              }}>
                Tech
              </h3>
              <p style={{
                color: "var(--primary-accent)",
                fontSize: "0.9rem",
                marginBottom: "25px",
                fontStyle: "italic"
              }}>
                {project.tech}
              </p>
              
              {project.live && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    border: "2px solid var(--primary-accent)",
                    borderRadius: "8px",
                    color: "var(--primary-accent)",
                    textDecoration: "none",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                  }}
                  whileHover={{ 
                    backgroundColor: "var(--primary-accent)",
                    color: "var(--bg-color)"
                  }}
                >
                  Live version <FiExternalLink style={{marginLeft: "8px"}} />
                </motion.a>
              )}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </main>
  );
}
