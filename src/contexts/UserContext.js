// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const initialUserState = {
  walletId: '0xABC123DEF456',
  clientIndex: 2,
  balance: 0,
  rewards: 0,
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUserState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};