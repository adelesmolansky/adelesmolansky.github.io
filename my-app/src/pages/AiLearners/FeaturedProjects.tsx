interface FeaturedProjectProps {
  title: string;
  description: string;
  blogLink: string;
  figmaLink?: string;
  screenshot: string;
}

export const FeaturedProject = ({
  title,
  description,
  blogLink,
  figmaLink,
  screenshot,
}: FeaturedProjectProps) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="space-y-4">
        <p className="text-gray-700 leading-relaxed">
          <strong>{title}</strong>: {description}{' '}
          <a
            href={blogLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline font-medium"
          >
            Read more
          </a>
          {figmaLink && (
            <>
              {' '}
              or{' '}
              <a
                href={figmaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline font-medium"
              >
                view the design
              </a>
            </>
          )}
          .
        </p>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src={screenshot}
          alt={title}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export const FeaturedProjectsData = [
  {
    title: 'Analytics Dashboard',
    description:
      'Built a comprehensive analytics dashboard for teachers to track student progress, identify learning gaps, and generate detailed reports.',
    blogLink: 'https://www.ai-learners.com/blog/analytics-dashboard',
    figmaLink: 'https://www.figma.com/file/analytics-dashboard',
    screenshot: './featured-projects/analytics.png',
  },
  {
    title: 'Assignment Creation Tool',
    description:
      'Developed an intuitive tool for teachers to create custom assignments, set learning objectives, and assign games to individual students or groups.',
    blogLink: 'https://www.ai-learners.com/blog/assignment-tool',
    figmaLink: 'https://www.figma.com/file/assignment-tool',
    screenshot: './featured-projects/assignments.png',
  },
  {
    title: 'Interactive Games',
    description:
      'Designed and built over 250 interactive games covering early math and literacy concepts, with adaptive difficulty and accessibility features.',
    blogLink: 'https://www.ai-learners.com/blog/interactive-games',
    figmaLink: 'https://www.figma.com/file/interactive-games',
    screenshot: './featured-projects/games.png',
  },
  {
    title: 'Teacher Account Setup',
    description:
      'Created a streamlined onboarding process for teachers, including account verification, school district integration, and initial setup.',
    blogLink: 'https://www.ai-learners.com/blog/teacher-setup',
    screenshot: './featured-projects/teacher-account-setup.png',
  },
];
