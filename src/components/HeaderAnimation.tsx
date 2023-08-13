import {
  HeadingTitleOne,
  HeadingTitleTwo,
  HeadingWrapper,
  TextCard,
  TextCardWrapper,
  TitleSlide,
  TitleSlideThree,
  TitleSlideTwo,
} from "../styled/Header";

export const Header = () => {
  return (
    <HeadingWrapper>
      <HeadingTitleOne>Find your next</HeadingTitleOne>
      <TextCard>
        <TextCardWrapper>
          <TitleSlide className="titleSlide">Movie</TitleSlide>
        </TextCardWrapper>
        <TextCardWrapper>
          <TitleSlideTwo className="titleSlideTwo">Series</TitleSlideTwo>
        </TextCardWrapper>
        <TextCardWrapper>
          <TitleSlideThree className="titleSlideThree">Plot</TitleSlideThree>
        </TextCardWrapper>
      </TextCard>
      <HeadingTitleTwo>at MovieFinder</HeadingTitleTwo>
    </HeadingWrapper>
  );
};
