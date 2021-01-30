import { useContext } from 'react';

import {
  DeleteModalContext,
  DeleteModalContextData
} from '../contexts/deleteModal';

export default function useDeleteModal(): DeleteModalContextData {
  const context = useContext(DeleteModalContext);

  if (!context) {
    throw new Error('useDeleteModal must be used within an AuthProvider');
  }

  return context;
}
