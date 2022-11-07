import React from "react";

import "./AiLearners.css";
import "../pages.css";
import { useMediaQuery } from "react-responsive";

const AiLearners = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 68rem)" });
  const isMobile = useMediaQuery({ query: "(max-width: 35rem)" });

  const moneyText = () => {
    return (
      <span>
        To date, AI-Learners has raised $40,000 in non-dilutive funding through
        university grant competitions. We are currently seeking additional
        funding to help us expand our impact. Please contact Adele if you are
        interested in joining us on our journey to helping students with
        disabilities learn math.
      </span>
    );
  };

  const LaraImg = () => {
    return <img src="./lara.png" className="LaraImg" alt="Young girl" />;
  };

  return (
    <div className="pageContainer">
      <a
        target="_blank"
        href="https://www.ai-learners.com"
        rel="noreferrer"
        className="visitWebsite"
      >
        <img src="./logo.jpg" className="logo" alt="AI-Learners logo" />
      </a>

      <h1 className="mainTextSectionTitle">About</h1>

      <div className="aboutContainer">
        <p className="paragraphText aboutText">
          <b>
            {" "}
            AI-Learners makes learning math accessible and engaging for students
            with cognitive, physical, and behavioral disabilities through
            personalized computer games and analytics.
          </b>
          <br></br>
          <br></br>
          Adele Smolansky was inspired by her younger sister Lara, who has a
          severe neurological disability called Rett Syndrome, to create
          AI-Learners. In the summer of 2020, Adele developed the first
          iteration of AI-Learners with a small team of developers. Since then,
          the company has grown into a team of 15+ student interns and 10+
          professional advisors who are united by the company values of
          teamwork, continuous learning, and a drive to serve students with
          disabilities. AI-Learners now has 70+ math games available across
          grade levels PreK-2nd grade, and over 100 parents have created
          personal accounts for their children to practice math at home.
          <br></br>
          <br></br>
          {!isTablet && moneyText()}
        </p>

        {!isMobile && LaraImg()}
      </div>

      {/* Handle screen sizes */}
      {isMobile && LaraImg()}
      <p>{isTablet && moneyText()}</p>

      <h1 className="mainTextSectionTitle">Team</h1>

      <p className="paragraphText">
        Adele loves collaborating with other people to develop AI-Learners.
        Since starting AI-Learners in summer 2020, she has worked with almost
        100 different Cornell students. Adele created an Engineering Project
        team at Cornell to enable more students to join the team. Not only does
        she help all students developing their coding, design, and business
        skills, but she also teaches all team members about accessibility,
        cognitive functions, pedagogical theories, and more.{" "}
      </p>
      <p>
        The AI-Learners team is divided into 3 subteams: software development,
        business, and design. Adele also worked with multiple through the
        Cornell Future of Learning Lab and Enhancing Ability lab. All students
        are passionate about helping kids with disabilities learn math.
      </p>
      <img
        src="./team.jpg"
        className="teamImg"
        alt="Group of Cornell students"
      />
    </div>
  );
};

export default AiLearners;
