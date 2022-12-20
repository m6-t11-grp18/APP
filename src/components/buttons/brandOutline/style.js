import styled from 'styled-components';

export const Wrapper = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.brand[1]};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.brand[1]};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.brand[4]};
  }
  :disabled {
    background: ${({ theme }) => theme.brand[3]};
    color: ${({ theme }) => theme.brand[4]};
  }

  @media (max-width: 320px) {
    width: 20px;
  }

  ${(props) => props.btnStyle}
`;
