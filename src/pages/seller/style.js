import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
  margin-top:70px;
`;

export const SellerWrapper = styled.div`
  margin: 0 15vw 10vh 15vw;
  background-color: ${({ theme }) => theme.grey[10]};
  border-radius: 4px;
  padding: 4vh 2vw;

`;

export const SellerAvatar = styled.div`
  background-color: ${({ theme }) => theme.brand[1]};
  border-radius: 100%;

  text-align: center;
  width: 6rem;
  height: 6rem;
  font-size: 3rem;
  font-weight: 500;
  color: ${({ theme }) => theme.white[0]};

  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;

`;
export const SellerInfosWrapper = styled.div`
  display: flex;
  vertical-align: middle;
  height: 4rem;
  align-items: center;
`;
