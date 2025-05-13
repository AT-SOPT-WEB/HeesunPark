import { instance } from '@api/instance';
import { API_URL } from '@constants/API_URL';
import type { SignUpRequestType, LoginRequestType } from '@type/authType';

export const postSignUp = async (data: SignUpRequestType) => {
  try {
    const response = await instance.post(API_URL.AUTH_SIGNUP, data);

    return response.data.result.token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const postLogIn = async (data: LoginRequestType) => {
  try {
    const response = await instance.post(API_URL.AUTH_LOGIN, data);

    return response.data.result.token;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
