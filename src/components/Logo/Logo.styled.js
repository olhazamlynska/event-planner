import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const LinkStyled = styled(Link)`
  min-width: 151px;
  font-size: 24px;
  line-height: ${p => p.theme.lineHeights.logo};
  margin-top: 10px;
  color: ${p => p.theme.colors.violet};
`;
