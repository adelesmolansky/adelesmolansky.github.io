import './AiLearners.css';
import '../pages.css';
import { FeaturedProject, FeaturedProjectsData } from './FeaturedProjects';

const AiLearners = () => {
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

      <div className="aboutContainer">
        <div className="aboutText">
          <p>
            <strong>
              <a
                href="https://www.ai-learners.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                AI-Learners
              </a>
            </strong>{' '}
            is a digital learning platform I founded to make early math and
            literacy accessible for students with disabilities. Inspired by my
            sister Lara, who has Rett Syndrome, I designed and built AI-Learners
            from the ground up—leading engineering, product, and research.
          </p>
          <p>
            I led a distributed team of 4 people, including Sam Masto (Head of
            Engineering), Tran Hoang (Head of Product), and two offshore
            developers. We are also supported by advisors including Cornell and
            Stanford University Researchers, Google engineers, accessibility
            specialists, and special education teachers. I am the CEO and
            Founder of AI-Learners, working on the product, engineering, and
            sales.
          </p>

          <p>
            We raised $350,000 in grant funding and $250,000 in angel
            investment.
          </p>
          <h3>Development Timeline</h3>
          <ul>
            <li>
              <strong>June 2020</strong>: Started AI-Learners as a Cornell
              freshman
            </li>
            <li>
              <strong>May 2023</strong>: Graduated and began working full-time
            </li>
            <li>
              <strong>Sept 2023</strong>: Platform officially launched
            </li>
            <li>
              <strong>Jan 2024</strong>: Reached revenue
            </li>
            <li>
              <strong>Now</strong>: Supporting 1,000+ students and 100+ teachers
              across 35 paying school districts
            </li>
          </ul>
          <p>
            While I continue to support existing customers, AI-Learners is in
            maintenance mode and I am actively exploring new job opportunities.
          </p>
        </div>
        <img src="./adeleAndLara.png" className="LaraImg" alt="Young girl" />
      </div>

      {/* Featured Projects Section */}
      <div>
        <h3>Featured Projects</h3>
        {FeaturedProjectsData.map((project) => (
          <FeaturedProject
            key={project.title}
            title={project.title}
            description={project.description}
            blogLink={project.blogLink}
            figmaLink={project.figmaLink}
            screenshot={project.screenshot}
          />
        ))}
      </div>

      {/* Game Screenshots Section */}
      <div>
        <h3>Game Screenshots</h3>
        <p>
          Here are some images of the games we built. We have over 250 games
          across math and literacy.
        </p>
        <div className="gameImgsContainer">
          <img src="./counting.png" className="gameImg" alt="Counting apples" />
          <img src="./addition.png" className="gameImg" alt="Adding apples" />
          <img
            src="./logic.png"
            className="gameImg"
            alt="Choose the fruit on the left"
          />
        </div>
      </div>
    </div>
  );
};

export default AiLearners;
