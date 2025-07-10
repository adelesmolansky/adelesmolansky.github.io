const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">News</h1>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Over the past few years, I have given dozens of talks around the
            country for AI-Learners, research, and other academic endeavors. I
            have also won multiple awards for my entrepreneurial and academic
            accomplishments. Keep reading to find articles, podcasts, and TV
            spotlights with me!
          </p>

          {/* Awards & Grants */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Awards & Grants
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Entrepreneurship:
            </h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I've competed in dozens of grant competitions and won over
              $110,000 for AI-Learners.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>
                Learning Engineering Tools Competition 2022 by Schmidt Futures:
                winner - $50,000 (July 2023)
              </li>
              <li>
                Cornell Computer and Informational Science BOOM Award - $1,500
                (April 2023)
              </li>
              <li>
                New York State Business Plan Competition: 1st Place - $10,00
                (April 2023)
              </li>
              <li>
                2023 Cornell Engineering Innovation Competition: 1st Place -
                $7,500 (April 2023)
              </li>
              <li>
                Tulane Business Plan Competition: semi-finalist (March 2023)
              </li>
              <li>Draper Competition: semi-finalist (March 2023)</li>
              <li>
                SubSummit Entrepreneurship Pitch Competition: semi-finalist
                (January 2023)
              </li>
              <li>Cornell Contribution Project - $2,500 (June 2022)</li>
              <li>
                Cornell Pitch for the People Competition: 1st place - $2,000
                (May 2022)
              </li>
              <li>
                e-Fest Entrepreneurship Challenge: 2nd place - $2,500 (April
                2022)
              </li>
              <li>
                Texas Christian University Values & Ventures Competition (April
                2022)
              </li>
              <li>
                New York State Business Plan Competition Tech Garden Award -
                $2,500 (April 2022)
              </li>
              <li>
                Cornell eLab Student Business Accelerator - $5,000 (April 2021)
              </li>
              <li>
                Cornell Engineering Innovation Competition: 2nd place - $2,000
                (April 2021)
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic:</h3>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I've also been awarded multiple academic scholarships and awards
              for my leadership, research, and entrepreneurship experiences.
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Cornell Deans List (Fall 2019 - May 2023)</li>
              <li>Cornell Merrill Presidential Scholars Award (May 2023)</li>
              <li>
                Global Student Entrepreneur Association (GSEA) Internationals:
                semi-finalist (January 2023)
              </li>
              <li>GSEA US Nationals: top 5 (January 2023)</li>
              <li>DEVIES Award for Gaming & Entertainment (January 2023)</li>
              <li>Life Changing Labs: 22 Under 22 (August 2022)</li>
              <li>
                Cornell Engineering Undergraduate Research Grant (June 2022)
              </li>
              <li>Cornell Dream Grant (June 2022)</li>
              <li>International Hillel Campus Leader (June 2021)</li>
              <li>Cane Entrepreneurial Scholar Award (May 2021)</li>
              <li>Cornell Beck Award (May 2021)</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Honor Societies:
            </h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
              <li>Tau Beta Pi Engineering Honor Society</li>
              <li>
                Institute of Electrical and Electronic Engineering Eta Kappa Nu
                Honor Society
              </li>
              <li>Alpha Kappa Psi Business Fraternity</li>
            </ul>
          </div>

          {/* Talks */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Talks</h2>
            <div className="flex flex-row gap-x-4">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  I am really passionate about sharing AI-Learners with other
                  accessibility specialists. I love to share my knowledge in
                  accessibility and education with people around the world to
                  ensure more people are actively contributing to an inclusive
                  society. I've exhibited and presented at leading assistive
                  technology conferences around the world, as well as taught
                  professionals about accessible educational technology:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                  <li>
                    Minnesota Assistive Technology Advisory Team (Nov 2022)
                  </li>
                  <li>
                    Wyoming Institute for Disabilities AT Professionals -{' '}
                    <a
                      href="https://youtu.be/pLXqYZSBG1k"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Presenter
                    </a>{' '}
                    (Oct 2022)
                  </li>
                  <li>
                    CSUN Assistive Technology{' '}
                    <a
                      href="https://www.csun.edu/cod/conference/sessions/index.php/public/presentations/view/1296/"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Accessible Edtech for Elementary Math with AI-Learners
                    </a>{' '}
                    (March 2023)
                  </li>
                  <li>
                    ATIA: Assistive Technology Industry Association{' '}
                    <a
                      href="https://s3.goeshow.com/atia/orlando/2023/profile.cfm?profile_name=session&master_key=692FCD69-F04D-A206-2B64-3520592DD5F9&page_key=AE3A540A-F04D-A206-2B64-DD9B6CAF54C9&xtemplate&bShowHandout=0&userLGNKEY=0/"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Accessible Edtech for Elementary School Math
                    </a>{' '}
                    (February 2023)
                  </li>
                  <li>
                    Closing the Gap:{' '}
                    <a
                      href="https://www.closingthegap.com/conf-22-presenter/adele-smolansky/"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Accessible Edtech for Elementary Math with AI-Learners
                    </a>{' '}
                    (October 2022)
                  </li>
                </ul>

                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                  I have also presented at various Cornell, entrepreneurship,
                  and research events:
                </p>
                <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-700">
                  <li>
                    Cornell Entrepreneurship Celebration: Startup Panel (April
                    2023)
                  </li>
                  <li>
                    Cornell Silicon Valley Student Startup Showcase (March 2023)
                  </li>
                  <li>Cornell Law School Showcase and Panel (March 2023)</li>
                  <li>Cornell Computer Science Student Showcase (Oct 2022)</li>
                  <li>Rev Ithaca Startup Works Presenter (Sep 2022)</li>
                  <li>
                    Cornell Computer Science Advisor Board Presenter (April
                    2022)
                  </li>
                </ul>
              </div>
              <img
                src="./conference.jpeg"
                className="w-1/3 h-auto object-contain rounded-lg"
                alt="Adele at a Conference"
              />
            </div>
          </div>

          {/* In the News */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              In the News
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My entrepreneurial pursuits have caught the eyes of many news
              channels and publications:{' '}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>
                AI ed-tech, smart contraceptive among innovation awardees (May
                2023){' '}
                <a
                  href="https://news.cornell.edu/stories/2023/05/ai-ed-tech-smart-contraceptive-among-innovation-awardees"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Cornell Chronicle]
                </a>
              </li>
              <li>
                Celebration Honors Student, Alumni Entrepreneurs (April 2023){' '}
                <a
                  href="https://cis.cornell.edu/celebration-honors-student-alumni-entrepreneurs"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Cornell Bowers CIS]
                </a>
              </li>
              <li>
                Tips for Strategically Growing a Team (April 2023){' '}
                <a
                  href="https://www.revithaca.com/tips-for-strategically-growing-a-team/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Rev Ithaca Startup]
                </a>
              </li>
              <li>
                Law Students Support Entrepreneurship and a Good Cause (November
                2022){' '}
                <a
                  href="https://www.lawschool.cornell.edu/news/law-students-support-entrepreneurship-and-a-good-cause/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Law School]
                </a>
              </li>
              <li>
                How AI-Learners Can Help Kids with Rett Syndrome Learn Math (Oct
                2022){' '}
                <a
                  href="https://www.rettsyndrome.eu/family-focus/how-ai-learners-can-help-kids-with-rett-syndrome-learn-math/?fbclid=IwAR18iMnMbcjLvOalp3ax9Is2licVUKZuTn1uYzL7qVWOCuQ3e-Uq6i6CU9g"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Rett Syndrome Europe]
                </a>
              </li>
              <li>
                AILearners - Building a Future For Children with Disabilities
                (May 2022){' '}
                <a
                  href="https://www.wbng.com/2022/05/02/ailearners-building-future-children-with-disabilities/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [WBNC]
                </a>
              </li>
              <li>
                2022 New York Business Plan Competition Winners Announced (April
                2022){' '}
                <a
                  href="https://nybpc.org/news/2022/4/28/2022-new-york-business-plan-competition-winners-announced"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Upstate Capital]
                </a>
              </li>
              <li>
                Cornell University Students Represent New York in National
                Competition (April 2022){' '}
                <a
                  href="https://981thehawk.com/cornell-university-entrepreneurship/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [981 The Hawk]
                </a>
              </li>
              <li>
                The Journey From Graduate to CEO Podcast (April 2022){' '}
                <a
                  href="https://podcasts.apple.com/us/podcast/the-journey-from-gradate-to-ceo/id1533696542?i=1000563530659"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Winning Strategies Playbook]
                </a>
              </li>
              <li>
                TCU Values and Ventures® Competition Awards $120,000+ to Winners
                out of 115 Universities - Neeley School of Business (April 2022){' '}
                <a
                  href="https://eiexchange.com/content/e-fest-2022"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Entrepreneurship Website]
                </a>
              </li>
              <li>
                e-Fest 2022 Top 25 Finalists Announced | EIX.org (April 2022){' '}
                <a
                  href="https://eiexchange.com/content/e-fest-2022"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Entrepreneurship Website]
                </a>
              </li>
              <li>
                An eLab Spotlight on the Undergraduate Venture, AI-Learners
                (April 2022){' '}
                <a
                  href="https://www.studentagenciesfoundation.org/post/an-elab-spotlight-on-the-undergraduate-venture-ai-learners"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Student Agencies Foundation]
                </a>
              </li>
              <li>
                Cornell Students Improve Math Accessibility for Students With
                Disabilities | The Cornell Daily Sun (March 2022){' '}
                <a
                  href="https://cornellsun.com/2022/03/24/cornell-students-improve-math-accessibility-for-students-with-disabilities/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [The Cornell Daily Sun]
                </a>
              </li>
              <li>
                Cornell students help children with disabilities learn math -
                Tompkins Weekly (August 2021){' '}
                <a
                  href="https://www.tompkinsweekly.com/articles/cornell-students-help-children-with-disabilities-learn-math-2/"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Tompkins Weekly]
                </a>
              </li>
              <li>
                My college major allowed me to make an impact on my sister's
                life I never even knew would be possible (June 2021){' '}
                <a
                  href="https://www.hillel.org/about/news-views/humans-of-hillel/hillel-stories/2021/11/12/my-college-major-allowed-me-to-make-an-impact-on-my-sisters-life-i-never-even-knew-would-be-possible"
                  className="text-blue-600 hover:text-blue-800"
                >
                  [Hillel International]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
