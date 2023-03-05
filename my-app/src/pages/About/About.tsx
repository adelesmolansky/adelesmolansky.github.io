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
                href="https://drive.google.com/file/d/1DYI7iCmaQzN_VM9TynBvt0gdj52IAAbZ/view?usp=sharing"
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
          My name is Adele Smolansky, and I'm an{" "}
          <b>
            undergraduate senior studying Computer Science at Cornell University
          </b>
          . Inspired by my younger sister, who has a severe neurological
          disability called Rett Syndrome, <b>I founded AI-Learners</b> , an
          educational technology company that helps kids with disabilities learn
          math. To better understand how EdTech can support students with
          disabilities, I'm{" "}
          <b>conducting research at two labs at Cornell University</b>: the
          Cornell Future of Learning Lab and the Enhancing Ability Lab at
          Cornell.
        </p>
        <p className="paragraphText">
          Starting Fall of 2023, <b> I will pursue a PhD </b>at the intersection
          of education, computer science, and neuroscience to increase our
          scientific understanding of how children learn and how educational
          technology can improve student learning outcomes. Ultimately, my goal
          is to help all students have equal access to educational resources and
          maximize learning for each student with technology.
        </p>
        <p className="paragraphText">
          With an understanding of the complexities of creating inclusive
          technology, I'm committed to educating other professionals about
          accessibility. I've greatly enjoyed teaching dozens of students and
          professionals about accessibility at Cornell and conferences around
          the country. In graduate school, I hope to raise awareness about the
          challenges that people with disabilities face and educate designers
          and engineers to consider diverse users in product development so
          future technology reflects the needs of all individuals.
        </p>

        <h2 className="mainTextSectionTitle">Research Interests</h2>
        <p className="paragraphText">
          I am broadly interested in researching how children learn and how
          educational technology can improve student learning outcomes. As the
          learning sciences are a highly interdisciplinary field, I seek to use
          mixed methods research and collaborate with many researchers.
        </p>
        <p className="paragraphText">Some of my research questions include:</p>
        <ul className="paragraphText bulletedList">
          <li>
            How does a child's brain develop, and how is this development
            impacted by a cognitive disability such as dyscalculia, dyslexia,
            and ADHD?
          </li>
          <li>
            How can we apply our understanding of how children learn to create
            more effective educational resources?
          </li>
          <li>
            How can we model student learning with artificial intelligence?
          </li>
          <li>
            How can we co-design EdTech resources with students, parents, and
            teachers to optimize engagement and learning outcomes?
          </li>
          <li>
            How can we incorporate a student's cognitive abilities within
            adaptive EdTech learning algorithms to improve personalization?
          </li>
          <li>
            How can we design EdTech to be more accessible for students with
            physical and cognitive disabilities?
          </li>
          <li>
            How can we facilitate more effective interactions between students
            and teachers to improve educational outcomes?
          </li>
        </ul>

        <h2 className="mainTextSectionTitle">Experiences</h2>
        <h3 className="secondHeadingText">AI-Learners</h3>
        <p className="paragraphText">
          AI-Learners is an educational technology company that helps students
          of all abilities learn math. I founded AI-Learners in June 2020 and
          have worked with dozens of students and faculty from Cornell
          University to develop the company. I have also collaborated with
          hundreds of special needs students, educators, and AT specialists.
        </p>

        <h3 className="secondHeadingText">Research</h3>
        <p className="paragraphText">
          This year, I am leading multiple research projects at two research
          labs at Cornell University.
        </p>
        <ul className="paragraphText bulletedList">
          <li>
            <b>Future of Learning Lab</b>, Professor Rene Kizilcec: I'm
            researching how children with cognitive disabilities learn and how
            EdTech can help elementary school students learn math.
          </li>
          <li>
            <b>Enhancing Ability Lab</b>, Professor Shiri Azenkot: I'm
            researching game accessibility for people with physical disabilities
            and the assistive technology ecosystem.
          </li>
        </ul>

        <h3 className="secondHeadingText">Google</h3>
        <p className="paragraphText">
          I worked at Google for two summers as a Software Engineering Intern.
        </p>
        <p className="paragraphText">
          <b>Summer 2021: STEP Intern on the Google Drive Team</b>
          <br></br>During my first summer at Google, I interned with the Google
          Drive team, working on the Google Drive Counter Abuse project. While
          developing interactive and secure web pages for the Drive Abuse team
          using HTML, CSS, and TypeScript, I became a stronger front-end
          programmer. I also improved my Java skills by using Java to work with
          APIs to access data from the backend and set proto values to support
          frontend logic. Since technology should be accessible to all users, I
          improved the accessibility of the web pages and conducted
          accessibility testing using Google's accessibility testing framework.
        </p>
        <p className="paragraphText">
          <b>Summer 2022: SWE Intern on the Android Accessibility Team</b>
          <br></br>During my second internship with Google, I wanted to learn
          more about how Google handled accessibility, so I joined the Android
          Accessibility team. I developed a new Android Accessibility Service to
          help developers make their apps more accessible, which involved
          integrating machine learning models to identify missing accessibility
          properties in data structures. I then used the new service to solve
          Talkback bugs and presented my work to the Android Accessibility team.
        </p>

        <h3 className="secondHeadingText">Teaching Assistant</h3>
        <p className="paragraphText">
          Since my undergraduate junior year, I have been a Teaching Assistant
          for two courses at Cornell University.
        </p>
        <ul className="paragraphText bulletedList">
          <li>NBA 3000: Designing New Ventures</li>
          <li>eLab Student Business Accelerator</li>
        </ul>

        <h1 className="mainTextSectionTitle">Personal</h1>
        <p className="paragraphText">
          Outside of school, research, working, and teaching, I love to
          exercise, travel, and read books. Growing up, I was a Rhythmic Gymnast
          and traveled around the country competing in various competitions.
          Now, I love yoga, weight training, and hiking! I also love to travel.
          You can see the places I have been to in the graphics below:
        </p>
        <h3 className="secondHeadingText">
          The World: visited 25 countries (11.1%)
        </h3>
        <img
          className="worldImg"
          alt="world map"
          src="http://chart.apis.google.com/chart?cht=map:fixed=-70,-180,80,180&chs=450x300&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:9999999999999999999999999&chld=US|TQ|MX|JM|CL|CQ|CA|DO|AW|AR|IL|GB|CH|ES|RU|PT|NO|NL|FR|GR|IS|IT|DK|HR|BA"
          width="450"
          height="300"
        ></img>

        <h3 className="secondHeadingText">
          The United States: visited 21 states (42%)
        </h3>
        <img
          className="worldImg"
          alt="united states map"
          src="http://chart.apis.google.com/chart?cht=t&chtm=usa&chs=440x220&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:999999999999999999999&chld=WIVTTXSCPARINCNYNJNHMNMIMAMDMEKYCAUTILFLCT"
          width="440"
          height="220"
        ></img>
      </div>
    </div>
  );
};

export default About;
