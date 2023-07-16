export default (setter, value, time = 0) => {
  setTimeout(() => {
    setter(value);
  }, time);
};
