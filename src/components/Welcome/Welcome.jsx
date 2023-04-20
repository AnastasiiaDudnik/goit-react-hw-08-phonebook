import { Gradient, WelcomeText, Iframe } from './Welcome.styled';

export const Welcome = () => {
  return (
    <>
      <Gradient>
        <WelcomeText>Welcome!</WelcomeText>
      </Gradient>

      <Iframe
        title="happy cat"
        src="https://giphy.com/embed/2FA9tNZBm8sO0MJj88"
        width="480"
        height="480"
        allowFullScreen
      ></Iframe>
    </>
  );
};
