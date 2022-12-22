import React, { ReactNode } from "react";
import { useStorage } from "../hooks/useStorage";
import { Contact } from "../types/Contact";

interface UserContacts {
  contacts: Contact[],
  setContacts: (contact: Contact[]) => void,
  currentId: number[],
  setCurrentId: (currentId: number) => void,
}

export const UserContext = React.createContext<UserContacts>({
  contacts: [],
  setContacts: () => {},
  currentId: [],
  setCurrentId: () => {},
});

type Props = {
  children: ReactNode;
};

export const UserContextProvider: React.FC<Props> = ({ children }) => {
  const [contacts, setContacts] = useStorage([], 'Contacts');
  const [currentId, setCurrentId] = useStorage([], 'Current')

  const contextValue = {
    contacts,
    setContacts,
    currentId,
    setCurrentId,
  };

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
};
