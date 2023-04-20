import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
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
  ErrorMessage,
} from './RegisterForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Your username is too short')
    .max(50, 'Your username is too Long!')
    .required('Field is equired*'),
  password: Yup.string()
    .min(2, 'Password should contain more than 2 symbols')
    .max(50, 'Too Long!')
    .required('Field is equired*'),
  email: Yup.string().email('Invalid email').required('Field is equired*'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <RegisterWrap>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={SignupSchema}
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
        {({ errors, touched }) => (
          <Form>
            <Title>Welcome</Title>
            <Subtitle>Let's create your account!</Subtitle>

            <Label>
              <UserIcon />
              <span>Username</span>
              {errors.name && touched.name ? (
                <ErrorMessage>{errors.name}</ErrorMessage>
              ) : null}
              <Field type="text" name="name" />
            </Label>
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
            <RegisterBtn type="submit">Register</RegisterBtn>
          </Form>
        )}
      </Formik>
    </RegisterWrap>
  );
};
