'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const BackgroundContext = createContext<{ imageIndex: number | null }>({ imageIndex: null });

export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 2); // 0 or 1
    setImageIndex(randomIndex);
  }, []);

  return (
    <BackgroundContext.Provider value={{ imageIndex }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundIndex = () => useContext(BackgroundContext);