import { useState } from 'react';
import './App.css';
import RegisterUser from './components/RegisterUser';
import UserList from './components/UserList';
import UserProvider from './contexts/UserContext';
import { ReactComponent as Logo } from './logo.svg';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // usuario pode não ter tecnologia
  // usuario pode ter varias tecnologias
  // usuario pode ter apenas uma tecnologia

  // const user: IUser = { name: 'Tsunode', age: 24 };

  return (
    <UserProvider>
      <div className='App'>
        <RegisterUser setIsOpen={setIsOpen} />
        <UserList>
          <h1>Usuarios:</h1>
        </UserList>

        <Logo />
      </div>
    </UserProvider>
  );
}

export default App;
