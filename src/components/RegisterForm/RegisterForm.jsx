import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import { register } from 'redux/auth/operations';
import {
  RegisterWrap,
  RegisterBtn,
  Field,
  Title,
  Subtitle,
  Label,
  UserIcon,
  MailIcon,
  PasswordIcon,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <RegisterWrap>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values, actions) => {
          dispatch(
            register({
              name: values.name,
              email: values.email,
              password: values.password,
            })
          );
          actions.resetForm();
        }}
      >
        <Form>
          <Title>Welcome</Title>
          <Subtitle>Let's create your account!</Subtitle>

          <Label>
            <UserIcon />
            <span>Username</span>

            <Field type="text" name="name" />
          </Label>
          <Label>
            <MailIcon />
            <span>Email</span>
            <Field type="email" name="email" />
          </Label>
          <Label>
            <PasswordIcon />
            <span>Password</span>
            <Field type="password" name="password" />
          </Label>
          <RegisterBtn type="submit">Register</RegisterBtn>
        </Form>
      </Formik>
    </RegisterWrap>
  );
};
