import React from "react";
import { useState } from "react";
import styled from "styled-components";
// import js from "../images/js.png";

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
    <>
      <div className="container p-16 flex relative justify-center min-h-screen">
        <div className="flex flex-col relative z-20">
          <h1 className="font-bebas-neue uppercase sm:text-4xl font-black flex flex-col  text-white text-center">
            skills
          </h1>
          <div className="flex flex-col lg:flex-row pt-10 w-full items-center">
            {" "}
            <div>
              <p className="text-sm sm:text-2xl text-gray-700 dark:text-white my-8 break-keep">
                디자이너로써 개발자와 협업하는 기회가 있었습니다. <br />그 때
                "내가 디자인한 것을 직접 개발하면 얼마나 좋을까" 라는 생각이
                저를 설레게 하였습니다.
              </p>
              <p className="text-sm sm:text-2xl text-gray-700 dark:text-white my-8 break-keep">
                그 설렘은 저에게 개발에 대한 열정을 갖게 해 주었고, <br />
                프론트엔드 개발자로써의 첫 발을 내딛게 해주었습니다.
              </p>
              <p className="text-sm sm:text-2xl text-gray-700 dark:text-white my-8 break-keep">
                문제에 직면하는 것을 두려워 하지 않고, <br />그 문제를 해결하기
                위한 방법을 고민하는 개발자가 되기 위해 항상 고민합니다.
              </p>
              <p className="text-sm sm:text-2xl text-gray-700 dark:text-white my-8 break-keep">
                늘 열린 생각으로 소통하며, 하나의 팀으로 일할 때 가장 큰 성과를
                낼 수 있다고 생각합니다. <br />
                팀의 목적 달성을 위해 상황에 맞게 유연하게 대응하고 <br /> 목표
                달성을 위해서라면 끈기 있게 문제를 파고들어 해결하려고
                노력합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
