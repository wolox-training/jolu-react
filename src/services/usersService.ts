import api from 'config/api';
import { ServiceResponse, User, LoginResponse } from 'utils/types';
import { SignUpResponse } from 'utils/signUpResponse';

import LocalStorageService from './LocalStorageService';

const userPath = '/users';

export async function registerService(user: User) {
  const res = await api.post<ServiceResponse<SignUpResponse>>(userPath, user);
  if (res.ok) {
    return res;
  }
  throw res.data;
}

export async function login(user: LoginResponse) {
  const res = await api.post<ServiceResponse<LoginResponse>>(`${userPath}/sign_in`, user);
  const userInfo = {
    /* eslint-disable @typescript-eslint/naming-convention */
    'acces-token': res.headers?.['acces-token'],
    client: res.headers?.client,
    uid: res.headers?.uid
  };
  LocalStorageService.setValue('userAccess', JSON.stringify(userInfo));
  if (res.ok) {
    return res;
  }
  throw res.data;
}

export function logoutSession() {
  LocalStorageService.removeValue('userAccess');
}

export function requiredAuth() {
  const session = LocalStorageService.getValue('userAccess');
  return !!session;
}
