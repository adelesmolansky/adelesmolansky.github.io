import React from "react";

import "../pages.css";

const Research = () => {
  return (
    <div className="pageContainer">
      <h1 className="mainTextSectionTitle">Future of Learning Lab</h1>
      <p className="paragraphText">
        With guidance from Cornell Professor Rene Kizilcec, I am researching
        adaptive learning algorithms and optimal game designs to help kids with
        cognitive disabilities learn early math skills. I am working on two
        projects:
      </p>
      <ul className="paragraphText bulletedList">
        <li>
          <b>
            Systematic Review of Adaptive Math Learning Tools for Elementary
            Schools Students:{" "}
          </b>{" "}
          I'm conducting a systematic literature review of adaptive EdTech math
          programs, analyzing how existing machine learning algorithms and
          program designs consider students with diverse cognitive abilities.
          After reading and analyzing hundreds of studies, I found limited
          empirical data demonstrating the efficacy of EdTech games for children
          with disabilities and many unanswered questions about how children's
          brains develop as they learn. I also discovered various research
          methods to investigate EdTech and how students learn, ranging from
          case studies to large-scale observational studies. I'm excited to
          share my findings with other researchers by submitting a paper to the
          AIED conference in January and presenting my work to other students.
        </li>
        <li>
          <b>Exploring Digital Math Game Features for Early Learners: </b> My
          second project at the Future of Learning Lab involves a three-part
          study with local Ithaca schools to investigate how to design and
          integrate EdTech games into PreK-1st grade classrooms for students
          with disabilities. Motivated by limited research on the design of
          EdTech games for elementary school children, I developed a novel model
          for teaching early mathematics to children with cognitive
          disabilities. I'm now conducting an interview and observational study
          with teachers and students to translate my model into game designs.
          Lastly, a controlled experiment will demonstrate the efficacy of the
          games. My goal is to submit a paper to ASSETS 2023.
        </li>
      </ul>

      <h1 className="mainTextSectionTitle">Enhancing Ability Lab</h1>
      <p className="paragraphText">
        With guidance from Cornell Professor Shiri Azenkot, I am researching
        EdTech game accessibility and the assistive technology ecosystem. I am
        working on several projects:
      </p>
      <ul className="paragraphText bulletedList">
        <li>
          <b>
            Developing an Accessibility Evaluation Method for EdTech Games:{" "}
          </b>
          It is unknown whether commercially available EdTech games are
          accessible to students with physical disabilities, and we do not have
          an evaluation method to determine the accessibility of these games.
          After analyzing accessibility guidelines with various qualitative and
          quantitative techniques, I created a preliminary method to evaluate
          the accessibility of EdTech games. I'm now conducting an interview
          study with EdTech creators and users to refine my evaluation method.
          Applying the updated method to commercial EdTech math games will
          reveal existing accessibility problems and demonstrate the benefits of
          my evaluation method. I will then provide design recommendations for
          EdTech creators to help make future academic and industry games more
          accessible. My goal is to submit a paper to ASSETS 2023.
        </li>

        <li>
          <b>
            How Parents Support Children with Vision Impairments in their use of
            Technology:
          </b>{" "}
          Motivated by the gap in research on how children with vision
          impairments use technology, I'm conducting an interview study with
          parents of children with vision impairments to understand how parents
          select and acquire assistive technology for their children and then
          teach their children how to use technology. I'm collaborating with Dr.
          Catie Baker (Creighton University) and Dr. Lauren Milne (Macalester
          College) to conduct this study, and we plan to submit a paper to
          ASSETS 2023.
        </li>

        <li>
          <b>Challenges in the Assistive Technology Industry:</b> While
          attending the Closing the Gap Conference in October 2022, I
          interviewed twenty-three Assistive Technology (AT) professionals to
          learn about their experiences in the industry. My findings confirmed
          that accessibility is often an afterthought for many companies,
          accessibility research is underdeveloped, and there is limited
          knowledge transfer in the AT industry. However, I also learned that
          many accessibility specialists, speech-language pathologists, and
          special needs educators are looking for better ways to support
          children, and accessible Edtech for Elementary Math with AI-Learnersey
          believe that more advanced technology and knowledge are needed to
          improve accessibility solutions. I will conduct additional interviews
          with AT specialists to further understand how AT professionals support
          children with motor, vision, and speech impairments and propose ways
          that data analytics and modern technology advances can improve the AT
          industry. I am also collaborating with Dr. Baker and Dr. Milne on this
          project, and we plan to submit a paper to CHI 2023.
        </li>
      </ul>
    </div>
  );
};

export default Research;
