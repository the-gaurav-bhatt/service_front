'use client';
import React, { createContext, useContext, useState } from 'react';
export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

// export const useUser = () => useContext(UserContext);
