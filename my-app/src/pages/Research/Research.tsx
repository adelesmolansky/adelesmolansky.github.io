import React from "react";

import "../pages.css";

const Research = () => {
  return (
    <div className="pageContainer">
      <h1 className="mainTextSectionTitle">Cornel Future of Learning Lab</h1>
      <p className="paragraphText">
        With guidance from Cornell Professor Rene Kizilcec, I am researching
        adaptive learning algorithms and optimal game designs to help kids with
        cognitive disabilities learn early math skills. I am working on several
        projects:
      </p>
      <ul className="paragraphText bulletedList">
        <li>
          <b>
            Current Project: Exploring Digital Math Game Features for Early
            Learners.
          </b>{" "}
          I'm conducting a multi-part study with special needs teachers to
          investigate how to design and integrate EdTech games into PreK-1st
          grade classrooms for students with disabilities. I'm now conducting an
          interview study and a survey with teachers to better understand how
          teachers are currently supporting students. By analyzing existing
          literature, I developed a novel model for teaching early mathematics
          to children with cognitive disabilities. I am comparing my interview
          findings and analysis of public teaching material with my novel model.
          Additionally, I am translating my model into game designs, which will
          be evaluated with observational studies. To conduct this study, I am
          leading a research group with multiple undergraduate students. In the
          future, I plan to conduct a controlled experiment to demonstrate the
          efficacy of the games.
        </li>
        <li>
          <b>
            Current Project: Investigating the Impact of Technological
            Innovation on Online Assessments.
          </b>{" "}
          In almost every university course, students take assessments that aim
          to measure a student's understanding of a particular topic. Recent
          technological innovation, such as ChatGPT, highlights the need to
          re-think how we conduct assessments to improve student's assessment
          experience, increase student's benefit from taking the assessment,
          ensure assessments are fair and safe for all students, and improve the
          implementation procedure for educators. I am colloborating with
          researchers from the University of Sydney to better understand how
          technological innovation changes educator and student perceptions of
          the future of assessments in higher education. We are conducting a
          survey, and will submit an in progress report for the 2023 Learning at
          Scale Conference.
        </li>
        <li>
          <b>
            Past Project: Systematic Review of Adaptive Math Learning Tools for
            Elementary Schools Students.{" "}
            <i>(Pending publication in AIED 2023)</i>
          </b>
          I conducted a systematic literature review of adaptive EdTech math
          programs, analyzing how existing machine learning algorithms and
          program designs consider students with diverse cognitive abilities.
          After reading and analyzing hundreds of studies, I found limited
          empirical data demonstrating the efficacy of EdTech games for children
          with disabilities and many unanswered questions about how children's
          brains develop as they learn. I also discovered various research
          methods to investigate EdTech and how students learn, ranging from
          case studies to large-scale observational studies.
        </li>
        <li>
          <b>
            Past Project: Workshop proposal: Equity, Diversity, and Inclusion in
            the Research and Development of Educational Technology.{" "}
            <i>(Pending acceptance in AIED 2023)</i>
          </b>
          The proposed workshop aims to initiate conversations about equity and
          inclusion in educational technology research and development to help
          prosper a more inclusive research community and society. The workshop
          will include presentations about past research on digital learning
          tools that considers student demographics (disabilities, gender, race,
          and socio-economic status) from workshop organizers and guest
          speakers. We will also solicit papers from the AIED community about
          equitable and inclusive digital learning tools and invite selected
          authors to present their work. Lastly, the audience will participate
          in rich discussions about promoting equity and inclusion in future
          research.
        </li>
      </ul>

      <h1 className="mainTextSectionTitle">Enhancing Ability Lab at Cornell</h1>
      <p className="paragraphText">
        With guidance from Cornell Professor Shiri Azenkot, I am researching
        EdTech game accessibility and the assistive technology ecosystem. I am
        working on several projects:
      </p>
      <ul className="paragraphText bulletedList">
        <li>
          <b>
            Current Study: Challenges of Successful AT Implementation:
            Perspectives from AT Professionals.{" "}
          </b>
          Preliminary interviews with 23 Assistive Technology (AT) professionals
          confirmed that accessibility is often an afterthought in industry,
          accessibility research is underdeveloped, and there is limited
          knowledge transfer in the AT industry. I am now conducting the main
          interview study to better understand how children are supported in
          their use of technology and what challenges children and their
          supporters face when acquiring, selecting, and learning to use AT. I
          am collaborating with Dr. Catie Baker (Creighton University) and Dr.
          Lauren Milne (Macalester College) on this project, and we plan to
          submit a paper to ASSETS 2023
        </li>

        <li>
          <b>
            Current Study: How Parents Support Children with Vision Impairments
            in their use of Technology.
          </b>{" "}
          Motivated by the gap in research on how children with vision
          impairments use technology, I'm conducting an interview study with
          parents of children with vision impairments to understand how parents
          select and acquire assistive technology for their children and then
          teach their children how to use technology. I'm collaborating with Dr.
          Catie Baker (Creighton University) and Dr. Lauren Milne (Macalester
          College) to conduct this study, and we plan to submit a paper to CHI
          2023.
        </li>

        <li>
          <b>
            Current Study: Systematic Review of Game Accessibility Research.{" "}
          </b>{" "}
          Researchers have studied digital games for decades. “Games” are very
          broad and range from purely entertainment games, exergames,
          educational games, rehabilitation games, etc. More recently,
          researchers have investigated the use of games for people with
          disabilities, including adapting existing games to be accessible or
          developing games specifically for people with disabilities. To our
          knowledge, the current state of game accessibility across all game
          domains and disabilities is unknown. Thus, to help researchers
          continue developing the game accessibility field, I am conducting a
          systematic literature review of game accessibility and analyzing what
          accessible games have been developed and studied for people with
          disabilities, what type of research has been conducted on games for
          people with disabilities, how has game accessibility changed over
          time, and what gaps in the area require future research.
        </li>

        <li>
          <b>
            CPast Project: Developing an Accessibility Evaluation Method for
            EdTech Games. <i>(On hold)</i>{" "}
          </b>{" "}
          It is unknown whether commercially available EdTech games are
          accessible to students with physical disabilities, and we do not have
          an evaluation method to determine the accessibility of these games.
          After analyzing accessibility guidelines with various qualitative and
          quantitative techniques, I created a preliminary method to evaluate
          the accessibility of EdTech games. In the future, I will conduct an
          interview study with EdTech creators and users to refine my evaluation
          method, and then use the final method to evaluate commercial EdTech
          math games to reveal existing accessibility problems and demonstrate
          the benefits of my evaluation method. I will then provide design
          recommendations for EdTech creators to help make future academic and
          industry games more accessible.
        </li>
      </ul>
    </div>
  );
};

export default Research;
