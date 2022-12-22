import styled from 'styled-components';

export const NavWrapper = styled.nav`
  position: absolute;

  width: 180px;
  height: fit-content;

  background-color: ${({ theme }) => theme.grey[9]};
  box-shadow: 0 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  margin: 12rem 0 0 1rem;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  gap: 0.5rem;
  z-index: 15;
`;
