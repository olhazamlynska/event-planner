import styled from 'styled-components';
import loop from 'images/icons/loop.svg';
import { ReactComponent as CrossIcon } from 'images/icons/cross.svg';

export const SearchInputWrapp = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-right: 24px;
    margin-left: 60px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    margin-left: 623px;
  }
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    background-image: url(${loop});
    background-repeat: no-repeat;
  }
`;

export const StyledInput = styled.input`
  width: 272px;
  height: 48px;
  font-weight: ${p => p.theme.fontWeights.small};
  font-size: ${p => p.theme.fontSizes.s};
  padding-left: 48px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.boxShadow};
  color: ${p => p.theme.colors.inputText};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 368px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    width: 410px;
  }
  &:focus-within {
  }
  &:not(:placeholder-shown) {
    color: ${p => p.theme.colors.violet};
  }
  &::placeholder {
    color: ${p => p.theme.colors.inputText};
  }

  &:hover::-webkit-input-placeholder {
    color: ${p => p.theme.colors.violet};
  }

  &:hover {
    color: ${p => p.theme.colors.violet};
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: inherit;
  border: none;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    right: 20px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    right: 15px;
  }
`;
export const StyledCrossIcon = styled(CrossIcon)`
  width: 8px;
  height: 8px;
`;
