import { Wrapper } from "./Button.styles";

type Props = {
  children: any;
  callback: () => void;
}

const Button: React.FC<Props> = ({ children, callback }) => {
  return (
    <>
      <Wrapper type="button" onClick={callback}>
        {children}
      </Wrapper>
    </>
  );
};

export default Button;
