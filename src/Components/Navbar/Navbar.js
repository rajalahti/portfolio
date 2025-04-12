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
      marginBottom: "40px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)" // Add subtle separator
    }}>
      <img
        style={{
          width: "200px", // Slightly smaller logo
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
          color: "var(--text-highlight)", // Use variable
          fontSize: "1.8rem", // Larger icon
          cursor: "pointer",
          zIndex: 10,
          padding: "5px" // Add padding for easier clicking
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
            top: "100%", // Position below the navbar
            right: 0,
            width: "250px", // Fixed width for mobile menu
            backgroundColor: "rgba(15, 15, 26, 0.98)", // Use darker bg color with high opacity
            padding: "30px", // More padding
            borderRadius: "0 0 8px 8px", // Round bottom corners
            boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)", // Stronger shadow
            backdropFilter: "blur(5px)", // Subtle blur effect
            WebkitBackdropFilter: "blur(5px)", // For Safari
            transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)", // Slide down animation
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? "visible" : "hidden", // Use visibility for better accessibility
            transition: "all 0.3s ease-out", // Smoother transition
            zIndex: 100
          })
        }}
      >
        {navItems.map((item, index) => (
          <li key={index} style={{
            margin: isMobile ? "10px 0" : "0 25px", // Adjust spacing
            position: "relative"
          }}>
            <Link 
              to={item.path} 
              style={{
                color: activeLink === item.name ? "var(--primary-accent)" : "var(--text-highlight)", // Use variables
                textDecoration: "none",
                fontSize: "1.1rem", // Slightly smaller font
                fontWeight: 500,
                padding: "8px 0",
                display: "inline-block",
                position: "relative",
                transition: "all 0.3s ease",
                borderBottom: "2px solid transparent", // Prepare for hover effect
                ...( (hoveredLink === item.name || activeLink === item.name) && { // Combine hover/active
                  color: "var(--primary-accent)",
                  borderBottomColor: "var(--primary-accent)"
                })
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
