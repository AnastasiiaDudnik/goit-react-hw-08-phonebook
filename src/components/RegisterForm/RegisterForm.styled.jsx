import styled from 'styled-components';
import { BiUser, BiMailSend } from 'react-icons/bi';
import { TbPassword } from 'react-icons/tb';
import { Field as FormikField } from 'formik';

export const RegisterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  background-color: #15172b;

  border-radius: 20px;
  height: 500px;
  padding: 20px;
  width: 320px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.p`
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin: 0;
`;

export const Subtitle = styled.p`
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 45px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const UserIcon = styled(BiUser)`
  margin-right: 10px;
  stroke-width: 1px;
`;

export const MailIcon = styled(BiMailSend)`
  margin-right: 10px;
  stroke-width: 1px;
`;

export const PasswordIcon = styled(TbPassword)`
  margin-right: 10px;
  stroke-width: 1, 5px;
`;

export const Field = styled(FormikField)`
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  color: #eee;
  font-size: 18px;
  height: 40px;
  outline: 0;
  padding: 4px 20px 0;
  width: 280px;
  margin-bottom: 10px;
`;

export const RegisterBtn = styled.button`
  background-color: rgb(183 0 221);
  border-radius: 12px;
  border: 0;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 40px;
  text-align: center;
  width: 100%;

  &:hover {
    background-color: rgb(94 7 112);
  }
`;
