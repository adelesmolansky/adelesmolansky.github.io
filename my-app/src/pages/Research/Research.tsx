import React from 'react';

import '../pages.css';

const Research = () => {
return (
	<div className="pageContainer">
	  <h1 className="mainTextSectionTitle">Future of Learning Lab</h1>
		<p className="paragraphText">
			With guidance from Cornell Professor Rene Kizilcec, I am researching adaptive 
			learning algorithms and optimal game designs to help kids with cognitive 
			disabilities learn early math skills.
		</p>
		<p className="paragraphText">I am working on two projects:</p>
		<ul className="paragraphText bulletedList">
			<li><b>Systematic review of existing research in adaptive algorithms for early 
				mathematics. </b> We are trying to understand how current research in this areas 
				has been applied to students with cognitive disabilities and thus what is known 
				about how to develop adaptive algorithms in edtech that personalize to students 
				cognitive abilities.</li>
				<li><b>Experimental and interview study to research the impact of specific 
					game design features on the accuracy and enjoyment during a math game for young students
					with cognitive disabilities. </b> We are conducting researching with special
					needs students and educators in the local Ithaca area to develop edtech math games
					to help children improve their early math skills.</li>
		</ul>

		<h1 className="mainTextSectionTitle">Enhancing Ability Lab</h1>
		<p className="paragraphText">
			With guidance from Cornell Professor Shiri Azenkot, I am researching the 
			accessibility of edtech math games for students with physical disabilities.
		</p>
		<p className="paragraphText">I am working on two projects:</p>
		<ul className="paragraphText bulletedList">
			<li><b>Developing Criteria for Evaluating the Accessibility of Edtech Games. </b> 
				We currently do not know whether commerically available edtech games are accessible
				for students with physical disabilities. We also do not have an evaluation method 
				that can help us determine the accessibility of these games. Through literature 
				review and interview studies, we are designing an evaluation method and will use 
				our method to evaluate the accessibility of current websites.</li>

			<li><b>Understanding the causes of Inefficiencies and Unfairness in the 
				Assistive Technology Industry. </b> As many children with physical disabilities
				use assistive technology (AT) to navigate websites, we are interesting in the industry 
				of AT that is responsible for creating and supplying students with AT.</li>
		</ul>

	</div>
);
};

export default Research;
