import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks/useAuth';
import { logout } from 'redux/auth/operations';
import { UserWrap, UserName, LogoutBtn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrap>
      <UserName>Welcome, {user.name}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logout())}>
        Log out
      </LogoutBtn>
    </UserWrap>
  );
};
