import React, { useState } from 'react';
import List from '../components/List';
import styled from 'styled-components';
import MenuBlock from '../components/MenuBlock';

const Background = styled.div`
  background: #F7E8DD;
  width: 100vw;
  height: 100vh;
  scrollbar-width: none;
  .scroll::-webkit-scrollbar {
    display: none;
  }
`;

function SellerHome() {
  const [selectedTeam, setSelectedTeam] = useState(); // 선택된 팀의 정보를 저장하는 상태

  const handleTeamClick = (team) => {
    setSelectedTeam(team); // 클릭된 팀의 정보를 상태에 저장
  };

  return (
    <Background>
      <article>
        <section className="team">
          <h1>만원 프로젝트</h1>
          <ol>
            {[ "1팀", "2팀", "3팀", "4팀", "5팀", "6팀", "7팀", "8팀", "9팀", "10팀", "11팀", "12팀", "13팀", "14팀", "15팀", "16팀", "17팀", "18팀",].map((team) => {
              return <List key={team} team={team} onClick={handleTeamClick} />;
            })}
          </ol>
        </section>
      </article>
      {selectedTeam  && <MenuBlock selectedTeam={selectedTeam} />} {/* 선택된 팀의 정보에 따라 MenuBlock을 보여줌 */}
    </Background>
  );
}

export default SellerHome;
