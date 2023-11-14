import { useState } from 'react';

import '../pages.css';

const PUBLICATIONS = [
  {
    title:
      'Equity, Diversity, and Inclusion in Educational Technology Research and Development.',
    DOI: 'https://doi.org/10.1007/978-3-031-36336-8_8',
    authors:
      'Adele Smolansky, Huy A. Nguyen, Rene F. Kizilcec, and Bruce M. McLaren.',
    publication:
      'Artificial Intelligence in Education. Posters and Late Breaking Results, Workshops and Tutorials, Industry and Innovation Tracks, Practitioners, Doctoral Consortium and Blue Sky.',
    notes:
      'We will be facilitating a workshop at the AIED 2023 conference. Read more about the workship on',
    link: 'https://adelesmolansky.com/aied23-edi-edtech/',
    linkText: "the workshop's website.",
    abstract:
      'Modern education stands to greatly benefit from technological advances, especially in Artificial Intelligence (AI), that aim to enable effective and personalized learning for all students. However, to improve learning for the majority of students, AI solutions may exclude those who are under-represented due to unique differences in their demographic background or cognitive abilities. Towards combating this issue, we propose a workshop that will initiate conversations about equity, diversity, and inclusion in educational technology research and development. The workshop invites papers from the AIED community about equitable and inclusive educational technology that supports diverse populations, with selected authors being invited to present their work. The workshop is structured around three stages of learning engineering - system design, experimental study, and data analysis - with informational presentations, guest speakers, paper presentations, and group discussions relevant to each stage. Through the participation of community members from multiple disciplines, we seek to formulate a framework for developing and assessing equitable and inclusive educational technology.',
  },
  {
    title:
      'Educator and Student Perspectives on the Impact of Generative AI on Assessments in Higher Education.',
    DOI: 'https://dl.acm.org/doi/10.1145/3573051.3596191',
    authors:
      'Adele Smolansky, Andrew Cram, Corina Raduescu, Sandris Zeivots, Elaine Huber, and Rene F. Kizilcec.',
    publication: 'ACM Digital Library.',
    notes:
      'We will be presenting a WIP poster at the Learning at Scale 2023 conference.',
    abstract:
      'The sudden popularity and availability of generative AI tools such as ChatGPT, which can write compelling essays on any topic and ace standardized tests across many domains, raise questions about the sustainability of traditional assessment practices. This moment presents a rare opportunity for innovation in current online assessment practices, but understanding both the educators’ and students’ perspectives on the issue is critical to achieve a sustainable change in assessment practice. We developed a survey instrument to measure and compare the attitudes of both stakeholders, building on an established framework for examining the quality of online assessments along six dimensions. Educators and students are asked to consider several assessment scenarios, indicate their preferences, and predict the other’s preference. The instrument is designed to understand educator and student perceptions to inform global efforts to reform assessment practices.',
  },
  {
    title:
      'Developing a Prototype to Scale up Digital Support for Online Assessment Design.',
    DOI: 'https://dl.acm.org/doi/10.1145/3573051.3596194',
    authors:
      'Andrew Cram, Corina Raduescu, Sandris Zeivots, Adele Smolansky, Rene F. Kizilcec, and Elaine Huber.',
    publication: 'ACM Digital Library.',
    notes:
      'We will be presenting a WIP poster at the Learning at Scale 2023 conference.',
    abstract:
      'Educators rarely have access to just-in-time feedback and guiding heuristics when designing or updating assessments in higher education. This study describes the initial development process for an automated support system for designing high-quality online assessments. We identify key elements to embed in this digital artifact to offer just-in-time support for educators to design and evaluate their online assessments. To this end, we follow the six steps of design science research, focusing on the early stages of problem identification, solution objectives, and initial conceptual design. After reviewing multiple assessment models and frameworks, we discuss a recent framework for evaluating and designing high-quality online assessments, consisting of ten design and contextual elements. This framework underpins the proposed solution which is a digital artifact that encourages consideration of alternate forms of assessment while retaining the flexibility to operate within individual educators’ design practices and contexts. We expect the proposed system to help educators and instructional designers better understand the strengths and weaknesses of their assessments, consider alternate forms of assessment, and incorporate the system into their assessment design process.',
  },
];

