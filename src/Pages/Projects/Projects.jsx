import { useState } from "react";
import ProjectTemplate from "../../Components/ProjectTemplate/ProjectTemplate";
import "./Projects.scss";

import adminProject from "../../assets/admin-dashboard.png";
import instagramProject from "../../assets/instagram-2.png";
import nftProject from "../../assets/nft-portfolio.png";
import gamingProject from "../../assets/react-gaming.png";
import portfolioProject from "../../assets/reactportfolio.png";

const Projects = () => {
  const [tags] = useState(["React", "CSS/SCSS", "NodeJS", "ExpressJS", "MySql", "More..."]);

  return (
    <div className="projects-wrapper">
      <div></div>

      <ProjectTemplate
        projectName="Admin Dashboard"
        projectDesc="Project Description"
        tags={tags}
        img={adminProject}
      />

      <ProjectTemplate
        projectName="Instagram 2.0"
        projectDesc="Project Description"
        tags={tags}
        img={instagramProject}
      />

      <ProjectTemplate
        projectName="NFT-Portfolio"
        projectDesc="Project Description"
        tags={tags}
        img={nftProject}
      />

      <ProjectTemplate
        projectName="Gaming"
        projectDesc="Project Description"
        tags={tags}
        img={gamingProject}
      />

      <ProjectTemplate
        projectName="Portfolio"
        projectDesc="Project Description"
        tags={tags}
        img={portfolioProject}
      />

      <div></div>
    </div>
  );
};

export default Projects;
