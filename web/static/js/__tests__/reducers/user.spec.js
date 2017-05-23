import reducer from '../../reducers/user';

describe('user reducer', function() {
  it('returns the default state', function() {
    expect(reducer(undefined, {})).toBe(null);
  });
});
