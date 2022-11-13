import React, { useState } from "react";
import "./OwnerActivity.css";

const OwnerActivity = (props) => {
	const { gymCart } = props;
	const [secondTimes, setSecondTimes] = useState([]);

	let totalSeconds = 0;
	for (const cart of gymCart) {
		totalSeconds = totalSeconds + cart.second;
	}

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
				<h3>Add A Brack</h3>
				<div id="bracks-times" className="bracks-times">
					<button onClick={brackTimes}>10s</button>
					<button onClick={brackTimes}>20s</button>
					<button onClick={brackTimes}>30s</button>
					<button onClick={brackTimes}>40s</button>
					<button onClick={brackTimes}>50s</button>
				</div>
			</div>
			<h3>Exercise Details</h3>
			<h5>Exercise Time {totalSeconds} seconds</h5>
			<h5>time: {secondTimes}</h5>
		</div>
	);
};

export default OwnerActivity;
