import styled from 'styled-components';

export const Wrapper = styled.button`
  background: ${({ theme }) => theme.grey[0]};
  color: ${({ theme }) => theme.white[0]};
  border-radius: 3px;
  border: none;
  padding: 25%;
  font-size: 20%;
  width: 100%;
  height: 100%;
  font-weight: 600;
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.grey[1]};
  }
  :disabled {
    background: ${({ theme }) => theme.grey[5]};
  }

  ${props => props.btnStyle}
`;
