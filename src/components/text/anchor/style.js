import styled from 'styled-components';

export const TextStyled = styled.a`
  color: ${({ theme }) => theme.brand[1]};

  font-size: ${({ theme }) =>
    theme.fontSize};
  font-weight: ${({ theme }) =>
    theme.fontWeight};

  ${props => props.txtStyl}
`;
