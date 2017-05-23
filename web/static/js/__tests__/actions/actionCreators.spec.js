import { userLogin } from '../../actions/actionCreators';

describe('action creators', () => {
  describe('userLogin', function() {
    it('returns the correct type', () => {
      expect(userLogin().type).toEqual('USER_LOGIN');
    });

    it('returns the token', () => {
      expect(userLogin('mytoken').payload.token).toEqual('mytoken');
    });

    it('returns the user', () => {
      expect(userLogin('mytoken', 'userinfo').payload.user).toEqual('userinfo');
    });
  });
});
