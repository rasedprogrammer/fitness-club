import React, { useState } from "react";
import "./OwnerActivity.css";

const OwnerActivity = (props) => {
	const { gymCart } = props;
	const [secondTimes, setSecondTimes] = useState([0]);

	let totalSeconds = 0;
	for (const cart of gymCart) {
		totalSeconds = totalSeconds + cart.second;
	}
	// let setSecondTimes = 0;

	const brackTimes = (event) => {
		const time = event.target.innerText;
		setSecondTimes(time);
	};

	return (
		<div className="info-container">
			<div className="profile-header-container">
				<img
					src="https://avatars.githubusercontent.com/u/75846499?v=4"
					alt=""
				/>
				<div>
					<h4>Md Rased Molla</h4>
					<p>Badda, Dhaka, Bangladesh</p>
				</div>
				<div className="personal-info"></div>
			</div>
			<div className="break-container">
				<h2>Add A Brack</h2>
				<div className="bracks-times">
					<button className="timeBtn" onClick={brackTimes}>
						10s
					</button>
					<button className="timeBtn" onClick={brackTimes}>
						20s
					</button>
					<button className="timeBtn" onClick={brackTimes}>
						30s
					</button>
					<button className="timeBtn" onClick={brackTimes}>
						40s
					</button>
					<button className="timeBtn" onClick={brackTimes}>
						50s
					</button>
				</div>
			</div>
			<div className="showBrackAndTimes">
				<h2>Exercise Details</h2>
				<h4>
					<b>Exercise Time</b> {totalSeconds} seconds
				</h4>
				<h4>Brack time: {secondTimes}</h4>
			</div>
		</div>
	);
};

export default OwnerActivity;
