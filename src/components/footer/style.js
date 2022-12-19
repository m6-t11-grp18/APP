import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.white[1]};
  color: ${({ theme }) => theme.white[0]};
  border: none;
  padding: 45px 59px;
  width: 95%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;

  ${props => props.footerStyle}
`;
