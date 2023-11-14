import './About.css';
import '../pages.css';
import { Link } from 'react-router-dom';

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
          <p className="decreaseMobileHeight">
            Cornell University 2023: B.S. Computer Science
          </p>
          <p className="decreaseMobileHeight">
            Stanford University PhD Candidate: Learning Sciences and Technology
            Design
          </p>
          <p className="decreaseMobileHeight">AI-Learners Founder and CEO</p>
          <p className="decreaseMobileHeight">
            <a
              target="_blank"
              href="mailto:adele@ai-learners.com"
              rel="noreferrer"
              className="email"
            >
              adele@ai-learners.com
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
        <h1>About</h1>
        <p>
          My name is Adele Smolansky, and I'm an entrepreneur and researcher! I
          graduated Summa Cum Laude from Cornell University with a Bachelors of
          Science in Computer Science as a Merrill Presidential Scholar. I'm now
          pursuing a PhD at Stanford University in Learning Sciences and
          Technology Design (LSTD), supported by the Stanford Graduate
          Fellowship (SGF) and the National Science Fellowship (NSF). I am also
          the student representative of the Society for Learning Analytics
          Research <a href="https://www.solaresearch.org/">(SoLAR)</a> Executive
          Committee.
        </p>
        <p>
          Inspired by my younger sister, who has a severe neurological
          disability called Rett Syndrome, I founded{' '}
          <a href="https://ai-learners.com/">AI-Learners</a>, an educational
          technology platform that helps kids with all abilities learn math.
          Students all across the country are using AI-Learners with their
          parents and teachers to learn mathematics. AI-Learners is the first
          EdTech platform to provide accessible math games for students with
          diverse physical, cognitive, and behavioral abilities. We recently won
          the Learning Engineering Tools Competition 2022 by Schmidt Futures!
          Check out the website at{' '}
          <a href="https://ai-learners.com/">www.ai-Learners.com</a> and read
          more on the <Link to="/ai-learners">AI-Learners page</Link>!
        </p>
        <p>
          To support AI-Learners and other entrepreneurs and researchers, I'm
          committing to advancing the scientific understanding of how EdTech can
          help students with disabilities. At Cornell and during this summer,
          I've been working at the Future of Learning Lab, advised by Rene
          Kizilcec, and the Enhancing Ability Lab, advised by Shiri Azenkot.
          I've conducted various studies including systematic reviews, interview
          studies, survey studies, and theoretical analysis, to better
          understand the complex needs of students with disabilities and their
          supporters. Read more about my{' '}
          <Link to="/research">research projects here</Link>!
        </p>

        <p>
          At Stanford, I will continue exploring the challenges that students
          and their supporters face, while also exploring new AI solutions. I'm
          looking forward to joining the Autonomous Agents Lab, advised by Nick
          Haber, and the Landay Lab, advised by James Landay. I will also work
          with Jason Yeatman and Maneesh Agrawala.
        </p>

        <h2>Professional Experience: Google</h2>
        <p>
          I had the pleasure of working at Google for two summers as a Software
          Engineering Intern, where I met incredible people and became a
          stronger computer scientist.
        </p>
        <p>
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
        <p>
          <b>Summer 2022: SWE Intern on the Android Accessibility Team</b>
          <br></br>During my second internship with Google, I wanted to learn
          more about how Google handled accessibility, so I joined the Android
          Accessibility team. I developed a new Android Accessibility Service to
          help developers make their apps more accessible, which involved
          integrating machine learning models to identify missing accessibility
          properties in data structures. I then used the new service to solve
          Talkback bugs and presented my work to the Android Accessibility team.
        </p>

        <h2>Teaching Experience</h2>
        <p>
          I worked as a Teaching Assistant for two years at Cornell University.
          I worked with two classes at Cornell University:
        </p>
        <ul className="removeMarginTopFromUL">
          <li>NBA 3000: Designing New Ventures</li>
          <li>eLab Student Business Accelerator</li>
        </ul>

        <h1>Personal</h1>
        <p>
          Outside of school, research, working, and teaching, I love to
          exercise, travel, and read books. Growing up, I was a rhythmic
          gymnast, and I traveled around the country competing in various
          competitions. Now, I love yoga, weight training, and hiking! I also
          love to travel. You can see the places I have been to in the graphics
          below:
        </p>
        <h3>The World: visited 25 countries (11.1%)</h3>
        <img
          className="worldImg"
          alt="world map"
          src="http://chart.apis.google.com/chart?cht=map:fixed=-70,-180,80,180&chs=450x300&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:9999999999999999999999999&chld=US|TQ|MX|JM|CL|CQ|CA|DO|AW|AR|IL|GB|CH|ES|RU|PT|NO|NL|FR|GR|IS|IT|DK|HR|BA"
          width="450"
          height="300"
        ></img>

        <h3>The United States: visited 24 states (48%)</h3>
        <img
          className="worldImg"
          alt="united states map"
          src="http://chart.apis.google.com/chart?cht=t&chtm=usa&chs=440x220&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:999999999999999999999999&chld=WIVTTXSCPARINCNYNJNHMNMIMAMDMEKYCAUTILFLCTVAWAGA"
          width="440"
          height="220"
        ></img>
      </div>
    </div>
  );
};

export default About;
