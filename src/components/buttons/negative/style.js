import styled from 'styled-components';

export const Wrapper = styled.button`
  background: ${({ theme }) => theme.grey[6]};
  color: ${({ theme }) => theme.white[1]};
  border-radius: 3px;
  border: 1px solid transparent;
  width: auto;
  height: fit-content;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 0;

  :hover {
    background: ${({ theme }) => theme.grey[5]};
  }
  :disabled {
    background: ${({ theme }) => theme.grey[5]};
    color: ${({ theme }) => theme.white[0]};
  }

  ${(props) => props.btnStyle}
`;
