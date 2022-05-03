import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const StHeaderMaster = styled.div`
  width: 80vw;
  height: 70px;
  position: fixed;
  opacity: 0.9;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .icon {
    display: none;
    width: 100%;
    color: gray;
    cursor: pointer;
    :hover {
      color: black;
    }
  }
  @media all and (max-width: 768px) {
    .icon {
      display: inline-block;
      justify-content: flex-end;
      margin-left: 80px;
    }
  }
`;

const StLeftHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 800;
  cursor: pointer;
  color: gray;
  :hover {
    color: black;
  }
  @media all and (max-width: 768px) {
    font-size: 1.5rem;
    width: 80%;
  }
`;
const StRightHeader = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const StMenuText = styled.nav`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: gray;
  cursor: pointer;
  font-size: 1rem;
  :hover {
    color: black;
  }
  @media all and (max-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <>
      <StHeaderMaster>
        <StLeftHeader
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Hoon's Portfolio
        </StLeftHeader>

        <StRightHeader>
          <StMenuText>Home</StMenuText>
          <StMenuText>About</StMenuText>
          <StMenuText>Skills</StMenuText>
          <StMenuText>Projects</StMenuText>
          <StMenuText>Contact</StMenuText>
          <FontAwesomeIcon className="icon" icon={faBars} size={"2x"} />
        </StRightHeader>
      </StHeaderMaster>
    </>
  );
}
