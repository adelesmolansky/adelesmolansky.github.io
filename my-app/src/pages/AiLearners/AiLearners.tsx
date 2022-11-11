import React from "react";

import "./AiLearners.css";
import "../pages.css";
import { useMediaQuery } from "react-responsive";

const AiLearners = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 35rem)" });

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
        {/* Put the image at the start if we are not on mobile */}
        {!isMobile && LaraImg()}
        <p className="paragraphText aboutText">
          <b>
            {" "}
            AI-Learners makes learning math accessible and engaging for students
            with cognitive, physical, and behavioral disabilities through
            personalized computer games and analytics.
          </b>
          {/* Put the image in the middle of the text if we are on mobile */}
          {isMobile && LaraImg()}
          <br></br>
          <br></br>
          Growing up, I watched my younger sister Lara, who has a severe
          neurological disability called Rett Syndrome, struggle to learn math.
          Lara inspired me to create AI-Learners and help my sister and many
          other students with disabilities. In the summer of 2020, I developed
          the first iteration of AI-Learners with a small team of developers
          from Cornell University. Since then, the company has grown into a team
          of 15+ student interns and 10+ professional advisors who are united by
          our company values of teamwork, continuous learning, and a drive to
          serve students with disabilities. AI-Learners now has 70+ math games
          available across grade levels PreK-2nd grade, and over 100 parents
          have created personal accounts for their children to practice math at
          home.
          <br></br>
          <br></br>
          To date, AI-Learners has raised $40,000 in non-dilutive funding
          through university grant competitions. We are currently seeking
          additional funding to help us expand our impact. Please contact me if
          you are interested in joining us on our journey to helping students
          with disabilities learn math.
        </p>
      </div>

      <h1 className="mainTextSectionTitle">Team</h1>

      <p className="paragraphText">
        As team work is one our our company values and my (hidden) middle name,
        I love collaborating with other people. Collaboration has been the key
        to success at AI-Learners. Since starting AI-Learners in summer 2020, I
        have worked with almost 100 different Cornell students. In 2021, I
        created an Engineering Project team at Cornell to enable more students
        to join the team. As every student contributed to the success of
        AI-Learners and develops their coding, design, and business skills, I
        get the opportunity to teach all team members about accessibility,
        cognitive functions, pedagogical theories, and more. Each team member is
        now more prepared to graduate college and bring inclusive practices to
        their next job.
      </p>
      <p>
        The AI-Learners team is divided into 3 subteams: software development,
        business, and design. I lead weekly full team meetings and two sub-team
        work sessions (6 total) per week. All students are passionate about
        helping kids with disabilities learn math! I am also working with the
        Cornell Future of Learning Lab and Enhancing Ability lab and applying
        insights on education and accessible practices to improve the
        AI-Learners math games.
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
