import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "./../images/profile.png";

const StBoxMaster = styled.div`
  width: 100vw;
  display: flex;
  background: white;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StBoxWrap = styled.div`
  width: 80%;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
`;

const StTitle = styled.div`
  width: 20%;
  height: 50px;
  border-bottom: 1px solid gray;
  font-size: 2rem;
  text-align: center;
  font-family: "SBAggroB";
`;

const StAboutBox = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StText = styled.div`
  width: 60%;
  font-size: 1.511rem;
  line-height: 2.3rem;
`;
const StImg = styled.img`
  margin-left: 20px;
  width: 40%;
  max-width: 400px;
  height: 500px;
  object-fit: fill;
  border: 1px solid gray;
  border-radius: 15px;
  box-shadow: 5px 5px 5px gray;
`;

export default function About() {
  return (
    <>
      <StBoxMaster>
        <StBoxWrap>
          <StTitle>About Me</StTitle>
          <StAboutBox>
            <StText>
              {" "}
              <p>
                디자이너로써 개발자와 협업하는 기회가 있었습니다. <br />그 때
                "내가 디자인한 것을 직접 개발하면 얼마나 좋을까" 라는 생각이
                저를 설레게 하였습니다.
              </p>
              <p>
                그 설렘은 저에게 개발에 대한 열정을 갖게 해 주었고, <br />
                프론트엔드 개발자로써의 첫 발을 내딛으려고 합니다.
              </p>
              <p>
                사용자의 시선으로 고민하여 조금 더 나은 UX를 제공하고, <br />
                편한 UI를 보여주기 위해 노력합니다.
              </p>
              <p>
                늘 열린 생각으로 소통하며, 하나의 팀으로 일할 때 가장 큰 성과를
                낼 수 있다고 생각합니다. <br />
                팀의 목적 달성을 위해 상황에 맞게 유연하게 대응하고 <br /> 목표
                달성을 위해서라면 끈기 있게 문제를 파고들어 해결하려고
                노력합니다.
              </p>
            </StText>
            <StImg src={profile} />
          </StAboutBox>
        </StBoxWrap>
      </StBoxMaster>
    </>
  );
}
