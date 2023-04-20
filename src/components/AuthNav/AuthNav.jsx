import { AuthLink, AuthWrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrap>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Login</AuthLink>
    </AuthWrap>
  );
};
