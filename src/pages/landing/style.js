import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.brand[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding: 10vh 0;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderBtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
  height: 2rem;
  box-sizing: content-box;
  @media (max-width: 425px) {
    width: 225px;
    margin: 15px;
  }

  @media (max-width: 320px) {
    width: 200px;
  }
`;

export const AnnouncementSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  padding: 0 0 0 5vw;
`;

export const Announcements = styled.div`
  height: fit-content;
  display: flex;
  gap: 30px;
  padding: 0 3rem 2rem 0;
  overflow-x: scroll;
`;
