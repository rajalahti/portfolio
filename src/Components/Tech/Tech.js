import React, { useState, useEffect } from "react";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejsSmall,
  DiGithubBadge,
  DiAws,
  DiBitbucket,
  DiVisualstudio,
} from "react-icons/di";
import Fade from "react-reveal/Fade";

export default function Tech() {
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

  const techItems = [
    { Icon: DiHtml5, color: "#e44d26", title: "HTML5" },
    { Icon: DiCss3, color: "#1572b6", title: "CSS3" },
    { Icon: DiJavascript1, color: "#f7df1e", title: "JavaScript" },
    { Icon: DiReact, color: "#61dafb", title: "React" },
    { Icon: DiNodejsSmall, color: "#689f63", title: "NodeJS" },
    { Icon: DiGithubBadge, color: "#f5f5f5", title: "GitHub" },
    { Icon: DiAws, color: "#ff9900", title: "AWS"},
    { Icon: DiBitbucket, color: "#0052cc", title: "BitBucket" },
    { Icon: DiVisualstudio, color: "#007acc", title: "Visual Studio" },
  ];

  return (
    <section style={{ width: "100%" }}>
      <Fade right>
        <div style={{
          textAlign: "center",
          marginBottom: "40px"
        }}>
          <h1 style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            background: "linear-gradient(90deg, #4cc9f0, #7209b7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            display: "inline-block"
          }}>SKILLS</h1>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile 
            ? "repeat(auto-fill, minmax(120px, 1fr))" 
            : "repeat(auto-fill, minmax(150px, 1fr))",
          gap: isMobile ? "15px" : "25px",
          padding: "20px 0"
        }}>
          {techItems.map((item, index) => (
            <div 
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: isMobile ? "15px" : "20px",
                background: "rgba(255, 255, 255, 0.05)",
                borderRadius: "12px",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                cursor: "default",
                "&:hover": {
                  transform: "translateY(-10px)",
                  background: "rgba(255, 255, 255, 0.1)"
                }
              }}
            >
              <item.Icon 
                size={isMobile ? "3em" : "4em"} 
                color={item.color}
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))",
                  margin: "0 0 15px 0"
                }}
              />
              <span style={{
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                fontWeight: "500",
                color: "#f8f9fa",
                textAlign: "center"
              }}>
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
