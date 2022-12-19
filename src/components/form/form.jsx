import { FormWrapper } from './style';

export default function Form({
  children,
  formStyle,
  ...rest
}) {
  return (
    <FormWrapper formStyle={formStyle} {...rest}>
      {children}
    </FormWrapper>
  );
}
