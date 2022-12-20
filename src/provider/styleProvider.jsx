import { createContext, useState } from 'react';

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [userModal, setUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [announcementModal, setAnnouncementModal] =
    useState(false);
  const [editAnnouncementModal, setEditAnnouncementModal] =
    useState(false);
  const [productImageModal, setProductImageModal] =
    useState(false);

  return (
    <StyleContext.Provider
      value={{
        userModal,
        setUserModal,
        editUserModal,
        setEditUserModal,
        announcementModal,
        setAnnouncementModal,
        editAnnouncementModal,
        setEditAnnouncementModal,
        productImageModal,
        setProductImageModal,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};
