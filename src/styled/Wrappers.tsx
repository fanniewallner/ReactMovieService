import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  flex-direction: column;

  @media (min-width: 845px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const MovieViewLeftWrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 1.5rem;

  @media (min-width: 845px) {
    width: 35%;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

export const MovieViewCenteringContent = styled(MovieViewLeftWrapper)`
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;

  @media (min-width: 845px) {
    width: 30%;
    align-items: flex-end;
  }
`;

export const MovieViewRightWrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;

  color: white;
  gap: 1.5rem;

  @media (min-width: 845px) {
    width: 55%;
    padding-left: 1.5rem;
    padding-right: 3rem;
    margin-right: 3rem;
    align-items: flex-start;
  }
`;

export const CenteringWrapperHorisontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  background-color: black;
  gap: 1rem;
`;

export const CenteringWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  color: white;
  background-color: black;
`;

export const MovieResultWrapper = styled(CenteringWrapperHorisontal)`
  width: 100vw;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (min-width: 845px) {
    width: 80vw;
  }
`;
