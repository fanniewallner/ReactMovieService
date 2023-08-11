import { styled } from "styled-components";

export const WrapperLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const SpinnerLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-top: 5px solid white;
  border: 5px solid rgba(237, 206, 30, 0.3);
  animation: loading 1s linear infinite;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <WrapperLoader>
      <SpinnerLoader></SpinnerLoader>
    </WrapperLoader>
  );
};
