import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Set the active link based on current path
    const path = location.pathname;
    if (path === "/") setActiveLink("Who");
    else if (path === "/projects") setActiveLink("Projects");
    else if (path === "/skills") setActiveLink("Skills");
  }, [location]);

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

  // List of nav items for easier maintenance
  const navItems = [
    { name: "Who", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" }
  ];

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      position: "relative",
      marginBottom: "40px"
    }}>
      <img
        style={{
          width: "220px",
          transition: "all 0.3s ease",
          filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
        }}
        src="./logo_transparent_white.png"
        alt="Juhani Rajalahti logo"
      />
      
      <button 
        style={{
          display: isMobile ? "block" : "none",
          background: "none",
          border: "none",
          color: "white", 
          fontSize: "1.5rem",
          cursor: "pointer",
          zIndex: 10
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
      
      <ul 
        role="presentation" 
        style={{
          display: "flex",
          listStyle: "none",
          margin: 0,
          padding: 0,
          ...(isMobile && {
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            right: 0,
            backgroundColor: "rgba(26, 26, 46, 0.95)",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
            opacity: isMenuOpen ? 1 : 0,
            transition: "all 0.3s ease",
            zIndex: 100
          })
        }}
      >
        {navItems.map((item, index) => (
          <li key={index} style={{
            margin: isMobile ? "15px 0" : "0 20px",
            position: "relative"
          }}>
            <Link 
              to={item.path} 
              style={{
                color: activeLink === item.name ? "#4cc9f0" : "white",
                textDecoration: "none",
                fontSize: "1.2rem",
                fontWeight: 500,
                padding: "8px 0",
                display: "inline-block",
                position: "relative",
                transition: "all 0.3s ease",
                borderBottom: 
                  hoveredLink === item.name || activeLink === item.name
                    ? "2px solid #4cc9f0" 
                    : "2px solid transparent",
              }}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveLink(item.name);
              }}
              onMouseEnter={() => setHoveredLink(item.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
