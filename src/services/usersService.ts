import api from 'config/api';
import { DataRegister } from 'utils/types';

export async function registerService(body: DataRegister) {
  await api
    .post('/users', body)
    .then((response) => console.log(response.data))
    .catch((error) => console.error('error', error));
}
