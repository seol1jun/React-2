import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantData from "../data/restaurantData";
import styled from "styled-components";

const RestaurantList = () => {
  return (
    <ListContainer>
      {restaurantData.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 */
  flex-wrap: wrap;         /* 여러 줄로 자동 정렬 */
  margin-top: 300px; 
  
  /*
  display: flex; → 가로 배치
  justify-content: center; → 가로 중앙 정렬
  flex-wrap: wrap; → 공간이 부족하면 줄 바꿈
  margin-top: 20px; → 위쪽 여백
  */
`;

export default RestaurantList;
