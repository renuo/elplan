import reducer from '../../reducers/user'

describe('user reducer', () => {
  it('returns the default state', () => {
    expect(reducer(undefined, {})).toEqual({})
  })
})
