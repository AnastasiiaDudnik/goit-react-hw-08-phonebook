import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { Container, SpinnerContainer } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense
        fallback={
          <SpinnerContainer>
            <PropagateLoader aria-label="Loading Spinner" />
          </SpinnerContainer>
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
