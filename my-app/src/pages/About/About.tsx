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
            Cornell University 2023: BS. Computer Science
          </p>
          <p className="decreaseMobileHeight">
            Stanford University 2024: Masters Educational Technology
          </p>
          <p className="decreaseMobileHeight">
            Stanford University PhD - On Leave
          </p>
          <p className="decreaseMobileHeight">AI-Learners Founder and CEO</p>

          {/* Links */}
          <div className="linksContainer">
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
          Science in Computer Science as a Merrill Presidential Scholar. After
          one year of my PhD at Stanford University in Learning Sciences and
          Technology Design (LSTD), I decided to take a leave of absence and
          graduate with a masters from Stanford. I am grateful for the Stanford
          Graduate Fellowship (SGF) and the National Science Fellowship (NSF)
          for supporting my PhD work.
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
          <a href="https://ai-learners.com/">ai-learners.com</a> and read more
          on the <Link to="/ai-learners">AI-Learners page</Link>!
        </p>
        <p>
          To support AI-Learners and other entrepreneurs and researchers, I'm
          committing to advancing the scientific understanding of how EdTech can
          help students with disabilities. At Cornell University, I worked with
          the Future of Learning Lab, advised by Rene Kizilcec, and the
          Enhancing Ability Lab, advised by Shiri Azenkot. At Stanford, I had
          the pleasure of working with Nick Haber for one year to explore how AI
          can enhance technology solutions for students with disabilities. I've
          conducted various studies including systematic reviews, interview
          studies, survey studies, and theoretical analysis, to better
          understand the complex needs of students with disabilities and their
          supporters. Read more about my{' '}
          <Link to="/research">research projects here</Link>!
        </p>

        <h2>Professional Experience: MoVi (current)</h2>
        <p>
          To further support the entrepreneurial ecosystem, I am working part
          time as the Head of Product and AI Integration at{' '}
          <a href="https://www.movipartners.com/">MoVi</a>, a venture firm that
          incubates and invests in startups, advises companies, and brings
          people together. I'm helping the company scale their operations with
          technology and develop new products that enhance member experience.
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
          competitions. I've also competed in several road cycling events, and
          I'm now training for a marathon.
        </p>
        <img
          className="hikingImg"
          alt="hiking in canada"
          src="./personal.jpeg"
        ></img>
      </div>
    </div>
  );
};

export default About;
