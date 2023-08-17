import styled from 'styled-components';

export const ContainerStyled = styled.div`
  max-width: ${p => p.theme.breakpoints[0]};
  margin: 0 auto;
  padding: 0 10px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    min-width: ${p => p.theme.breakpoints[2]};
    padding: 0 40px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    min-width: ${p => p.theme.breakpoints[3]};
    padding: 0 15px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[4]}) {
    width: ${p => p.theme.breakpoints[4]};
    padding: 0 20px;
  }
`;
