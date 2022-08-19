import { ReactNode } from 'react';
import { useUserContext } from '../../contexts/UserContext';
import Container from './styles';

interface IUserListProps {
  children: ReactNode;
}

const UserList = ({ children }: IUserListProps) => {
  const { users } = useUserContext();

  return (
    <Container width={400}>
      {children}
      <ul>
        {users.map(({ id, age, name }) => (
          <li key={id}>
            {id} - {name} - {age}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UserList;
