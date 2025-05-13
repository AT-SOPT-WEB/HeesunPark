import { ERROR_MESSAGE } from '@constants/messages';
import axios, { AxiosError } from 'axios';

export const onErrorResponse = (error: AxiosError) => {
  if (axios.isAxiosError(error) && error.response) {
    const status = error.response.status;

    let errorMessage = ERROR_MESSAGE.DEFAULT;

    switch (status) {
      case 400:
        errorMessage = ERROR_MESSAGE.INVALID_REQUEST;
        break;
      case 401:
        errorMessage = ERROR_MESSAGE.NO_TOKEN;
        break;
      case 403:
        errorMessage = ERROR_MESSAGE.INVALID_TOKEN;
        break;
      case 404:
        errorMessage = ERROR_MESSAGE.INVALID_PATH;
        break;
      case 409:
        errorMessage = ERROR_MESSAGE.DUPLICATED_USERNAME;
        break;
    }

    return Promise.reject(new Error(errorMessage));
  }

  return Promise.reject(new Error(ERROR_MESSAGE.DEFAULT));
};
