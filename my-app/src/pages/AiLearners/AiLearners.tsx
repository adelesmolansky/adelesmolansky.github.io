import './AiLearners.css';
import '../pages.css';
import { useMediaQuery } from 'react-responsive';

const AiLearners = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 35rem)' });

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

      <div className="aboutContainer">
        {/* Put the image at the start if we are not on mobile */}
        {!isMobile && LaraImg()}
        <div className="aboutText">
          <p>
            AI-Learners makes learning math accessible and engaging for students
            with diverse cognitive, physical, and behavioral abilities through
            personalized computer games and analytics.
          </p>
          {/* Put the image in the middle of the text if we are on mobile */}
          {isMobile && LaraImg()}
          <p>
            Growing up, I watched my younger sister Lara, who has a severe
            neurological disability called Rett Syndrome, struggle to learn
            math. Lara inspired me to create AI-Learners and help my sister and
            many other students with disabilities. In the summer of 2020, I
            founded AI-Learners. While I studied at Cornell, I worked with
            dozens of Cornell studies and faculty. The team now comprises
            several Cornell graduates and other passionate individuals. We are
            advised by software engineers from Google and other EdTech startups,
            special education teachers, and accessibility specialists.
          </p>
          <p>
            AI-Learners now has 70+ math games available across grade levels
            PreK-2nd grade, and hundreds of students, teachers, and parents all
            across the country are using AI-Learners. Schools are piloting
            AI-Learners over the summer - NYC private schools including
            Manhattan Star Academy, iHope, Viscardi, Brooklyn Autism Center;
            Perkins School for the Blind; Miami and Chicago Lighthouse for the
            Blind; and various public schools in CT, NY, and CA. We also provide
            individual subscriptions to parents to use AI-Learners with their
            students at home.
          </p>
          <p>
            To meet the needs of students with diverse abilities, AI-Learners is
            highly personalized. We offer different color and object modes (see
            images below) as well as a robust in-game settings menu, where
            teachers can customize different aspects of the game. We leverage
            artificial intelligence to recommend new games for students to play
            and we dynamically adjust level difficulty for students. We also
            provide comprehensive analytics for teachers to help them better
            understand their student's math abilities.
          </p>
          <p>
            To date, AI-Learners has raised $65,000 in non-dilutive funding
            through grant competitions and accelerators. We are currently
            seeking additional funding to help us expand our impact. Please
            contact me if you are interested in joining us on our journey to
            helping students with disabilities learn math.
          </p>
        </div>
      </div>

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
  );
};

export default AiLearners;
