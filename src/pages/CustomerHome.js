import React from 'react';
import styled from 'styled-components';
import MenuList from '../components/MenuList';
import ManwonText from '../components/ManwonText';

const Background = styled.div`
    background: #F3FDF9;
    width: 100vw;
    height: 100vh;
   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
    justify-content: center;
`;

const MenuWrapper = styled.div`
    flex-basis: calc(33.33% - 20px);
    display: flex;
    justify-content: center;
`;

function CustomerHome() {
  return (
    <Background>
      <ManwonText />
      <Container>
        <MenuWrapper>
          <MenuList MenuName="비빔면" Price="4,000원" Stock="20개" />
        </MenuWrapper>
        <MenuWrapper>
          <MenuList MenuName="아이싱쿠키" Price="4,000원" Stock="20개" />
        </MenuWrapper>
        <MenuWrapper>
          <MenuList MenuNameenuName="아이스티" Price="4,000원" Stock="20개" />
        </MenuWrapper>
        <MenuWrapper>
          <MenuList MenuName="마라탕" Price="4,000원" Stock="20개" />
        </MenuWrapper>
        <MenuWrapper>
          <MenuList MenuName="3색 콘 아이스크림" Price="4,000원" Stock="20개" />
        </MenuWrapper>
        <MenuWrapper>
          <MenuList MenuName="프렌치토스트" Price="4,000원" Stock="20개" />
        </MenuWrapper>
        <MenuWrapper>
          <MenuList MenuName="고양이 스티커" Price="4,000원" Stock="20개" />
        </MenuWrapper>
        <MenuWrapper>
          <MenuList MenuName="비빔면" Price="4,000원" Stock="20개" />
        </MenuWrapper>
      </Container>
    </Background>
  );
}

export default CustomerHome;