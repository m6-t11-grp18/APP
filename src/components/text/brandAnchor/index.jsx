import { TextStyled } from "./style";

export default function BrandAnchor({ child, txtStyl, ...rest }) {
  return <TextStyled txtStyl={txtStyl} {...rest}>{child}</TextStyled>;
}
