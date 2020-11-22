import React from "react";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejs,
  DiGithubBadge,
  DiAws,
  DiBitbucket,
  DiVisualstudio,
} from "react-icons/di";

const styles = {
  tech_container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 50
  },
  tech_icon: {
    width: '33%',
    marginBottom: 30
  }
}

export default function Tech() {
  return (
    <section id="tech_section">
      <div className="title">
        <h1>SKILLS</h1>
        </div>
        <div style={styles.tech_container}>
          <DiHtml5
            style={styles.tech_icon}
            color="#dc4d25"
            size="5em"
            title="HTML5"
          />
          <DiCss3
            style={styles.tech_icon}
            color="#0079c0"
            size="5em"
            title="CSS3"
          />
          <DiJavascript1
            style={styles.tech_icon}
            color="#ddb830"
            size="5em"
            title="JavaScript"
          />
          <DiReact
            style={styles.tech_icon}
            color="#61dbfb"
            size="5em"
            title="React"
          />
          <DiNodejs
            style={styles.tech_icon}
            color="#689f63"
            size="5em"
            title="NodeJS"
          />
          <DiGithubBadge
            style={styles.tech_icon}
            color="black"
            size="5em"
            title="GitHub"
          />
          <DiAws
            style={styles.tech_icon}
            color="#f79400"
            size="5em"
            title="AWS (ApiGW, Lambda, DynamoDB etc.)"
          />
          <DiBitbucket
            style={styles.tech_icon}
            color="#194e7e"
            size="5em"
            title="BitBucket"
          />
          <DiVisualstudio
            style={styles.tech_icon}
            color="#2489ca"
            size="5em"
            title="Visual Studio"
          />
        </div>
      
    </section>
  );
}
