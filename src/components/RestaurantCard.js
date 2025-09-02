import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h3>{restaurant.name}</h3>
      <Category>[{restaurant.category}]</Category>
      <p>{restaurant.description}</p>
      <Address>{restaurant.address}</Address>
      <InfoButton onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
        자세히 보기
      </InfoButton>
    </Card>
  );
};

/**
CSS에서 text-align: center
  => 부모 블록 요소 안의 인라인(inline)·인라인 블록(inline-block) 요소의 텍스트 정렬을 지정하는 속성이에요. 즉, 지금은 Card가 전체를 묶고 있으니
  부모요소 혹은, 상위요소임. <Image>, <h3>, <Category>, <p>, <Address>, <InfoButton>는 자식 요소(Children / 하위 요소)
Card에 text-align: center;를 주면 h3, p 같은 텍스트 계열 태그는 가운데 정렬 <img> 같이 인라인 요소도 가운데 정렬 

하지만, **block 요소(div, button 등)**는 text-align 영향을 받지 않아요 
예: 지금 InfoButton은 styled-components에서 button이 block 요소라서 text-align이 안 먹습니다.
이런 경우엔 margin: 0 auto; display: block;을 줘야 가로 가운데 정렬이 돼요.
 */

const Card = styled.div`
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin: 12px;
  text-align: center;   /* 카드 안의 모든 텍스트 가운데 정렬 */
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Category = styled.p`
  font-weight: bold;
  color: #555;
`;

const Address = styled.p`
  font-size: 0.9rem;
  color: #777;
`;

const InfoButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default RestaurantCard;
