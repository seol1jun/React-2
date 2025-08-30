import React from "react";
import "./RestaurantCard.css";


const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={restaurant.image} alt={restaurant.name}/>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.category}</p>
      <p>{restaurant.description}</p>
    </div>
  );
};

export default RestaurantCard;
