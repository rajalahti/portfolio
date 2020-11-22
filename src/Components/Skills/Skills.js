import React from "react";
import Education from "../Education/Education";
import Tech from "../Tech/Tech";
import "./Skills.css";

export default function Skills() {
  return (
    <main className="skills_grid">
        <Education />
        <Tech />
    </main>
  );
}
