import styled from 'styled-components';

export const MainWrapper = styled.div`
  width: 99vw;
`;

export const Header = styled.div`
  width: 99vw;
  height: 60vh;
  background-color: ${({ theme }) => theme.brand[2]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  padding: 15vh 0;
  max-width: 100vw;
  box-sizing: border-box;
  overflow-y: hidden;
`;

export const HeaderBtnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
  height: 2rem;
  box-sizing: content-box;
  @media (max-width: 1024px) {
    width: 30vh;
    margin: 15px;
  }
`;

export const AnnouncementSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  padding: 0 0 0 5vw;
`;

export const Announcements = styled.div`
  height: 70vh;
`;
