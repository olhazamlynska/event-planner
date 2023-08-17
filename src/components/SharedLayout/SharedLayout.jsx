import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LayoutStyled, ContentContainer } from './SharedLayout.styled';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <LayoutStyled>
      <Header />
      <ContentContainer>
        <main>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </ContentContainer>
    </LayoutStyled>
  );
};

export default SharedLayout;
