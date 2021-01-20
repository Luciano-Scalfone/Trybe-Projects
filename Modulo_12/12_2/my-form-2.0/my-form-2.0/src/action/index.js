export const ADD_VALUE = 'ADD_VALUE';

const addValue = ({target}) => ({
  type: ADD_VALUE,
  key: target.name,
  value: target.value,
});

export default addValue;
