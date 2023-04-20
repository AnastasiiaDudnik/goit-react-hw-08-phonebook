import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AuthLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  border: 1px solid #abe3ab;
  background-color: #abe3ab;
  font-weight: 500;
  &.active {
    background-color: lightpink;
    border: 1px solid lightpink;
    zoom: 0.8;
  }
`;
