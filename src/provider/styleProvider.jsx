import { createContext, useState } from 'react';

export const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
  const [userModal, setUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [createAddModal, setCreateAddModal] =
    useState(false);
  const [editAddModal, setEditAddModal] = useState(false);
  const [productImageModal, setProductImageModal] =
    useState(false);

  return (
    <StyleContext.Provider
      value={{
        userModal,
        setUserModal,
        editUserModal,
        setEditUserModal,
        createAddModal,
        setCreateAddModal,
        editAddModal,
        setEditAddModal,
        productImageModal,
        setProductImageModal,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};
