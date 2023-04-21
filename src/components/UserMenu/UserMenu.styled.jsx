import styled from 'styled-components';
import { Avatar } from '@chakra-ui/avatar';

export const StyledAvatar = styled(Avatar)`
  width: 50px;
  & > svg {
    color: #db96b3;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  color: black;
`;

export const LogoutBtn = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  color: white;
  background-color: rgb(114 20 109);
  font-weight: 500;
  zoom: 150%;
`;
