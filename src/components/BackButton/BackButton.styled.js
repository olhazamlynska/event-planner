import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'images/icons/bigArrow.svg';
import { Link } from 'react-router-dom';

export const BackBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 67px;
  height: 24px;
  margin-top: 42px;
  margin-bottom: 24px;
`;
export const ArrowIconStyled = styled(ArrowIcon)`
  transform: rotate(-90deg);
  width: 24px;
  height: 18px;
  stroke: ${p => p.theme.colors.violet};
`;

export const TextStyled = styled.span`
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.violet};
`;
