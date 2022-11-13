import React from "react";
import "./GymCart.css";

const GymCart = (props) => {
	// console.log(props.equipmentCart);
	const { equipmentCart, handleAddToClubCart } = props;
	const { title, age, image, second, about } = equipmentCart;
	return (
		<div className="gymEquipment-container">
			<img className="gymCartImg" src={image} alt="Gym Equipment Img" />
			<h3>{title}</h3>
			<p>Ages: {age}</p>
			<p>
				Second <b>{second}s</b>
			</p>
			<p className="about">{about}</p>
			<button onClick={() => handleAddToClubCart(equipmentCart)}>
				Add To List
			</button>
		</div>
	);
};

export default GymCart;
