import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { IUser, useUserContext } from '../../contexts/UserContext';

export type IUserRegister = Omit<IUser, 'id'>;

interface IRegisterUser {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const RegisterUser = ({ setIsOpen }: IRegisterUser) => {
  const { handleSubmit, register } = useForm<IUserRegister>();
  const { registerUser } = useUserContext();

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <input type='text' {...register('name')} />
      <input type='text' {...register('age')} />

      <button type='submit'>Cadastrar</button>
    </form>
  );
};

export default RegisterUser;
