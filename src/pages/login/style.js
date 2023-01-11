import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  /* height: 61vh; */
  align-items: center;
  justify-content: center;
  min-height:100vh;
  padding: 10vh 0 0 0;
  background-color: rgba(238, 238, 238, 0.8);

  @media (max-width: 2560px) {
    height: 71vh;
  }

  @media (max-width: 1440px) {
    height: 70.5vh;
  }

  @media (max-width: 912px) {
    height: 76vh;
  }

  @media (max-width: 896px) {
    height: 64vh;
  }
`;

export const Anchor = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.grey[2]};
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight[4]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 350px;
  gap: 1rem;
  background-color: white;
  padding: 2rem 2rem;

  border-radius: 4px;

  @media (width: 425px) {
    width: 350px;
  }

  @media (width: 375px) {
    width: 320px;
  }

  @media (width: 320px) {
    width: 300px;
  }
`;
