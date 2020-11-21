import React from "react";
import { DiReact, DiHtml5, DiCss3, DiJavascript1, DiNodejs, DiGithubBadge, DiAws, DiBitbucket, DiVisualstudio  } from "react-icons/di";

export default function Tech() {
  return (
    <section>
      <div className="title">
        <h1>SKILLS</h1>
        <DiHtml5 color="lightblue" size="5em" title="HTML5" />
        <DiCss3 color="lightblue" size="5em" title="CSS3" />
        <DiJavascript1 color="lightblue" size="5em" title="JavaScript" />
        <DiReact color="lightblue" size="5em" title="React" />
        <DiNodejs color="lightblue" size="5em" title="NodeJS" />
        <DiGithubBadge color="lightblue" size="5em" title="GitHub" />
        <DiAws color="lightblue" size="5em" title="AWS (ApiGW, Lambda, DynamoDB etc.)" />
        <DiBitbucket color="lightblue" size="5em" title="BitBucket" />
        <DiVisualstudio color="lightblue" size="5em" title="Visual Studio" />
        
      </div>
    </section>
  );
}
