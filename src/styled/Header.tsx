import { styled } from "styled-components";

export const HeadingWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  align-items: center;
  text-transform: uppercase;
  font-family: "Tiempos Headline Bold";
`;

export const HeadingTitleOne = styled.h3`
  letter-spacing: 0.15vh;
  font-size: 35px;
  font-weight: bold;
  font-family: "Tiempos Headline Bold";
  margin-bottom: 5px;
`;

export const HeadingTitleTwo = styled.h3`
  letter-spacing: 0.15vh;
  font-size: 35px;
  font-weight: bold;
  font-family: "Tiempos Headline Bold";
  margin-top: 10px;
`;

export const TextCard = styled.div`
  height: 50px;
  width: 170px;
  margin-left: 5rem;
  overflow: hidden;
  align-items: center;
`;

export const TextCardWrapper = styled.div`
  color: white;
  height: 50px;
  margin-bottom: 50px;
  padding: 2px 7px;
  text-align: center;
  box-sizing: border-box;
`;

export const TitleSlide = styled.div`
  animation: slide 5s linear infinite;
  background: rgb(219, 149, 50);
  font-size: 30px;
  font-weight: bold;
  font-family: "Tiempos Headline Bold";

  @keyframes slide {
    0% {
      margin-top: -300px;
    }
    5% {
      margin-top: -200px;
    }
    33% {
      margin-top: -200px;
    }
    38% {
      margin-top: -100px;
    }
    66% {
      margin-top: -100px;
    }
    71% {
      margin-top: 0px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

export const TitleSlideTwo = styled.div`
  animation: slide 5s linear infinite;
  background: rgb(75, 219, 50);
  font-size: 30px;
  font-weight: bold;
  font-family: "Tiempos Headline Bold";

  @keyframes slide {
    0% {
      margin-top: -300px;
    }
    5% {
      margin-top: -200px;
    }
    33% {
      margin-top: -200px;
    }
    38% {
      margin-top: -100px;
    }
    66% {
      margin-top: -100px;
    }
    71% {
      margin-top: 0px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;

export const TitleSlideThree = styled.div`
  animation: slide 5s linear infinite;
  background: rgb(50, 140, 219);
  font-size: 30px;
  font-weight: bold;
  font-family: "Tiempos Headline Bold";

  @keyframes slide {
    0% {
      margin-top: -300px;
    }
    5% {
      margin-top: -200px;
    }
    33% {
      margin-top: -200px;
    }
    38% {
      margin-top: -100px;
    }
    66% {
      margin-top: -100px;
    }
    71% {
      margin-top: 0px;
    }
    100% {
      margin-top: 0px;
    }
  }
`;
