const empty = (store) => (next) => (action) => {
  next(action);
};

export default empty;
