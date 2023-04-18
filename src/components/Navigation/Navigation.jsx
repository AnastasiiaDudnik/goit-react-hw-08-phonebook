import { Link, Nav } from './Navigation.styled';
// import { useAuth } from 'components/hooks/useAuth';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
      </Nav>
    </>
  );
};
