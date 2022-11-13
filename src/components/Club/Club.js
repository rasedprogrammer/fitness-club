import React, { useEffect, useState } from "react";
import GymCart from "../GymCart/GymCart";
import OwnerActivity from "../OwnerActivity/OwnerActivity";
import "./Club.css";

const Club = () => {
	const [gymEquipment, setGymEquipment] = useState([]);
	const [gymCart, setGymCart] = useState([]);
	useEffect(() => {
		fetch("fakeData.json")
			.then((response) => response.json())
			.then((data) => setGymEquipment(data));
	}, []);

	const handleAddToClubCart = (equipmentCart) => {
		// console.log(equipmentCart);
		const newGymCart = [...gymCart, equipmentCart];
		setGymCart(newGymCart);
	};

	// console.log(gymEquipment);
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
								handleAddToClubCart={handleAddToClubCart}
							></GymCart>
						))}
					</div>
				</div>
				<div>
					<OwnerActivity gymCart={gymCart}></OwnerActivity>
				</div>
			</div>
		</div>
	);
};

export default Club;
