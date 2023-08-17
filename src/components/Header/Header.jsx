import Logo from 'components/Logo';
import { StyledHeader, MobileWrapp } from './Header.styled.js';

import { useMedia } from 'react-use';
import LangSwitcher from './LangSwitcher';
import SearchInput from './SearchInput/SearchInput.jsx';
import Container from 'components/Container/Container.jsx';

const Header = () => {
  const isMobileDevice = useMedia('(max-width: 767px)');

  return (
    <StyledHeader>
      <Container>
        <MobileWrapp>
          <Logo />
          {!isMobileDevice && <SearchInput />}
          <LangSwitcher />
        </MobileWrapp>
        {isMobileDevice && <SearchInput />}
      </Container>
    </StyledHeader>
  );
};

export default Header;
