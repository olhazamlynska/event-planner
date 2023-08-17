import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as AddIcon } from 'images/icons/add.svg';

export const StyledWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 40px;
  padding-bottom: 40px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 40px;
  }
`;

export const StyleLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 56px;
  height: 56px;
  margin-left: 24px;
  background-color: ${p => p.theme.colors.linkDefault};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 2px 4px 9px 0px #a68dae47;
  transition: background-color ${p => p.theme.transitions.all};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    justify-content: space-around;
    min-width: 193px;
    text-decoration: none;
    padding: 16px;
    color: ${p => p.theme.colors.selectBG};
  }

  &:hover {
    background-color: ${p => p.theme.colors.selectBG};
  }
  &:hover svg {
    stroke: ${p => p.theme.colors.linkHover};
  }
`;

export const AddIconStyled = styled(AddIcon)`
  width: 16px;
  height: 16px;
  stroke: ${p => p.theme.colors.selectBG};
`;
