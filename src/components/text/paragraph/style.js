import styled from 'styled-components';

export const TextStyled = styled.p`
  color: ${({ theme }) => theme.white[0]};
  font-family: 'Inter';
  font-weight: 400;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};


  @media (max-width: 400px) {
    font-size: 15px;
  }

  @media (max-width: 375px) {
    font-size: 14px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
  }

  @media (max-width: 280px) {
    font-size: 10px;
    font-weight: 700;
  }

  ${(props) => props.txtStyle}
`;
