import { styled } from 'styled-components';

export const StyledItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 272px;
  height: 480px;
  overflow: hidden;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.bgEvent};
  box-shadow: 2px 4px 9px 0px #a68dae47;

  &:hover button {
    display: block;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 332px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    width: 302px;
  }
`;

export const StyledImage = styled.img`
  width: 272px;
  height: 336px;
  box-shadow: 2px 4px 9px 0px #a68dae47;

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 332px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    width: 302px;
  }
`;
export const CategoryWrap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  color: ${p => p.theme.colors.violet};
  background-color: ${p => p.theme.colors.bgEvent};
  height: 32px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
`;

export const AddInfoWrap = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  gap: 12px;
`;
export const CategoryStyled = styled.p`
  color: ${p => p.theme.colors.violet};
  background-color: ${p => p.theme.colors.bgEvent};
  height: 32px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
`;

export const PriorityStyled = styled.p`
  background-color: ${p => p.theme.colors.bgEvent};
  height: 32px;
  padding: 6px 12px 6px 12px;
  border-radius: 8px;
`;

export const InformationWrap = styled.div`
  position: relative;
  width: 272px;
  height: 144px;
  padding: 8px 16px;
  background-color: ${p => p.theme.colors.bgEvent};
  transition: transform ${p => p.theme.transitions.all};
  li:hover & {
    transform: translateY(-40px);
    min-height: 200px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 332px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    width: 302px;
  }
`;

export const DateWrap = styled.div`
  position: absolute;
  top: -40px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 272px;
  height: 40px;
  padding: 8px 16px;
  background-color: #ffffffcc;
  color: ${p => p.theme.colors.violet};
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 332px;
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[3]}) {
    width: 302px;
  }
`;

export const EventsTitle = styled.p`
  height: 48px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  margin-bottom: 8px;
`;

export const EventDescription = styled.p`
  height: 48px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

export const MoreInfoLink = styled.button`
  display: none;
  width: 114px;
  height: 40px;
  font-family: inherit;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  padding: 10px 24px 10px 24px;
  margin-left: auto;
  margin-top: 8px;
  border-radius: 8px;
  border: ${p => p.theme.borders.none};
  color: ${p => p.theme.colors.textBtn};
  background-color: ${p => p.theme.colors.violet};
`;
