import styled from 'styled-components';

export const TextStyled = styled.label`
  color: ${({ theme }) => theme.white[1]};

  font-size: ${(prop, { theme }) =>
    theme.white[prop.fontSize]};
  font-weight: ${(prop, { theme }) =>
    theme.white[prop.fontWeight]};

  ${txtStyl}
`;