const PAST_PROJECTS = [
  {
    title: 'Evaluating Digital Math Tools for Students with Disabilities.',
    pendingSubmission: 'CHI 2023',
    authors:
      'Adele Smolansky, Juan Delgado, Shiri Azenkot, and Rene F. Kizilcec.',
    abstract:
      'Digital math tools have a demonstrated potential to increase students’ learning outcomes, but little is known about the real-life use and accessibility of tools for students with disabilities. To fill this gap in the literature, we surveyed 27 U.S.-based special education teachers and analyzed 22 digital math tools used by participants. We found that participants typically used mainstream tools that had many accessibility issues and a lack of customization options. Participants wanted to try using a new tool specifically designed for students with disabilities as the tool was easy to use, customizable, engaging, and offered additional math support through hints, examples, and feedback. We provide design recommendations and directions for future work to help developers and researchers create accessible and inclusive learning tools for students with disabilities, and discuss how these tools can help solve challenges that special education teachers and students face in the classroom.',
  },
  {
    title:
      'Systematic Review of Adaptive Math Learning Tools for Elementary Schools Students. ',
    pendingSubmission: 'BJET',
    authors: 'Adele Smolansky, Yann Hicke, and Rene F. Kizilcec.',
    abstract:
      "Educational technology is increasingly used to support student mathematics learning in classrooms and at home. While some adaptive math learning tools have been shown to improve student engagement and achievement, there are important open questions about the effectiveness of these tools for students with disabilities, students from low socio-economic status, and students from minority ethnic backgrounds. We conducted a systematic review of adaptive math learning tools for elementary school students to provide a comprehensive analysis of the types of artificial intelligence algorithms used, the underlying design principles, and the research studies conducted with these tools. Using the PRISMA Statement, the search process identified 28 distinct tools that have been developed and 89 research articles that have studied them since 2000. We systematically coded the tools and articles to understand (a) the similarities and differences between tools' designs and algorithms, (b) the types, participants, and results of research that has been conducted, and (c) the extent to which tools support minority students. The four most researched tools in the literature are ST Math, Math Garden, Reasoning Mind, and Number Race, which account for 43 of the 68 empirical studies we identified. Ten studies have sample sizes greater than 10,000 students, but only four studies critically examine impacts on students with disabilities. This review suggests research opportunities to advance our understanding of how adaptive math learning tools can be developed for a more diverse and inclusive population of elementary school students.",
  },
  {
    title:
      'Perspectives from AT Industry Professionals on the AT Lifecycle for Children',
    anticipatedSubmission: 'Journal',
    authors:
      'Adele Smolansky, Catherine Baker, Shiri Azenkot, and Lauren Milne',
    abstract:
      'Assistive technology (AT) can help children with disabilities improve their learning outcomes, social skills, and autonomy, but past work has shown that AT is often abandoned or underutilized in classrooms and at home. AT industry professionals are often involved in the AT lifecycle as they not only market, manufacture and design, and profit from AT, but also provide direct and indirect support to their customers. However, little research focuses on the perspectives of the AT industry professionals who are supporting children. As such, we conducted semi-structured interviews with 21 AT industry professionals to investigate how AT companies are involved in the AT lifecycle and the factors that impact the successful integration of AT into a child’s life. We uncovered three strong needs: (1) improving communication channels between AT industry and support networks, (2) demonstrating the efficacy of AT and (3) exploring long term support of AT.',
  },
  {
    title:
      'How Teachers of the Visually Impaired Support Students with Cortical/Cerebral Vision Impairments: Exploring Opportunities for Technology Design',
    anticipatedSubmission: 'CHI 2023',
    authors: 'Adele Smolansky, Miranda Yang, and Shiri Azenkot',
    abstract:
      'Cortical/cerebral visual impairment (CVI) is a neurological vision impairment that affects the visual processing centers of the brain. Digital learning tools are becoming increasingly popular in schools, but limited research has examined how tools can help students with CVI, who have distinct academic needs. To better understand how tools should be designed to help students with CVI, we interviewed 20 U.S.-based Teachers of the Visually Impaired (TVIs) who worked with students with CVI. We found that our participants analyzed very specific information about students’ visual, learning, and social needs and their environment to create accommodations for academic materials and determine students’ goals. Participants were eager to use a new learning tool designed for students with CVI. We discuss how tools can provide students with CVI more accessible learning materials, decrease workload for TVIs, and help families and other school staff support their students.',
  },
];

