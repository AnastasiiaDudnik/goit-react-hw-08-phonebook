import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';
import {
  LoginWrap,
  Title,
  Label,
  Field,
  MailIcon,
  PasswordIcon,
  ErrorMessage,
  LoginBtn,
} from './LoginForm.styled';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Password should contain more than 2 symbols')
    .max(50, 'Too Long!')
    .required('Field is equired*'),
  email: Yup.string().email('Invalid email').required('Field is equired*'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <LoginWrap>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          dispatch(
            logIn({
              email: values.email,
              password: values.password,
            })
          );
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Title>Welcome Back!</Title>
            <Label>
              <MailIcon />
              <span>Email</span>
              {errors.email && touched.email ? (
                <ErrorMessage>{errors.email}</ErrorMessage>
              ) : null}
              <Field type="email" name="email" />
            </Label>
            <Label>
              <PasswordIcon />
              <span>Password</span>
              {errors.password && touched.password ? (
                <ErrorMessage>{errors.password}</ErrorMessage>
              ) : null}
              <Field type="password" name="password" />
            </Label>
            <LoginBtn type="submit">Login</LoginBtn>
          </Form>
        )}
      </Formik>
    </LoginWrap>
  );
};
