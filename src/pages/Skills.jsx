import React from "react";
import { useState } from "react";
import styled from "styled-components";
import js from "../images/js.png";

const StBoxMaster = styled.div`
  width: 100%;
  display: flex;
  background: #f9c51d;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SkiilsBox = styled.div`
  width: 100%;
  margin-bottom: 40px;
  background-color: #373a40;
  padding: 20px;
`;
const SkillsName = styled.div`
  font-size: 25px;
  color: #fff;
  font-weight: bold;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;
const SkillsList = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  box-shadow: 3px 3px 3px rgba(254, 254, 254, 0.2);
  cursor: pointer;
`;
const SkillsImg = styled.img`
  margin-left: 10px;
  margin-right: 15px;
  max-height: 55px;
`;
const SkillsTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 600;
`;

export default function Skills() {
  

  
  return (
    <StBoxMaster>
      <StBoxWrap>
        <StTitle>Skills</StTitle>
        <StAboutBox>
          <SkiilsBox>
            <SkillsName>Language</SkillsName>
            <SkillsList>
              <SkillsImg src={js} />
              <SkillsTitle>JavaScript</SkillsTitle>
            </SkillsList>
            <SkillsList>
              <SkillsImg src={js} />
              <SkillsTitle>HTML</SkillsTitle>
            </SkillsList>
            <SkillsList>
              <SkillsImg src={js} />
              <SkillsTitle>CSS</SkillsTitle>
            </SkillsList>
          </SkiilsBox>
          <SkiilsBox>git remote 확인</SkiilsBox>
          <SkiilsBox>git remote 확인</SkiilsBox>
          <SkiilsBox>git remote 확인</SkiilsBox>
        </StAboutBox>
      </StBoxWrap>
    </StBoxMaster>
  );
}
