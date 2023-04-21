import { useDispatch } from 'react-redux';
import { useAuth } from 'components/hooks/useAuth';
import { logout } from 'redux/auth/operations';
import { UserWrap, UserName, LogoutBtn, StyledAvatar } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserWrap>
      <StyledAvatar size="md" />

      <UserName>{user.name}</UserName>
      <LogoutBtn type="button" onClick={() => dispatch(logout())}>
        Log out
      </LogoutBtn>
    </UserWrap>
  );
};
