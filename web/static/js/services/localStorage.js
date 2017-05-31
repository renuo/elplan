export function loadState () {
  try {
    const serializedState = window.localStorage.getItem('state')
    return serializedState === null ? false : JSON.parse(serializedState)
  } catch (err) {
    // Do something?
  }
  return false
}

export function saveState (state) {
  try {
    const serializedState = JSON.stringify(state)
    // eslint-disable-next-line fp/no-unused-expression
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    // Do nothing: it doesn't matter if it's not saved.
  }
  return state
}
