import { styled } from 'styled-components';
export const WrapStyled = styled.div`
  width: 272px;
  margin: 0 auto;
    @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
  width: 688px;
  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
width: 628px;
  }
`;

export const CardStyled = styled.div`
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.bgEvent};
  box-shadow: 2px 4px 9px 0px ${p => p.theme.colors.boxShadow};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 168px;
  object-fit: cover;
  border-radius: ${p => p.theme.radii.normal};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    height: 272px;
  }
`;
export const InformationWrap = styled.div`
  padding: 24px 9px 40px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 24px 16px 32px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    padding-left: 9px;
    padding-right: 9px;
  }
`;
export const TextStyled = styled.p`
  line-height: 1.43;
  text-align: left;
  margin-bottom: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    margin-bottom: 12px;
  }
`;
export const DataListStyled = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-items: center;
  gap: 12px;

  margin-bottom: 40px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    margin-bottom: 24px;
  }
`;

export const DataItemStyled = styled.li`
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.43;
  text-align: center;
  padding: 6px 12px;
  border-radius: ${p => p.theme.radii.normal};
  background: ${p => p.theme.colors.bgEvent};
  color: ${p => p.theme.colors.violet};
  box-shadow: 4px 5px 9px 0px ${p => p.theme.colors.boxShadow};

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 4px 12px;
  }
`;

export const ButtonsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  gap: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    gap: 16px;
    justify-content: right;
  }
`;

export const ButtonsItem = styled.li`
  width: 108px;
  height: 32px;
  border-radius: 4px;
  color: ${p => p.theme.colors.violet};
  border: 1px solid ${p => p.theme.colors.violet};
  &:last-child {
    color: ${p => p.theme.colors.textBtn};
    background: ${p => p.theme.colors.violet};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: fit-content;
  }
`;

export const ButtonStyled = styled.button`
  width: 100%;
  padding: 8px 16px 8px 16px;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: inherit;
  background-color: inherit;
  border: ${p => p.theme.borders.none};
`;