const CURRENT_PROJECTS = [
  {
    title:
      'Personalizing Story-based Math Games for Students with Vision Impairments',
    anticipatedSubmission: 'TBD',
    authors: 'Adele Smolansky, Fan-Yun Sun, Nick Haber',
  },
  {
    title: 'Designing Digital Learning Games for Student with Autism',
    anticipatedSubmission: 'TBD',
    authors: 'Adele Smolansky, Sophie Chen, Dennis Wall, Nick Haber',
  },
  {
    title: 'Understanding the use of AI for K-12 Special Education',
    anticipatedSubmission: 'TBD',
    authors: 'Adele Smolansky, Nick Haber, and Shima Salehi',
  },
];

const Research = () => {
  const numPapers =
    PUBLICATIONS.length + PAST_PROJECTS.length + CURRENT_PROJECTS.length;
  const [openAbstractsList, setOpenAbstractsList] = useState(
    Array(numPapers).fill(false)
  );

  return (
    <div className="pageContainer">
      <h1>Research</h1>

      <h2>Publications</h2>
      <ul>
        {PUBLICATIONS.map((data, idx) => (
          <li>
            <b>{data.title}</b> {!data.DOI && <i>(Publication in progress)</i>}
            <ul className="bulletedList">
              {data.DOI && (
                <li>
                  DOI: <a href={data.DOI}>{data.DOI}</a>
                </li>
              )}
              <li>Authors: {data.authors}</li>
              <li>Publication: {data.publication}</li>
              <li>
                {data.notes} <a href={data.link}>{data.linkText}</a>
              </li>
              <li>
                <button
                  className="openAbstractButton"
                  onClick={() => {
                    const newList = [...openAbstractsList]; // Create a new array
                    newList[idx] = !openAbstractsList[idx]; // Update the value at the specific index
                    setOpenAbstractsList(newList); // Update the state with the new array
                  }}
                >
                  {openAbstractsList[idx] ? 'Abstract:' : 'View Abstract'}
                </button>
                {openAbstractsList[idx] ? data.abstract : ''}
              </li>
            </ul>
          </li>
        ))}
      </ul>

      <h2>Past Projects with Paper Submissions Pending</h2>
      <ul>
        {PAST_PROJECTS.map((data, idx) => {
          const offsetidx = idx + PUBLICATIONS.length;
          return (
            <li>
              <b>{data.title}</b>{' '}
              <ul>
                <li>Authors: {data.authors}</li>
                <li>Pending Submission: {data.pendingSubmission}</li>
                <li>
                  <button
                    className="openAbstractButton"
                    onClick={() => {
                      const newList = [...openAbstractsList]; // Create a new array
                      newList[offsetidx] = !openAbstractsList[offsetidx]; // Update the value at the specific index
                      setOpenAbstractsList(newList); // Update the state with the new array
                    }}
                  >
                    {openAbstractsList[offsetidx]
                      ? 'Abstract:'
                      : 'View Abstract'}
                  </button>
                  {openAbstractsList[offsetidx] ? data.abstract : ''}
                </li>
              </ul>
            </li>
          );
        })}
      </ul>

      <h2>Current Projects</h2>
      <ul>
        {CURRENT_PROJECTS.map((data, idx) => {
          return (
            <li>
              <b>{data.title}</b>{' '}
              <ul>
                <li>Authors: {data.authors}</li>
                <li>Anticipated Submission: {data.anticipatedSubmission}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Research;
