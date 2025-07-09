export const FeaturedProject = ({
  title,
  description,
  blogLink,
  figmaLink,
  screenshot,
}: {
  title: string;
  description: string;
  blogLink: string;
  figmaLink?: string;
  screenshot: string;
}) => (
  <div className="featuredProjectContainer">
    <div className="featuredProjectText">
      <p>
        <strong>{title}</strong>: {description}
      </p>
      <a href={blogLink} target="_blank" rel="noreferrer">
        Blog
      </a>
      {'  |  '}
      {/* figma link is optional */}
      {figmaLink && (
        <a href={figmaLink} target="_blank" rel="noreferrer">
          Figma
        </a>
      )}
    </div>
    <div className="screenshotsContainer">
      <img src={screenshot} alt={title} className="screenshot" />
    </div>
  </div>
);

export const FeaturedProjectsData = [
  {
    title: 'Analytics Dashboard',
    description:
      'Built a robust dashboard for teachers to monitor student progress, visualize trends, and export reports. We use Machine Learning to provide personalized recommendations for each student.',
    blogLink:
      'https://ai-learners.com/resources/empowering-educators-with-powerful-analytics',
    figmaLink:
      'https://www.figma.com/design/4oP48qj8my1MDM3S14Ueo1/AI-Learners-Design-Examples--Public-Features-?node-id=1-48464',
    screenshot: './featured-projects/analytics.png',
  },
  {
    title: 'Assignments',
    description:
      'Developed an assignment system for teachers to create and track assignments for their students.',
    blogLink: 'TODO',
    figmaLink:
      'https://www.figma.com/design/4oP48qj8my1MDM3S14Ueo1/AI-Learners-Design-Examples--Public-Features-?node-id=1-48464',
    screenshot: './featured-projects/assignments.png',
  },
  {
    title: 'Generative AI Content Tools',
    description:
      'Created Social Story, Reading Comprehension, and Decodable Text generators using OpenAI GPT and Google Gemini APIs and prompt engineering. Designed UI workflows for safe, editable outputs.',
    blogLink:
      'https://ai-learners.com/resources/creating-decodable-passages-with-ai-learners',
    figmaLink:
      'https://www.figma.com/design/4oP48qj8my1MDM3S14Ueo1/AI-Learners-Design-Examples--Public-Features-?node-id=0-1',
    screenshot: './featured-projects/stories.png',
  },
  {
    title: 'Customizable Games',
    description:
      'Led engineering for a scalable system supporting over 250 customizable learning games across math and literacy. Built for accessibility and configurability.',
    blogLink:
      'https://ai-learners.com/resources/teaching-supports-in-ai-learners-games',
    figmaLink:
      'https://www.figma.com/design/4oP48qj8my1MDM3S14Ueo1/AI-Learners-Design-Examples--Public-Features-?node-id=1-122114',
    screenshot: './featured-projects/games.png',
  },
  {
    title: 'Teacher Account Setup',
    description:
      'Built a robust dashboard for teachers to monitor student progress, visualize trends, and export reports. We use Machine Learning to provide personalized recommendations for each student. We also integrated Stripe (subscriptions), HubSpot (CRM), and Clever (SSO, rostering) to streamline operations and onboarding.',
    blogLink: 'TODO',
    screenshot: './featured-projects/teacher-account-setup.png',
  },
];
