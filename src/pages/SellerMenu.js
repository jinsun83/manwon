import React from 'react'
import styled from 'styled-components';
import MenuBlock from '../components/MenuBlock';

const Background = styled.div`
    background: #F7E8DD;
    width: 100vw;        // 화면 전체 너비
    height: 100vh;       // 화면 전체 높이

`;



function SellerMenu() {
 // const [count재고수량,setCount재고수량]
  //const [count판매수량,setCount판매수량]
  return (
    <Background>
      <MenuBlock></MenuBlock>
    </Background>
  )
}

export default SellerMenu
