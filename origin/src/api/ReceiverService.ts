import axios from 'axios';
import { Receiver } from '../types/ReceiverType';
export const baseUrl = 'http://localhost:8080/receivers';

export const getReceivers = () => {
  return axios.get<Receiver[]>(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getReceiver = (name: string) => {
  return axios.get<Receiver[]>(`${baseUrl}/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createReceiver = (receiver: Receiver) => {
  return axios.post<Receiver[]>(baseUrl, receiver, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateReceiver = (receiver: Receiver, name: string, priority: number) => {
  return axios.patch<Receiver[]>(`${baseUrl}/${name}`, receiver, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteReceiver = (name: string) => {
  return axios.delete<Receiver[]>(`${baseUrl}/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
