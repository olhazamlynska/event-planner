import { ArrowIconStyled, BackBtn, TextStyled } from './BackButton.styled';

const BackButton = ({ to }) => {
  return (
    <BackBtn to={to}>
      <ArrowIconStyled />
      <TextStyled>Back</TextStyled>
    </BackBtn>
  );
};

export default BackButton;
