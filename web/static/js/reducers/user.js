import { USER_LOGIN, USER_LOGOUT } from '../actions/actionCreators'

export default function user (state = {}, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.user.attributes.name,
        email: action.payload.user.attributes.email
      }
    case USER_LOGOUT:
      return false
    default:
  }
  return state
}
