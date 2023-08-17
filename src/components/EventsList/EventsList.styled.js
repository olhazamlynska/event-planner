import { styled } from 'styled-components';

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  grid-gap: 24px;
  padding-bottom: 40px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: 32px;
  }
`;
