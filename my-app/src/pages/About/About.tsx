import React from 'react';

import './About.css'

const About = () => {
	return (
		<div className="aboutPageContainer">
			{/* Div for the left side */}
			<div className="imageSectionContainer">
				<img
          src="./headshot.jpg"
          className="AdeleImg"
          alt="Headshot of Adele"
        />
				<div className="underImageText">
					<h2 className="decreaseMobileHeight"> Adele Smolansky</h2>
					<p className="decreaseMobileHeight">B.S Computer Science</p>
					<p className="decreaseMobileHeight">Cornell University</p>
					<p className="decreaseMobileHeight">as2953@cornell.edu</p>

					{/* Links */}
					<div className="linksContainer">
						<p className="decreaseMobileHeight">LinkedIn</p>
						<p className="decreaseMobileHeight">Resume</p>
					</div>
					
				</div>
				
			</div>

			<div className="mainTextContainer">
				<h1 className="mainTextSectionTitle">About</h1>
				<p className="paragraphText">Adele Smolansky is a senior studying computer science at Cornell University</p>

				<h2 className="mainTextSectionTitle">Interests</h2>
				<ul className="paragraphText">
					<li>Early math education and cognitive development</li>
					<li>Educational technology</li>
					<li>Website accessibility</li>
					<li>Univeristy accessibility curriculum development</li>
				</ul>

				<h2 className="mainTextSectionTitle">Experiences</h2>
				<h3 className="secondHeadingText">AI-Learners</h3>
				<p className="paragraphText">Adele founded AI-Learners in June 2020 and has worked with dozens of students and faculty from Cornell University to develop the company. 
					AI-Learners is an educational technology company that helps students of all abilities learn math.</p>

				<h3 className="secondHeadingText">Google</h3>
				<p className="paragraphText">Adele worked at Google for two summers as a Software Engineer.</p>
				<ul className="paragraphText bulletedList">
					<li>Summer 2021: STEP Intern on the Google Drive Team</li>
					<li>Summer 2022: SWE Intern on the Android Accessibility Team</li>
				</ul>

				<h3 className="secondHeadingText">Research</h3>
				<p className="paragraphText">Adele is leading multiple research projects across two research labs at Cornell University.</p>
				<ul className="paragraphText bulletedList">
					<li>Future of Learning Lab, Professor Rene Kizilcec</li>
					<li>Enhancing Ability Lab, Professor Shiri Azenkot</li>
				</ul>

				<h3 className="secondHeadingText" >Teaching Assistant</h3>
				<p className="paragraphText">Since her undergraduate junior year, Adele has been a Teaching Assistant for two courses at Cornell University</p>
				<ul className="paragraphText bulletedList">
					<li>NBA 3000: Designing New Ventures</li>
					<li>eLab Student Business Accelerator</li>
				</ul>

			</div>
			
		</div>
	)
};

export default About;
