import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const MovieViewLeftWrapper = styled.div`
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

export const BackToResultsButton = styled.div`
  display: flex;
  left: 260px;
  top: 50px;
  position: absolute;
`;

export const MovieViewRightWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  gap: 1rem;

  @media (min-width: 845px) {
    width: 55%;
    padding-left: 1.5rem;
    padding-right: 3rem;
    margin-right: 3rem;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const CenteringWrapperHorisontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  color: white;
  gap: 1rem;
`;

export const CenteringWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  color: white;
`;

export const LeftWrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  align-items: center;
  color: white;
`;

export const MovieResultWrapper = styled(CenteringWrapperHorisontal)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;
