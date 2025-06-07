'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

const BackgroundContext = createContext<{ imageIndex: number | null }>({ imageIndex: null });

export const BackgroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 4); // update this to total number of paireed bg and hero
    setImageIndex(randomIndex);
  }, []);

  return (
    <BackgroundContext.Provider value={{ imageIndex }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundIndex = () => useContext(BackgroundContext);