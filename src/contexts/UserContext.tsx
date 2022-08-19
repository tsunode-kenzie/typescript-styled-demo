import { createContext, ReactNode, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { IUserRegister } from '../components/RegisterUser';
import api from '../services/api';

export interface IUser {
  id: string;
  name: string;
  age: number;
  techs?: string[];
}

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  users: IUser[];
  registerUser: (data: IUserRegister) => void;
}

const UserContext = createContext({} as IUserContext);

const UserProvider = ({ children }: IUserProviderProps) => {
  const [users, setUsers] = useState<IUser[]>([
    { id: uuid(), name: 'Tsunode', age: 24 },
    { id: uuid(), name: 'Wesley', age: 22, techs: ['react', 'node', 'heroku'] },
    { id: uuid(), name: 'Alex', age: 25, techs: ['React', 'css', 'figma'] },
  ]);

  function registerUser(data: IUserRegister): void {
    const newUser = {
      id: uuid(),
      ...data,
    };

    setUsers((oldUsers) => [...oldUsers, newUser]);
  }

  return (
    <UserContext.Provider value={{ users, registerUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext(): IUserContext {
  const context = useContext(UserContext);

  return context;
}

export default UserProvider;

// Toast
// Auth
// techs
