import { post } from '../../../utils/api';
export function sendLoginAPI(data) {
  const url = '/api/user/login';
  return post({ url, data });
}

export function sendRegistrationAPI(data) {
  const url = '/registration';
  return post({ url, data });
}

export function sendLogoutAPI(data) {
  const url = '/api/v1/customer/sign_out';
  return post({ url, data });
}

export const reFreshToken = async (headersAuthen) => {
  const url = '/token/refresh';
  return post({ url, headersAuthen });
};
