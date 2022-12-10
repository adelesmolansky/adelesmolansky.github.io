import React from "react";

import "./News.css";
import "../pages.css";

const News = () => {
  return (
    <div className="pageContainer paragraphText">
      <h1 className="mainTextSectionTitle">Talks</h1>
      <img
        src="./ctg.jpeg"
        className="AdeleCTGImg"
        alt="Adele at the Closing the Gap Conference"
      />

      <p>
        I am really passionate about sharing AI-Learners with other
        accessibility specialists. I love to share my knowledge in accessibility
        and education with people around the world to ensure more people are
        actively contributing to an inclusive society.
      </p>
      <p>
        I am exhibiting and presenting at the leading assistive technology
        conferences around the world:
      </p>
      <ul className="bulletedList">
        <li>
          Closing the Gap (October 2022):{" "}
          <a href="https://www.closingthegap.com/conf-22-presenter/adele-smolansky/">
            Accessible Edtech for Elementary Math with AI-Learners
          </a>
        </li>
        <li>
          ATIA: Assistive Technology Industry Association (upcoming - February
          2023)
        </li>
        <li>CSUN Assistive Technology (upcoming - March 2023)</li>
      </ul>

      <p>
        I have also presented at multiple other events, including Cornell alumni
        events, local Entrepreneurship events, and accessibility graduate
        classes.
      </p>
      <ul className="bulletedList">
        <li>Cornell Law School Showcase and Panel (March 2023)</li>
        <li>Cornell Law School Showcase and Panel (March 2023)</li>
        <li>
          Minnesota Assistive Technology Advisory Team, Guest Presenter (Nov
          2022)
        </li>
        <li>
          Wyoming Institute for Disabilities AT Professionals, Guest Presenter
          (Oct 2022)
        </li>
        <li>Cornell Computer Science Student Showcase (Oct 2022)</li>
        <li>Rev Ithaca Startup Works Presenter (Sep 2022)</li>
        <li>Cornell Computer Science Advisor Board Presenter (April 2022)</li>
      </ul>

      <h1 className="mainTextSectionTitle">Awards & Grants</h1>
      <p>Entrepreneurship:</p>
      <ul className="bulletedList">
        <li>Cornell Contribution Project (June 2022)</li>
        <li>Cornell Pitch for the People Competition (May 2022)</li>
        <li>e-Fest Entrepreneurship Challenge (April 2022)</li>
        <li>
          Texas Christian University Values & Ventures Competition (April 2022)
        </li>
        <li>
          New York State Business Plan Competition - Tech Garden Award (April
          2022)
        </li>
        <li>Cornell eLab Student Business Accelerator (April 2021)</li>
        <li>Cornell Engineering Innovation Competition (April 2021)</li>
      </ul>

      <p>Personal:</p>
      <ul className="bulletedList">
        <li>Cornell Deans List (ongoing)</li>
        <li>Cane Scholar (ongoing)</li>
        <li>Cornell Engineering Undergraduate Research Grant (June 2022)</li>
        <li>Cornell Dream Grant (June 2022)</li>
        <li>International Hillel Campus Leader (June 2021)</li>
        <li>Cornell Beck Award (May 2021)</li>
      </ul>

      <p>Honor Societies:</p>
      <ul className="bulletedList">
        <li>Tau Beta Pi Engineering Honor Society</li>
        <li>
          Institute of Electrical and Electronic Engineering Eta Kappa Nu Honor
          Society
        </li>
        <li>Alpha Kappa Psi Business Fraternity</li>
      </ul>

      <h1 className="mainTextSectionTitle">In the News</h1>
      <p>
        My entrepreneurial pursuits have caught the eyes of many news channels
        and publications:{" "}
      </p>
      <ul className="bulletedList">
        <li>
          How AI-Learners Can Help Kids with Rett Syndrome Learn Math (Oct 2022){" "}
          <a href="https://www.rettsyndrome.eu/family-focus/how-ai-learners-can-help-kids-with-rett-syndrome-learn-math/?fbclid=IwAR18iMnMbcjLvOalp3ax9Is2licVUKZuTn1uYzL7qVWOCuQ3e-Uq6i6CU9g">
            [Rett Syndrome Europe]
          </a>
        </li>
        <li>
          AILearners - Building a Future For Children with Disabilities (May
          2022){" "}
          <a href="https://www.wbng.com/2022/05/02/ailearners-building-future-children-with-disabilities/">
            [WBNC]
          </a>
        </li>

        <li>
          2022 New York Business Plan Competition Winners Announced (April 2022){" "}
          <a href="https://nybpc.org/news/2022/4/28/2022-new-york-business-plan-competition-winners-announced">
            [Upstate Capital]
          </a>
        </li>

        <li>
          TCU Values and Ventures® Competition Awards $120,000+ to Winners out
          of 115 Universities - Neeley School of Business (April 2022){" "}
          <a href="https://eiexchange.com/content/e-fest-2022">
            [Entrepreneurship Website]
          </a>
        </li>

        <li>
          e-Fest 2022 Top 25 Finalists Announced | EIX.org (April 2022){" "}
          <a href="https://eiexchange.com/content/e-fest-2022">
            [Entrepreneurship Website]
          </a>
        </li>

        <li>
          An eLab Spotlight on the Undergraduate Venture, AI-Learners (April
          2022){" "}
          <a href="https://www.studentagenciesfoundation.org/post/an-elab-spotlight-on-the-undergraduate-venture-ai-learners">
            [Student Agencies Foundation]
          </a>
        </li>

        <li>
          Cornell Students Improve Math Accessibility for Students With
          Disabilities | The Cornell Daily Sun (March 2022){" "}
          <a href="https://cornellsun.com/2022/03/24/cornell-students-improve-math-accessibility-for-students-with-disabilities/">
            [The Cornell Daily Sun]
          </a>
        </li>

        <li>
          Cornell students help children with disabilities learn math - Tompkins
          Weekly (August 2021){" "}
          <a href="https://www.tompkinsweekly.com/articles/cornell-students-help-children-with-disabilities-learn-math-2/">
            [Tompkins Weekly]
          </a>
        </li>

        <li>
          My college major allowed me to make an impact on my sister's life I
          never even knew would be possible (June 2021){" "}
          <a href="https://www.hillel.org/about/news-views/humans-of-hillel/hillel-stories/2021/11/12/my-college-major-allowed-me-to-make-an-impact-on-my-sisters-life-i-never-even-knew-would-be-possible">
            [Hillel International]
          </a>
        </li>
      </ul>
    </div>
  );
};

export default News;
