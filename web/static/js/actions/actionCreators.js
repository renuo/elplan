export const USER_LOGIN = 'USER_LOGIN';

export function userLogin(token, user) {
  return {
    type: USER_LOGIN,
    payload: {
      token,
      user
    }
  }
}
