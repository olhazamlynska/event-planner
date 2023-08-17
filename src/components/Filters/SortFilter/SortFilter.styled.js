import { styled } from 'styled-components';
import { ReactComponent as BigArrowIcon } from 'images/icons/bigArrow.svg';
import { ReactComponent as SortIcon } from 'images/icons/sort.svg';

export const StyledWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${p => (p.active === 'true' ? '170px' : '56px')};
  height: 56px;
  margin-left: 24px;
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 4px 9px 0px #a68dae47;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => (p.active === 'true' ? '170px' : '129px')};
    color: ${p => p.theme.colors.selectBG};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 129px;
  }
`;
export const StyledSelect = styled.button`
  position: absolute;
  right: ${p => (p.active === 'true' ? '-12px' : '0')};
  display: flex;
  align-items: center;
  z-index: ${p => (p.active === 'true' ? '1' : '0')};
  width: ${p => (p.active === 'true' ? '170px' : '56px')};
  height: 56px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1;
  text-align: left;
  cursor: pointer;
  padding: ${p => (p.active === 'true' ? '16px 24px' : '12px')};
  color: ${p => (p.active === 'true' ? '#7B61FF' : '#3F3F3F')};
  background-color: ${p => p.theme.colors.selectBG};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color ${p => p.theme.transitions.all};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: ${p => (p.active === 'true' ? '160px' : '129px')};
    padding: ${p => (p.active === 'true' ? '16px 24px' : '16px')};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 129px;
  }
  &:hover {
    color: ${p => p.theme.colors.selectBG};
    background-color: ${p => p.theme.colors.violet};
  }
  &:hover svg {
    stroke: ${p => p.theme.colors.selectBG};
  }
  & svg {
    stroke: ${p => (p.active === 'true' ? '#7B61FF' : '#3F3F3F')};
  }
`;

export const SortIconStyled = styled(SortIcon)`
  position: absolute;
  right: 20px;
`;

export const StyledOptions = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 170px;
  text-align: left;
  padding-top: 4px;
  border-top: 1px solid ${p => p.theme.colors.lightGrey};
  background-color: ${p => p.theme.colors.selectBG};
  color: ${p => p.theme.colors.lightGrey};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 160px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 129px;
  }
`;

export const StyledItem = styled.li`
  width: 170px;
  height: 32px;
  text-align: left;
  padding: 9px 24px;
  background-color: ${p => p.theme.colors.selectBG};
  color: ${p => p.theme.colors.lightGrey};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 160px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 129px;
  }
  &:last-child {
    border-bottom-left-radius: ${p => p.theme.radii.normal};
    border-bottom-right-radius: ${p => p.theme.radii.normal};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${p => p.theme.colors.lightGrey};
  }
`;

export const BigArrowIconStyled = styled(BigArrowIcon)`
  position: absolute;
  right: 24px;
  transform: rotate(${p => (p.direction === 'true' ? '0' : '180deg')});
  fill: ${p => p.theme.colors.lightGrey};
`;
