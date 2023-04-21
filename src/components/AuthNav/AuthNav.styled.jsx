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
  background-color: black;
  font-weight: 500;
  zoom: 150%;
  &.active {
    background-color: white;
    color: black;
    border-bottom: 2px solid #e73eca;
  }
`;
