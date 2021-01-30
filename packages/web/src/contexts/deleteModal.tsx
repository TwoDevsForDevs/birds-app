import React, { createContext, useCallback, useState } from 'react';

interface DeleteModalContextData {
  isModalOpen: boolean;
  handleToggleModal: () => void;
  deleteItemId: string;
  setDeleteItemId: (value: string) => void;
}

const DeleteModalContext = createContext<DeleteModalContextData>(
  {} as DeleteModalContextData
);

const DeleteModalProvider: React.FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState('');

  const handleToggleModal = useCallback(() => {
    setIsModalOpen(!isModalOpen);
  }, [isModalOpen]);

  return (
    <DeleteModalContext.Provider
      value={{ isModalOpen, handleToggleModal, deleteItemId, setDeleteItemId }}
    >
      {children}
    </DeleteModalContext.Provider>
  );
};

export { DeleteModalProvider, DeleteModalContext };
export type { DeleteModalContextData };
