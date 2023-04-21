import { WelcomeText, Gif } from './Welcome.styled';

export const Welcome = () => {
  return (
    <>
      <WelcomeText>Welcome!</WelcomeText>

      <Gif
        title="happy cat"
        src="https://giphy.com/embed/2FA9tNZBm8sO0MJj88"
        width="480"
        height="480"
        allowFullScreen
      ></Gif>
    </>
  );
};
