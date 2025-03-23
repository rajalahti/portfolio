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

  const styles = {
    container: {
      padding: "20px 0 60px",
    },
    title: {
      marginBottom: "40px",
      textAlign: "center"
    },
    heading: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #4cc9f0, #7209b7)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block"
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
      gap: "30px",
      width: "100%",
      "@media (max-width: 768px)": {
        gridTemplateColumns: "1fr"
      }
    },
    projectCard: {
      display: "flex",
      flexDirection: "column",
      background: "rgba(255, 255, 255, 0.05)",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)"
      }
    },
    cardHeader: {
      padding: "20px 25px 0",
    },
    cardTitle: {
      fontSize: "1.6rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#f8f9fa"
    },
    cardType: {
      display: "inline-block",
      padding: "4px 10px",
      borderRadius: "4px",
      fontSize: "0.8rem",
      fontWeight: "500",
      backgroundColor: "#4cc9f0",
      color: "#000",
      marginBottom: "15px"
    },
    imageContainer: {
      width: "100%",
      height: "250px",
      overflow: "hidden"
    },
    projectImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease"
    },
    cardContent: {
      padding: "20px 25px",
      flex: "1"
    },
    sectionTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#e0e0e0"
    },
    description: {
      fontSize: "0.95rem",
      lineHeight: "1.6",
      color: "#bbbbbb",
      marginBottom: "20px"
    },
    techStack: {
      color: "#8ebfff",
      fontSize: "0.9rem",
      marginBottom: "20px"
    },
    linkButton: {
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 16px",
      backgroundColor: "transparent",
      border: "1px solid #4cc9f0",
      borderRadius: "4px",
      color: "#4cc9f0",
      textDecoration: "none",
      fontSize: "0.9rem",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#4cc9f0",
        color: "#000"
      }
    },
    linkIcon: {
      marginLeft: "6px"
    }
  };

  return (
    <main style={styles.container}>
      <motion.div 
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        style={styles.title}
      >
        <h1 style={styles.heading}>PROJECTS</h1>
      </motion.div>
      
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(450px, 1fr))",
          gap: "30px",
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
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)"
            }}
          >
            <div style={{padding: "20px 25px 0"}}>
              <h2 style={{
                fontSize: "1.6rem",
                fontWeight: "600",
                marginBottom: "10px",
                color: "#f8f9fa"
              }}>
                {project.name}
              </h2>
              <span style={{
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "4px",
                fontSize: "0.8rem",
                fontWeight: "500",
                backgroundColor: "#4cc9f0",
                color: "#000",
                marginBottom: "15px"
              }}>
                {project.type}
              </span>
            </div>
            
            <div style={{
              width: "100%",
              height: "250px",
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
                transition={{ duration: 0.5 }}
              />
            </div>
            
            <div style={{padding: "20px 25px", flex: "1"}}>
              <h3 style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "8px",
                color: "#e0e0e0"
              }}>
                Description
              </h3>
              <p style={{
                fontSize: "0.95rem",
                lineHeight: "1.6",
                color: "#bbbbbb",
                marginBottom: "20px"
              }}>
                {project.description}
              </p>
              
              <h3 style={{
                fontSize: "1.1rem",
                fontWeight: "600",
                marginBottom: "8px",
                color: "#e0e0e0"
              }}>
                Tech
              </h3>
              <p style={{
                color: "#8ebfff",
                fontSize: "0.9rem",
                marginBottom: "20px"
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
                    padding: "8px 16px",
                    backgroundColor: "transparent",
                    border: "1px solid #4cc9f0",
                    borderRadius: "4px",
                    color: "#4cc9f0",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                  }}
                  whileHover={{ 
                    backgroundColor: "#4cc9f0",
                    color: "#000"
                  }}
                >
                  Live version <FiExternalLink style={{marginLeft: "6px"}} />
                </motion.a>
              )}
            </div>
          </motion.section>
        ))}
      </motion.div>
    </main>
  );
}
