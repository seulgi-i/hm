function login(id, password) {
  return (dispatch, getState) => {
    console.log("LOGIN_SUCCESS Action")
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } })
  }
}
function logout(authenticate) {
  return (dispatch, getState) => {
    console.log("LOGOUT_SUCCESS Action")
    dispatch({ type: "LOGOUT_SUCCESS", payload: { authenticate } })
  }
}
export const authenciateAction = { login, logout }
