import React from 'react'
import styled from 'styled-components'
import { useState } from "react";

 

//styled component 작성
const Container = styled.div`
   
    width: 306px;
    height: 302px;
    background-color: #F95965;
    border-radius: 20px;
    margin:auto;
    padding-right: 20px;
    
`;

const Text = styled.div`
  
    color: #FFFFFF;
    font-size:24px;
    font-weight: bold;
    position:relative;
    left: 20px;
    line-height:50px;
    padding-right: 20px;
    
`;

const Line = styled.div`
   border-top: 2px solid #FFFFFF;
  margin: 30px 0px;
`;

const Total = styled.div`
    color: #FFFFFF;
    font-size:24px;
    font-weight: bold;
    text-align: center;
    margin-top: -15px;
`


const Button = styled.button`
   background-color: #FFFFFF;
    color: #F95965;
    border: none;
    border-radius:20%;
    width: 40px;
    height: 40px;
    font-size: 24px;
    cursor: pointer;
    margin-right: 10px;
   
   
  `
const ButtonWrapper = styled.div`
margin-left: 180px;
margin-top: -49px;
`

const Header = styled.div`
font-size: 24px;
font-weight: 700;
text-align: center;
margin: 20px;
`

function MenuBlock({ selectedTeam }) {

  //const 메뉴명 = 
  const 가격 = 4000
  const[재고수량,set재고수량] = useState(0);
  const[판매수량,set판매수량] = useState(0);
  // const selectedTeam = {selectedTeam}
  const 현재수익 = 가격 * 판매수량;

  const ps = () => {
    if(재고수량 >= 0){
      set재고수량(이재수량=>이재수량+1);}
  };
  const pp = () => {
    
    set판매수량(이판수량=>이판수량+1);
  };
  const ms = () => {
    if (재고수량 > 0){
      set재고수량(이재수량=>이재수량-1);}
  };
  const mp = () => {
    if (판매수량 > 0){
      set판매수량(이판수량=>이판수량-1);
    }
  };
  return (
    <>
      <Header>
        {selectedTeam}팀
      </Header>
      <Container>
        <Text>
            메뉴명:핫도그
        </Text>
        <Text>
            가격: {가격}원
        </Text>
        <Text>재고 수량:{재고수량}<ButtonWrapper>
            <Button onClick={ms}>-</Button>
            <Button onClick={ps}>+</Button>
          </ButtonWrapper>
            
        </Text>
        <Text>판매 수량:{판매수량}<ButtonWrapper>
            <Button onClick={mp}>-</Button>
            <Button onClick={pp}>+</Button>
          </ButtonWrapper>
        </Text>
        <Line></Line>
        <Total>현재 수익: {현재수익}원</Total>
      </Container>
    </>
    
  )
}

export default MenuBlock;
