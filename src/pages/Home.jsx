import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StHomeMaster = styled.div`
  width: 100vw;
  display: flex;
  background: #171717;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StHomeWrap = styled.div`
  width: 80%;
  padding: 50px;
  display: table-cell;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
`;

const StName = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 4rem;
  font-family: "SBAggroB";
  color: white;
`;
const StDivider = styled.div`
  text-align: center;
  padding: 20px;
  .divider {
    width: 3.25rem;
    height: 0;
    margin: 1.5rem auto;
    border: none;
    border-top: 0.2rem solid white;
    opacity: 0.7;
  }
`;
const StIntro = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 1.25rem;
  color: #ffffffbf;
`;

export default function Home() {
  return (
    <>
      <StHomeMaster>
        <StHomeWrap>
          <StName>
            프론트엔드 개발자
            <br /> 김정훈입니다.
          </StName>
          <StDivider>
            <hr className="divider" />
          </StDivider>

          <StIntro>
            안녕하세요. <br /> 사용자의 입장에서 UX/UI를 고민하고 <br /> 항상
            소통하며 애자일하게 일하는 <br /> 프론트엔드 개발자 김정훈입니다.{" "}
          </StIntro>
        </StHomeWrap>
      </StHomeMaster>
    </>
  );
}
