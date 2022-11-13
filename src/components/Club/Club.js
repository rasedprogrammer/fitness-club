import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import GymCart from "../GymCart/GymCart";
import OwnerActivity from "../OwnerActivity/OwnerActivity";
import Question from "../Question/Question";
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
		const newGymCart = [...gymCart, equipmentCart];
		setGymCart(newGymCart);
	};
	return (
		<div>
			<div className="club-container">
				<div className="gym-container">
					<h1 className="titleTag">
						<FontAwesomeIcon className="icon" icon={faPersonWalking} />
						Fitness Club
					</h1>
					<h3 className="select-option">Select Today's Exercise</h3>
					<div className="gym-cart">
						{gymEquipment.map((equipmentCart) => (
							<GymCart
								key={equipmentCart._id}
								equipmentCart={equipmentCart}
								handleAddToClubCart={handleAddToClubCart}
							></GymCart>
						))}
					</div>
					<Question></Question>
				</div>
				<div className="personal-info">
					<OwnerActivity gymCart={gymCart}></OwnerActivity>
				</div>
			</div>
		</div>
	);
};

export default Club;
