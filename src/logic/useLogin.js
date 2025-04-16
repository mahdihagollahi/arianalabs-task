
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const loginUser = async (data) => {
  const response = await axios.post('https://mock.arianalabs.io/auth', data);
  return response.data;
};

export const useLogin = () => {
  return useMutation(loginUser);
};
