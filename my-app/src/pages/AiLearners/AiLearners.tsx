import { FeaturedProject, FeaturedProjectsData } from './FeaturedProjects';

const AiLearners = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
          <a
            target="_blank"
            href="https://www.ai-learners.com"
            rel="noreferrer"
            className="block mb-8 hover:opacity-80 transition-opacity"
          >
            <img
              src="./logo.jpg"
              className="h-16 w-auto"
              alt="AI-Learners logo"
            />
          </a>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>
                  <a
                    href="https://www.ai-learners.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    AI-Learners
                  </a>
                </strong>{' '}
                is a digital learning platform I founded to make early math and
                literacy accessible for students with disabilities. Inspired by
                my sister Lara, who has Rett Syndrome, I designed and built
                AI-Learners from the ground up—leading engineering, product, and
                research.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I led a distributed team of 4 people, including Sam Masto (Head
                of Engineering), Tran Hoang (Head of Product), and two offshore
                developers. We are also supported by advisors including Cornell
                and Stanford University Researchers, Google engineers,
                accessibility specialists, and special education teachers. I am
                the CEO and Founder of AI-Learners, working on the product,
                engineering, and sales.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We raised $350,000 in grant funding and $250,000 in angel
                investment.
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
                Development Timeline
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>June 2020</strong>: Started AI-Learners as a Cornell
                  freshman
                </li>
                <li>
                  <strong>May 2023</strong>: Graduated and began working
                  full-time
                </li>
                <li>
                  <strong>Sept 2023</strong>: Platform officially launched
                </li>
                <li>
                  <strong>Jan 2024</strong>: Reached revenue
                </li>
                <li>
                  <strong>Now</strong>: Supporting 1,000+ students and 100+
                  teachers across 35 paying school districts
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                While I continue to support existing customers, AI-Learners is
                in maintenance mode and I am actively exploring new job
                opportunities.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="inline-block">
                <img
                  src="./adeleAndLara.png"
                  className="max-w-xs lg:max-w-sm h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  alt="Founder Adele and her sister Lara"
                />
              </div>
            </div>
          </div>

          {/* Featured Projects Section */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Featured Projects
            </h3>
            <div className="space-y-8">
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
          </div>

          {/* Game Screenshots Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Game Screenshots
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Here are some images of the games we built. We have over 250 games
              across math and literacy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="./counting.png"
                className="w-full h-auto rounded-lg shadow-md"
                alt="Counting apples"
              />
              <img
                src="./addition.png"
                className="w-full h-auto rounded-lg shadow-md"
                alt="Adding apples"
              />
              <img
                src="./logic.png"
                className="w-full h-auto rounded-lg shadow-md"
                alt="Choose the fruit on the left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiLearners;
