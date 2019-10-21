import { useReducer } from 'react';

function reducer(state, action) {
  console.log(state,[action.name], action.value)
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = e => {
    dispatch(e.target);
    // console.log(e.target)
  };
  return [state, onChange];
}