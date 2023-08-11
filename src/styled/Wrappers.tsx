import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
`;

export const MovieViewLeftWrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  color: white;
  gap: 1.5rem;
`;

export const MovieViewRightWrapper = styled.div`
  background-color: black;
  height: 100%;
  width: 65%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: white;
  gap: 1.5rem;
  padding-left: 1.5rem;
  padding-right: 3rem;
`;

export const CenteringWrapperHorisontal = styled.div`
  display: flex;
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
  width: 70vw;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: flex-start;
`;
