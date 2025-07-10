import { Link } from 'react-router-dom';

const About = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side - Image and info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <img
              src="./headshot.jpg"
              className="w-full h-auto rounded-lg shadow-md mb-6"
              alt="Headshot of Adele"
            />
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">
                Adele Smolansky
              </h2>
              <p className="text-gray-700">
                Cornell University 2023: B.S. Computer Science
              </p>
              <p className="text-gray-700">
                Stanford University 2024: M.A. Educational Technology
              </p>
              <p className="text-gray-700">
                Stanford University PhD - On Leave
              </p>
              <p className="text-gray-700 font-semibold">
                AI-Learners Founder and CEO
              </p>

              {/* Links */}
              <div className="space-y-2 pt-4 border-t border-gray-200">
                <p>
                  <a
                    target="_blank"
                    href="mailto:adele@ai-learners.com"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    adele@ai-learners.com
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/adelesmolansky/"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/1WkXjCIAsUXNn5P98cY-CDJ6b70U1Zw6A/view?usp=sharinghttps://drive.google.com/file/d/1DYI7iCmaQzN_VM9TynBvt0gdj52IAAbZ/view?usp=sharing"
                    rel="noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Main content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                My name is Adele Smolansky, and I'm an entrepreneur, researcher,
                and innovator! I graduated Summa Cum Laude from Cornell
                University with a Bachelors of Science in Computer Science as a
                Merrill Presidential Scholar. After one year of my PhD at
                Stanford University in Learning Sciences and Technology Design
                (LSTD), I decided to take a leave of absence and graduate with a
                masters from Stanford to work full-time on my startup,
                AI-Learners. I am grateful for the Stanford Graduate Fellowship
                (SGF) and the National Science Fellowship (NSF) for supporting
                my PhD work.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Professional Experience: AI-Learners (2020 - Present)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Inspired by my younger sister, who has a severe neurological
                disability called Rett Syndrome, I founded{' '}
                <a
                  href="https://ai-learners.com/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  AI-Learners
                </a>
                , an educational technology platform that helps kids with all
                abilities learn math, literacy, and social skills. Over 1000+
                students and 100+ teachers across the country are using
                AI-Learners at school and at home to support their learning. We
                have 35 paying school customers. AI-Learners is the first EdTech
                platform to provide accessible activities games for students
                with diverse physical, cognitive, and behavioral abilities. Our
                work is supported by the the Learning Engineering Tools
                Competition by Schmidt Futures and NewSchools Venture Fund. We
                also raised $250,000 from angel investors. Check out the website
                at{' '}
                <a
                  href="https://ai-learners.com/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  ai-learners.com
                </a>{' '}
                and read more on the{' '}
                <Link
                  to="/ai-learners"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  AI-Learners page
                </Link>
                !
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Professional Experience: MoVi (2024-2025)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To further support the entrepreneurial ecosystem, I am working
                part time as the Head of Product and AI Integration at{' '}
                <a
                  href="https://www.movipartners.com/"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  MoVi
                </a>
                , a venture firm that incubates and invests in startups, advises
                companies, and brings people together. I'm helping the company
                scale their operations with technology and develop new products
                that enhance member experience.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Professional Experience: Google
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                I had the pleasure of working at Google for two summers as a
                Software Engineering Intern, where I met incredible people and
                became a stronger computer scientist.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>
                  Summer 2021: STEP Intern on the Google Drive Team
                </strong>
                <br />
                During my first summer at Google, I interned with the Google
                Drive team, working on the Google Drive Counter Abuse project.
                While developing interactive and secure web pages for the Drive
                Abuse team using HTML, CSS, and TypeScript, I became a stronger
                front-end programmer. I also improved my Java skills by using
                Java to work with APIs to access data from the backend and set
                proto values to support frontend logic. Since technology should
                be accessible to all users, I improved the accessibility of the
                web pages and conducted accessibility testing using Google's
                accessibility testing framework.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>
                  Summer 2022: SWE Intern on the Android Accessibility Team
                </strong>
                <br />
                During my second internship with Google, I wanted to learn more
                about how Google handled accessibility, so I joined the Android
                Accessibility team. I developed a new Android Accessibility
                Service to help developers make their apps more accessible,
                which involved integrating machine learning models to identify
                missing accessibility properties in data structures. I then used
                the new service to solve Talkback bugs and presented my work to
                the Android Accessibility team.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Teaching Experience
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                I worked as a Teaching Assistant for two years at Cornell
                University. I worked with two classes at Cornell University:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>NBA 3000: Designing New Ventures</li>
                <li>eLab Student Business Accelerator</li>
              </ul>

              <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Research Experience
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                While at Cornell University and Stanford University, I conducted
                research in the Human Computer Interaction (HCI) field. At
                Cornell, I worked with the Future of Learning Lab, advised by
                Rene Kizilcec, and the Enhancing Ability Lab, advised by Shiri
                Azenkot. At Stanford, I worked with Nick Haber at the Autonomous
                Agents Lab. I conducted various studies including systematic
                reviews, interview studies, survey studies, and theoretical
                analysis, to better understand the complex needs of students
                with disabilities and their supporters. Read more about my{' '}
                <Link
                  to="/research"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  research projects here
                </Link>
                !
              </p>

              <h1 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Personal
              </h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                Outside of school, research, working, and teaching, I love to
                swim, bike, run, travel, and read books. I compete in various
                cycling, running, and triathlon races! Growing up, I was a
                rhythmic gymnast, and I traveled around the country competing in
                various competitions.
              </p>
              <img
                className="w-full h-auto rounded-lg shadow-md"
                alt="hiking in canada"
                src="./personal.jpeg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
