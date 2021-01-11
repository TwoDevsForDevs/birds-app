import React from 'react';

import { AuthProvider } from './auth';
import { DeleteModalProvider } from './deleteModal';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <DeleteModalProvider>{children}</DeleteModalProvider>
    </AuthProvider>
  );
};

export default AppProvider;
