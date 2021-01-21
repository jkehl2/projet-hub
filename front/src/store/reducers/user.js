/**
 * @module user-Reducer
 * Gestion du store utlisateur
 */
export const initialState = {
  logged: false,
  id: '',
  name: '',
  email: '',
};

const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    default:
      return { ...oldState };
  }
};

export default reducer;
