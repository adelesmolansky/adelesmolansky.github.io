import './pd.css';
import '../pages.css';

const EXAMPLE_SESSIONS = [
  {
    title:
      'One Hour Presentation: Unraveling the Potential of Artificial Intelligence in K-12 Education',
    audience: 'Teachers, administrators, and other educators',
    format: 'Virtual presentation; 1 hour',
    summary:
      "Learn more about artificial intelligence (AI) and specifically how AI impacts education in K-12. We will delve into various domains of AI's impact, such as personalized learning, intelligent tutoring systems, automated grading, and student analytics. Discover how AI empowers educators, enhances student learning experiences, and streamlines administrative tasks, paving the way for a more efficient, effective, and inclusive educational environment.    ",
    learningOutcomes: [
      'Develop a better understanding of artificial intelligence',
      'Learn what AI tools exist that can be used for education',
      'Understand common challenges and concerns about AI and common strategies for overcoming them',
    ],
  },
  {
    title:
      'Half Day Workshop: Empowering Educators with AI and EdTech to Better Support Students',
    audience: 'Teachers, administrators, and other educators',
    format: 'Virtual or in person; 2-3 hours',
    summary:
      'In this workshop, we’ll explore the world of Artificial Intelligence (AI) and how it can be harnessed to enhance the educational experience for students. We’ll start with an engaging warm-up activity to understand your current tech usage and feelings about AI. Then, we’ll delve into an overview of AI, its applications in education, and how it can benefit both students and teachers. We’ll also discuss safety and productivity considerations. After a break, we’ll get hands-on with various educational technology (edtech) tools, allowing you to explore their potential. Finally, we’ll have a discussion on your experiences with these tools, how to integrate them into your classrooms, and address any questions or concerns you may have. Together, we’ll uncover exciting opportunities to leverage AI and edtech for the betterment of special education.    ',
    learningOutcomes: [
      'Develop a better understanding of artificial intelligence',
      'Learn what AI tools exist that can be used for education',
      'Get hands-on experience evaluating tools and walk away with 5 new tools that you can use independently or with students',
      'Understand common challenges and concerns about AI and common strategies for overcoming them',
    ],
  },
  {
    title: 'Full Day Workshop: Full Day Immersion into AI and Education',
    audience:
      'Teachers and other educators (e.g., accessibility specialists, teaching assistants, etc.)',
    format: 'Virtual or in person; 4-6 hours',
    summary:
      'In this workshop, we’ll explore the world of Artificial Intelligence (AI) and how it can be harnessed to enhance the educational experience for students. The morning session will be about building our understanding of AI and experimenting with various AI tools that can help teachers save time and can help students receive a more personalized education. The afternoon will be a structured lesson on how to effectively evaluate various AI tools, so each teacher walks about with 5 tools they are confident to use. We will also discuss common challenges and concerns about AI and then practice various strategies for overcoming challenges of AI.    ',
    learningOutcomes: [
      ' Develop a better understanding of artificial intelligence',
      'Learn what AI tools exist that can be used for education',
      'Get hands-on experience evaluating tools and walk away with 5 new tools that you can use independently or with students',
      'Understand common challenges and concerns about AI',
      'Practice various strategies for overcoming challenges of AI',
    ],
  },
  {
    title: 'Three Part Series: Implementing AI tools in the classroom',
    audience: 'Teachers and curriculum developers',
    format: 'Virtual; 3 sessions; 1 hour each',
    summary:
      'There are three parts to this offering that are split over several days. (1) Introduction to AI tools: I will begin with a broad overview of artificial intelligence (AI) and specifically how AI impacts education in K-12. We will delve into various ways that AI can help teachers (e.g., create lesson plans) and ways that AI can help students (e.g., peronalized practice problems). I will then present various tools that teachers can use independently, that students and teachers can in the classroom, and that students can use at home. (2) Integration: Following the initial presentation, we will select 1-3 tools that teachers want to try using with their students. We will discuss logistics such as how to create accounts for students and how to best integrate the tools into classroom instruction and homework assignments. (3) Reflection and Next Steps: After 1-2 months of using the tools, we will come back together to review how using the tools went. We will discuss how students enjoyed using the tools, what challenges teachers and students faced, and what changes we want to make going forward.  ',
    learningOutcomes: [
      'Develop a better understanding of artificial intelligence',
      'Learn what AI tools exist that can be used for education',
      'Get hands-on experience evaluating tools',
      'Learn how to best implement AI tools in the classroom and for home use and collectively figure out how to overcome logistics and obstacles',
      'Understand common challenges and concerns about AI',
      'Practice various strategies for overcoming challenges of AI',
    ],
  },
  {
    title: 'Deep Dive: Using ChatGPT to Save Time and Improve Learning',
    audience: 'Teachers, administrators, and other educators',
    format: 'Virtual or in-person; 1-2 hours',
    summary:
      'Embark on a comprehensive journey to understand and effectively utilize ChatGPT in educational settings. Teachers will gain a thorough understanding of what ChatGPT is, including its foundation as a large language model. The session will address AI regulations relevant to ChatGPT, ensuring educators are well-informed about ethical and legal considerations. Teachers will also get hands-on experience using ChatGPT and ensure they are ready to use the tool.',
    learningOutcomes: [
      'Learn how ChatGPT works (ex: what is a large language model)',
      'Discuss AI regulations around ChatGPT',
      'Get strategies on how to prompt ChatGPT to get more accurate and helpful resources',
      'Get hands on practice using ChatGPT to help with creating lesson plans, writing emails, getting fast facts, making images, and much more',
      'Learn how to control how often students use ChatGPT and how to test for plagiarism',
      'Learn how to teach your students to use ChatGPT productively and how to incorporate ChatGPT into lessons and assignments',
    ],
  },
  {
    title: 'Deep Dive: AI Tools For Lesson Plans and Classroom Activities',
    audience: 'Teachers and curriculum developers',
    format: 'Virtual or in-person; 1-2 hours',
    summary:
      'This interactive session is dedicated to exploring the transformative power of Artificial Intelligence (AI) tools in revolutionizing lesson planning and classroom activities. Aimed at educators and curriculum developers, this presentation delves into the latest AI technologies that can significantly enhance educational content and engagement. Participants will be introduced to a variety of AI tools tailored for educational purposes, demonstrating how these tools can streamline lesson planning, generate creative content, and foster interactive learning environments.    ',
    learningOutcomes: [
      'Learn how AI can help save time and improve student engagement',
      'Get recommendations for three tools that you can use to create and plan lessons',
      'Get recommendations for three tools that you can use with your students in the classroom',
      'Learn how to integrate AI tools into lesson planning for more dynamic and engaging content',
      'Get hands-on experience with the tools to prepapre you to create your next lesson',
      'Discuss concerns and worries when using these tools',
    ],
  },
  {
    title: 'Unique Challenges and Opportunities for AI in Special Education',
    audience:
      'Teachers, administrators, therapists, disability specialists, and other educators',
    format: 'Virtual or in-person; 1-2 hours',
    summary:
      'This presentation focuses on the intersection of Artificial Intelligence (AI) and special education, highlighting both the unique challenges and opportunities that AI presents in this field. It is tailored for professionals working in special education, including teachers, therapists, and administrators. The session will explore how AI can be adapted to meet the diverse needs of students with disabilities, discussing both the potential benefits and the limitations of current AI technologies. Attendees will gain insights into the ways AI can support personalized learning, assistive technologies, and data-driven interventions, while also considering the ethical implications and the need for inclusive AI design.',
    learningOutcomes: [
      'Understand the specific needs of special education students and how AI can address these needs',
      'Learn how to tailor AI solutions for personalized learning experiences',
      'Get hands on experience exploring the benefits and limitations of using AI tools in special education',
      'Get recommendations for three tools that you can use with your students in the classroom',
      'Learn how to implement tools in the classroom',
    ],
  },
];

