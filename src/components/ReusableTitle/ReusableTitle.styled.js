import { styled } from 'styled-components';

export const Title = styled.h1`
  display: ${p => (p.show === 'none' ? 'none' : 'block')};
  font-family: inherit;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  margin-bottom: 24px;
  color: #3f3f3f;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 32px;
    font-weight: 600;
    line-height: 48px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    margin-bottom: 14px;
  }
`;
