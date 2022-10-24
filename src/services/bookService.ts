import api from 'config/api';
import { ServiceResponse, BooksResponse } from 'utils/types';

const booksPath = '/books';

export interface Session {
  /* eslint-disable @typescript-eslint/naming-convention */
  'access-token': string;
  client: string;
  uid: string;
}
function setHeaders(session: Session) {
  api.setHeaders({ ...session });
}

function getItem() {
  const res = JSON.parse(localStorage.getItem('userAccess') || '');
  setHeaders(res);
}

export function getBook() {
  getItem();
  return api.get(booksPath).then((response) => response.data);
}

export function bookDetail(id: string | undefined) {
  getItem();
  return api.get<ServiceResponse<BooksResponse>>(`${booksPath}/${id}`).then((res) => {
    if (res.ok) {
      return res.data;
    }

    throw res.data;
  });
}
