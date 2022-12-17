import styled, { keyframes } from "styled-components";

const Spinner = () => {
  return <SpinnerAction />;
};

const Spin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerAction = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${Spin} 1s linear infinite;
`;

export default Spinner;
