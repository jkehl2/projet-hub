const empty = (store) => (next) => (action) => {
  next();
};

export default empty;