const PD = () => (
  <div className="pageContainer">
    <h1>Professional Development</h1>
    <p>
      Hi! My name is Adele Smolansky and I am a PhD Candidate at Stanford
      University specializing in Learning Sciences and Technology Design. I am
      also the founder of an EdTech platform that helps students with all
      abilities learn math and literacy. I love technology and I want to empower
      teachers with the resources they need to use technology.{' '}
      <b>
        Work with me to learn how to save time, improve learning outcomes for
        your students, and make learning more fun for everyone!
      </b>
    </p>

    <p>
      I offer professional development for teachers, school administrators,
      special education specialists, paraprofessionals, and everyone else at
      schools. <b>We should all learn to use technology!</b> My work is all
      supported <b>research backed methods</b> on how to best use technology for
      education. Sessions may be in person or virtual. Email me{' '}
      <a target="_blank" href="mailto:adele@ai-learners.com" rel="noreferrer">
        adele@ai-learners.com
      </a>{' '}
      with any questions or to schedule a session! Pricing is based on the
      session duration and preperation required.
    </p>

    <p>
      I want to ensure that each session is tailored to your students, teachers,
      and administrators. Here are some ways that we can{' '}
      <b>personalize the experience</b>:
      <ul>
        <li>
          <b>Types of learners:</b> Special education only, inclusive
          classrooms, or general education only
        </li>
        <li>
          <b>Grade levels:</b> Elementary school, middle school, high school, or
          mix
        </li>
        <li>
          <b>Subject areas:</b> Math, literacy, science, music and art, social
          emotional learning, college/career readiness, special education goals
          (e.g., daily life skills), or mix
        </li>
        <li>
          <b>Duration:</b> single presentation for 30 minutes - 1 hour, half day
          or full day workshop, multiple sessions over time of varying durations
        </li>
        <li>
          <b>Style:</b> presentation only, hands-on activities, small group
          activities, or a mix
        </li>
      </ul>
    </p>

    <button
      className="schedule-button"
      type="button"
      onClick={() => {
        const mailto =
          'mailto:adele@ai-learners.com?subject=PD for K-12 Inquiry&body=Hi! I am interesed in your professional development services!';
        window.open(mailto, '_blank');
      }}
    >
      Email me to schedule!
    </button>

    <h2>Possible Learning Outcomes</h2>
    <ul>
      <li>
        Develop a better understanding of AI (e.g., technical definition, AI
        bias, legal regulations)
        <li>
          Learn what AI tools exist that can be used for education
          <ul>
            <li>Understand how AI tools can help students and teachers</li>
            <li>
              Understand the different use cases for AI tools for students and
              teachers
            </li>
          </ul>
        </li>
        <li>
          Learn how to select and evaluate tools
          <ul>
            <li>
              Get recommendations from Adele based on your students and schools'
              needs
            </li>
            <li>
              Learn how to evaluate tools yourself and select the best tools for
              specific use cases and students
            </li>
            <li>
              Get guidance on how to balance free vs. paid tools and when to ask
              schools or purchase tools
            </li>
            <li>
              Learning how to involve students in the process for selecting
              tools and collaboratively with other teachers
            </li>
          </ul>
        </li>
        <li>
          Learn how to use AI tools in different contexts (e.g., independent vs
          group work) and successfully integrate the tools into the classroom
          and independent learning
          <li>
            How to mitigate typical concerns and worries of using AI (e.g.,
            overreliance, cheating, hallucinations, loss of critical thinking,
            creativity, and social skills)
          </li>
        </li>
      </li>
    </ul>

    <h2>Positive Reactions</h2>
    <p>
      Teachers and administrators have LOVED my sessions and I have recieved
      very possible feedback. Here are some quotes demonstrating what people
      have learned and how they enjoyed my training:
      <ul>
        <li>
          "Great presentation from Adele; very imformative and helpful" -{' '}
          <a href="https://www.linkedin.com/posts/massachusetts-association-of-766-approved-private-schools_educational-website-for-students-with-cvi-activity-7128430778308300801-ksok?utm_source=share&utm_medium=member_desktop">
            {' '}
            MAAAPS{' '}
          </a>
        </li>
        <li>
          "I learned about new AI tools that I haven't seen before. Also I
          appreciated getting to work with my colleagues to develop a deeper
          understanding of how these tools could be used with our students. "
        </li>
        <li>
          "The workshop was really fun! I liked the energy and not being
          lectured."
        </li>
        <li>
          "It was helpful to hear from someone passionate about AI, as a balance
          to those who are more on the fence."
        </li>
        <li>
          "Learned that there is a plethora of AI tools out there to use in the
          classroom. Google Expedition and Classcraft will be used in the future
          to help engage students."
        </li>
        <li>
          "That AI can boost student engagement in many formats, especially
          game-style programs and that AI can enhance the grading process with
          individualized analyses. "
        </li>
      </ul>
    </p>

    <h2>Example Sessions</h2>
    <p>
      I have facilated many different sessions for schools and districts. I
      personalize each session to the needs of the teachers and students in the
      school. Here are a few examples of sessions that I did in the past.
    </p>

    {EXAMPLE_SESSIONS.map((session) => (
      <>
        <h3>{session.title}</h3>
        <ul>
          <li>
            <b>Audience: </b>
            {session.audience}
          </li>
          <li>
            <b>Format: </b> {session.format}
          </li>
          <li>
            <b>Summary: </b> {session.summary}
          </li>
          <li>
            <b>Learning Outcomes: </b>
            <ul>
              {session.learningOutcomes.map((outcome) => (
                <li>{outcome}</li>
              ))}
            </ul>
          </li>
        </ul>
      </>
    ))}
    <button
      className="schedule-button"
      type="button"
      onClick={() => {
        const mailto =
          'mailto:adele@ai-learners.com?subject=PD for K-12 Inquiry&body=Hi! I am interesed in your professional development services!';
        window.open(mailto, '_blank');
      }}
    >
      Email me to schedule!
    </button>
  </div>
);

export default PD;
