import React from "react";

import "./About.css";
import "../pages.css";

const About = () => {
  return (
    <div className="aboutPageContainer">
      {/* Div for the left side */}
      <div className="imageSectionContainer">
        <img
          src="./headshot.jpg"
          className="AdeleImg"
          alt="Headshot of Adele"
        />
        <div className="underImageText">
          <h2 className="decreaseMobileHeight"> Adele Smolansky</h2>
          <p className="decreaseMobileHeight">B.S Computer Science</p>
          <p className="decreaseMobileHeight">Cornell University</p>
          <p className="decreaseMobileHeight">
            <a
              target="_blank"
              href="mailto:as2953@cornell.edu"
              rel="noreferrer"
              className="email"
            >
              as2953@cornell.edu
            </a>
          </p>

          {/* Links */}
          <div className="linksContainer">
            <p className="decreaseMobileHeight">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/adelesmolansky/"
                rel="noreferrer"
                className="profileLink"
              >
                LinkedIn
              </a>
            </p>
            <p className="decreaseMobileHeight">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1bPSt2wZQelBsU3cUYUX5D6CjtKrGmzS_/view?usp=sharing"
                rel="noreferrer"
                className="profileLink"
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="mainTextContainer">
        <h1 className="mainTextSectionTitle">About</h1>
        <p className="paragraphText">
          Adele is a senior studying Computer Science at Cornell. She founded
          AI-Learners in June 2020 to help her sister and many other kids with
          disabilities learn math. This year, she is doing research at two labs
          at Cornell University to explore scientific methods of adaptive
          learning. Adele is pursing a PhD in accessibility and education to
          continue her reseach in accessible educational technology. Ultimately,
          her goal is to help all students have equal access to educational
          resources and to maximize learning for each student with technology.
        </p>

        <h2 className="mainTextSectionTitle">Interests</h2>
        <ul className="paragraphText">
          <li>Early math education and cognitive development</li>
          <li>Educational technology</li>
          <li>Website accessibility</li>
          <li>Univeristy accessibility curriculum development</li>
        </ul>

        <h2 className="mainTextSectionTitle">Experiences</h2>
        <h3 className="secondHeadingText">AI-Learners</h3>
        <p className="paragraphText">
          Adele founded AI-Learners in June 2020 and has worked with dozens of
          students and faculty from Cornell University to develop the company.
          AI-Learners is an educational technology company that helps students
          of all abilities learn math.
        </p>

        <h3 className="secondHeadingText">Google</h3>
        <p className="paragraphText">
          Adele worked at Google for two summers as a Software Engineer.
        </p>
        <ul className="paragraphText bulletedList">
          <li>Summer 2021: STEP Intern on the Google Drive Team</li>
          <li>Summer 2022: SWE Intern on the Android Accessibility Team</li>
        </ul>

        <h3 className="secondHeadingText">Research</h3>
        <p className="paragraphText">
          Adele is leading multiple research projects across two research labs
          at Cornell University.
        </p>
        <ul className="paragraphText bulletedList">
          <li>Future of Learning Lab, Professor Rene Kizilcec</li>
          <li>Enhancing Ability Lab, Professor Shiri Azenkot</li>
        </ul>

        <h3 className="secondHeadingText">Teaching Assistant</h3>
        <p className="paragraphText">
          Since her undergraduate junior year, Adele has been a Teaching
          Assistant for two courses at Cornell University
        </p>
        <ul className="paragraphText bulletedList">
          <li>NBA 3000: Designing New Ventures</li>
          <li>eLab Student Business Accelerator</li>
        </ul>

        <h1 className="mainTextSectionTitle">Personal</h1>
        <p className="paragraphText">
          Outside of school, research, working, and teaching, I love to exercise, 
          travel, and read books. I was a competitive rythmic gymnast growing up. 
          Now, I love yoga and weight training! I also love to travel. You can 
          see the places I have been to in the graphics below:
        </p>
        <h3 className="secondHeadingText">The World: visited 25 countries (11.1%)</h3>
        <img className="worldImg" alt="world map" src="http://chart.apis.google.com/chart?cht=map:fixed=-70,-180,80,180&chs=450x300&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:9999999999999999999999999&chld=US|TQ|MX|JM|CL|CQ|CA|DO|AW|AR|IL|GB|CH|ES|RU|PT|NO|NL|FR|GR|IS|IT|DK|HR|BA" width="450" height="300" ></img>

        <h3 className="secondHeadingText">The United States: visited 21 states (42%)</h3>
        <img className="worldImg" alt="united states map" src="http://chart.apis.google.com/chart?cht=t&chtm=usa&chs=440x220&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:999999999999999999999&chld=WIVTTXSCPARINCNYNJNHMNMIMAMDMEKYCAUTILFLCT" width="440" height="220" ></img>
      </div>
    </div>
  );
};

export default About;
