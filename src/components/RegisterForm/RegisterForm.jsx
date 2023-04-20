import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Form,
  RegisterBtn,
  Input,
  Title,
  Subtitle,
  Label,
  UserIcon,
  MailIcon,
  PasswordIcon,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Welcome</Title>
      <Subtitle>Let's create your account!</Subtitle>
      <Label>
        <UserIcon />
        <span>Username</span>

        <Input type="text" name="name" />
      </Label>
      <Label>
        <MailIcon />
        <span>Email</span>
        <Input type="email" name="email" />
      </Label>
      <Label>
        <PasswordIcon />
        <span>Password</span>
        <Input type="password" name="password" />
      </Label>
      <RegisterBtn type="submit">Register</RegisterBtn>
    </Form>
  );
};
