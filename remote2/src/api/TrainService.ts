import axios from 'axios';
import { Train } from '../types/TrainType';
export const baseUrl = 'http://localhost:8080/destinations';

export const getDestinations = () => {
  return axios.get<Train[]>(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getDestination = (name: string) => {
  return axios.get<Train[]>(`${baseUrl}/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createDestination = (train: Train) => {
  return axios.post<Train[]>(baseUrl, train, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateDestination = (train: Train, name: string, priority: number) => {
  return axios.patch<Train[]>(`${baseUrl}/${name}`, train, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteDestination = (name: string) => {
  return axios.delete<Train[]>(`${baseUrl}/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
