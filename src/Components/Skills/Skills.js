import React from "react";
import Education from "../Education/Education";
import Tech from "../Tech/Tech";

export default function Skills() {
  return (
    <main style={{
      padding: "20px 0 60px",
      display: "flex",
      flexDirection: "column",
      gap: "40px"
    }}>
      <Education />
      <Tech />
    </main>
  );
}
