import React, { useEffect, useState } from "react";
import GymCart from "../GymCart/GymCart";
import "./Club.css";

const Club = () => {
	const [gymEquipment, setGymEquipment] = useState([]);
	useEffect(() => {
		fetch("fakeData.json")
			.then((response) => response.json())
			.then((data) => setGymEquipment(data));
	}, []);
	console.log(gymEquipment);
	return (
		<div>
			<div className="club-container">
				<div className="gym-container">
					<h2>Fitness Club</h2>
					<h4>Select Today's Exercise</h4>
					<div className="gym-cart">
						{gymEquipment.map((equipmentCart) => (
							<GymCart
								key={equipmentCart.id}
								equipmentCart={equipmentCart}
							></GymCart>
						))}
					</div>
				</div>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Club;
