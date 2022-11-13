import React from "react";
import "./Question.css";

const Question = () => {
	return (
		<div className="question-container">
			<h1>React Releted Question</h1>
			<h2>Question-01: How does react work?</h2>
			<h5>
				Answer:{" "}
				<p>
					React uses a declarative paradigm that makes it easier to reason about
					your application and aims to be both efficient and flexible. It
					designs simple views for each state in your application, and React
					will efficiently update and render just the right component when your
					data changes.
				</p>
			</h5>
			<h2>Question-02: What is the difference between props vs state?</h2>
			<h5>
				Answer:{" "}
				<p>
					Props are used to pass data from one component to another. The state
					is a local data storage that is local to the component only and cannot
					be passed to other components. The this. setState property is used to
					update the state values in the component.
				</p>
			</h5>
			<h2>Question-03: How the useEffect Hook Works?</h2>
			<h5>Answer: Thers is much more uses of UseEffect Hook.</h5>
			<ol>
				<li>Run useEffect on State Change</li>
				<li>Run useEffect When a Prop Changes</li>
				<li>Focus On Mount</li>
				<li>Fetch Data With useEffect</li>
				<li>Re-fetch When Data Changes</li>
			</ol>
		</div>
	);
};

export default Question;
