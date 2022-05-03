import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StAboutMaster = styled.div`
  width: 100vw;
  display: flex;
  background: blue;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const StAboutWrap = styled.div`
  width: 80%;
  padding: 50px;
  display: table-cell;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
`;

const SyAboutme = styled.div`
  height: 50px;
  border-bottom: 2px solid gray;
  font-size: 2rem;
`;

export default function About() {
  return (
    <>
      <StAboutMaster>
        <StAboutWrap>
          <SyAboutme>About Me</SyAboutme>
        </StAboutWrap>
      </StAboutMaster>
    </>
  );
}
