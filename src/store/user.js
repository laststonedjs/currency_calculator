const initialState = {
  fullName: "Tolkien",
  loggedIn: false
}

export const userReducer = (state = initialState, action) => {
  return state;
}

// selectors
export const getName = (state) => {
  return state.user.fullName.split(" ")[0].toLowerCase();
}