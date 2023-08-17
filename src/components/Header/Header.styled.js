import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 168px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${p => p.theme.colors.violet};
  background-color: ${p => p.theme.colors.headerBG};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    height: 92px;
    padding-top: 26px;
    padding-bottom: 18px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    padding-top: 22px;
    padding-bottom: 22px;
  }
`;
export const MobileWrapp = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-bottom: 0;
  }
`;

export const StyledWrappInput = styled.div`
  display: flex;
  position: relative;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;
