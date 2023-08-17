import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'images/icons/arrow.svg';

export const LangSelect = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1;
  text-align: center;
  cursor: pointer;
  padding: 12px;
  margin-left: 56px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.selectBG};
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.boxShadow};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: 0;
  }
`;

export const ArrowIconStyled = styled(ArrowIcon)`
  margin-left: 4px;
`;
export const StyledList = styled.div`
  position: absolute;
  top: 55px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 1;
  width: 100%;
  padding: 16px 12px 16px 12px;
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.selectBG};
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.boxShadow};
`;

export const LangItem = styled.div`
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  text-align: left;
  line-height: 1.25;
  border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  color: ${p => p.theme.colors.lightGrey};
  &:hover {
    color: ${p => p.theme.colors.violet};
  }
`;
