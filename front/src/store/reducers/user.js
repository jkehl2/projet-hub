/**
 * @module Reducer de gestion du store utlisateur
 */
export const initialState = {
  logged: false,
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    default:
      return { ...oldState };
  }
};

export default reducer;
