import { LabelWrapper } from './style';

export default function Label({
  children,
  labelStyle,
  ...rest
}) {
  return (
    <LabelWrapper labelStyle={labelStyle} {...rest}>
      {children}
    </LabelWrapper>
  );
}
