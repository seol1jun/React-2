import React from "react";
import { useParams } from "react-router-dom";
import restaurantData from "../data/restaurantData";
import styled from "styled-components";

const RestaurantDetail = () => {
  const { id } = useParams(); // URL의 id 가져오기
  const restaurant = restaurantData.find((r) => r.id === parseInt(id));

  if (!restaurant) return <h2>레스토랑 정보를 찾을 수 없습니다.</h2>;

  return (
    <DetailContainer>
      <Title>{restaurant.name}</Title> {/* 이름은 크게 */}
      <Description>{restaurant.description}</Description>
      <Address>{restaurant.address}</Address>

      <MenuTitle>메뉴</MenuTitle>
      <MenuList>
        {restaurant.menus.map((menu, index) => (
          <MenuItem key={index}>
            {menu.name} - {menu.price}
          </MenuItem>
        ))}
      </MenuList>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;   /* 가운데 정렬 */
  margin-top: 100px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Address = styled.p`
  margin: 10px 0 30px 0;
  color: #555;
`;

const MenuTitle = styled.h3`
  margin-bottom: 10px;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
`;

const MenuItem = styled.li`
  margin: 5px 0;
`;

export default RestaurantDetail;
