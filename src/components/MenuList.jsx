import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    width: 316px;
    height: 202px;
    background-color: #71E5B6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    font-size: 24px;
    font-weight: 500; 
    
`;

function MenuList(props) {
  return (
    <Block>
      <Text>메뉴명: {props.MenuName}</Text>
      <Text>가격: {props.Price}</Text>
      <Text>현재 재고 수량: {props.Stock}</Text>
    </Block>
  );
}

export default MenuList;