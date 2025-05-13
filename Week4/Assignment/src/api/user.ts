import { instance } from '@api/instance';
import { API_URL } from '@constants/API_URL';
import { ERROR_MESSAGE } from '@constants/messages';

export const getMyNickname = async () => {
  try {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error(ERROR_MESSAGE.NO_TOKEN);
    }

    const response = await instance.get(API_URL.USER_NICKNAME, {
      headers: {
        userId,
      },
    });
    return response.data.result.nickname;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const getUserNicknames = async (keyword?: string) => {
  try {
    const response = await instance.get(API_URL.USER, {
      params: keyword ? { keyword } : {},
    });

    return response.data.result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export const updateMyNickname = async (newNickname: string) => {
  try {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error(ERROR_MESSAGE.NO_TOKEN);
    }

    const response = await instance.patch(
      API_URL.USER_NICKNAME,
      { nickname: newNickname },
      {
        headers: {
          userId,
        },
      }
    );

    return response.data.result;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};
