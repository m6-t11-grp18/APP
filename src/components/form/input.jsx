import { InputWrapper } from './style';

export default function Input({
  children,
  inputStyle,
  ...rest
}) {
  return (
    <InputWrapper inputStyle={inputStyle} {...rest}>
      {children}
    </InputWrapper>
  );
}
