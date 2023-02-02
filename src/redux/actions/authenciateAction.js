function login(id, password) {
  return (dispatch, getState) => {
    console.log("LOGIN_SUCCESS Action")
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } })
  }
}
export const authenciateAction = { login }