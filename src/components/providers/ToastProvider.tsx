'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '12px',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          color: '#1A365D',
          fontSize: '14px',
          fontWeight: '500',
        },
        success: {
          style: {
            background: 'rgba(46, 139, 87, 0.95)',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#FFFFFF',
            secondary: 'rgba(46, 139, 87, 0.95)',
          },
        },
        error: {
          style: {
            background: 'rgba(220, 38, 38, 0.95)',
            color: '#FFFFFF',
          },
          iconTheme: {
            primary: '#FFFFFF',
            secondary: 'rgba(220, 38, 38, 0.95)',
          },
        },
        loading: {
          style: {
            background: 'rgba(212, 175, 55, 0.95)',
            color: '#1A365D',
          },
        },
      }}
    />
  );
}