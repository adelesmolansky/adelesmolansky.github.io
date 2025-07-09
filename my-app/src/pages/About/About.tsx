import './About.css';
import '../pages.css';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="aboutPageContainer">
    {/* Div for the left side */}
    <div className="imageSectionContainer">
      <img src="./headshot.jpg" className="AdeleImg" alt="Headshot of Adele" />
      <div className="underImageText">
        <h2 className="decreaseMobileHeight"> Adele Smolansky</h2>
        <p className="decreaseMobileHeight">
          Cornell University 2023: B.S. Computer Science
        </p>
        <p className="decreaseMobileHeight">
          Stanford University 2024: M.A. Educational Technology
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
              href="https://drive.google.com/file/d/1WkXjCIAsUXNn5P98cY-CDJ6b70U1Zw6A/view?usp=sharinghttps://drive.google.com/file/d/1DYI7iCmaQzN_VM9TynBvt0gdj52IAAbZ/view?usp=sharing"
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
        My name is Adele Smolansky, and I'm an entrepreneur, researcher, and
        innovator! I graduated Summa Cum Laude from Cornell University with a
        Bachelors of Science in Computer Science as a Merrill Presidential
        Scholar. After one year of my PhD at Stanford University in Learning
        Sciences and Technology Design (LSTD), I decided to take a leave of
        absence and graduate with a masters from Stanford to work full-time on
        my startup, AI-Learners. I am grateful for the Stanford Graduate
        Fellowship (SGF) and the National Science Fellowship (NSF) for
        supporting my PhD work.
      </p>

      <h2>Professional Experience: AI-Learners (2020 - Present)</h2>
      <p>
        Inspired by my younger sister, who has a severe neurological disability
        called Rett Syndrome, I founded{' '}
        <a href="https://ai-learners.com/">AI-Learners</a>, an educational
        technology platform that helps kids with all abilities learn math,
        literacy, and social skills. Over 1000+ students and 100+ teachers
        across the country are using AI-Learners at school and at home to
        support their learning. We have 35 paying school customers. AI-Learners
        is the first EdTech platform to provide accessible activities games for
        students with diverse physical, cognitive, and behavioral abilities. Our
        work is supported by the the Learning Engineering Tools Competition by
        Schmidt Futures and NewSchools Venture Fund. We also raised $250,000
        from angel investors. Check out the website at{' '}
        <a href="https://ai-learners.com/">ai-learners.com</a> and read more on
        the <Link to="/ai-learners">AI-Learners page</Link>!
      </p>

      <h2>Professional Experience: MoVi (2024-2025)</h2>
      <p>
        To further support the entrepreneurial ecosystem, I am working part time
        as the Head of Product and AI Integration at{' '}
        <a href="https://www.movipartners.com/">MoVi</a>, a venture firm that
        incubates and invests in startups, advises companies, and brings people
        together. I'm helping the company scale their operations with technology
        and develop new products that enhance member experience.
      </p>

      <h2>Professional Experience: Google</h2>
      <p>
        I had the pleasure of working at Google for two summers as a Software
        Engineering Intern, where I met incredible people and became a stronger
        computer scientist.
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
        improved the accessibility of the web pages and conducted accessibility
        testing using Google's accessibility testing framework.
      </p>
      <p>
        <b>Summer 2022: SWE Intern on the Android Accessibility Team</b>
        <br></br>During my second internship with Google, I wanted to learn more
        about how Google handled accessibility, so I joined the Android
        Accessibility team. I developed a new Android Accessibility Service to
        help developers make their apps more accessible, which involved
        integrating machine learning models to identify missing accessibility
        properties in data structures. I then used the new service to solve
        Talkback bugs and presented my work to the Android Accessibility team.
      </p>

      <h2>Teaching Experience</h2>
      <p>
        I worked as a Teaching Assistant for two years at Cornell University. I
        worked with two classes at Cornell University:
      </p>
      <ul className="removeMarginTopFromUL">
        <li>NBA 3000: Designing New Ventures</li>
        <li>eLab Student Business Accelerator</li>
      </ul>

      <h1>Research Experience</h1>
      <p>
        While at Cornell University and Stanford University, I conducted
        research in the Human Computer Interaction (HCI) field. At Cornell, I
        worked with the Future of Learning Lab, advised by Rene Kizilcec, and
        the Enhancing Ability Lab, advised by Shiri Azenkot. At Stanford, I
        worked with Nick Haber at the Autonomous Agents Lab. I conducted various
        studies including systematic reviews, interview studies, survey studies,
        and theoretical analysis, to better understand the complex needs of
        students with disabilities and their supporters. Read more about my{' '}
        <Link to="/research">research projects here</Link>!
      </p>

      <h1>Personal</h1>
      <p>
        Outside of school, research, working, and teaching, I love to swim,
        bike, run, travel, and read books. I compete in various cycling,
        running, and triathlon races! Growing up, I was a rhythmic gymnast, and
        I traveled around the country competing in various competitions.
      </p>
      <img
        className="hikingImg"
        alt="hiking in canada"
        src="./personal.jpeg"
      ></img>
    </div>
  </div>
);

export default About;
