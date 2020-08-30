import { useState } from 'react';

const getValueFromLs = (name) => {
  const jsonValue = localStorage.getItem(name);
  if(jsonValue) {
    return JSON.parse(jsonValue);
  }

  return null;
};

const useStateWithLS = (defaultValue, name) => {
  const [value, setValue] = useState(getValueFromLs(name) || defaultValue);

  const setValueAndCacheIt = (newValue) => {
    setValue(newValue);
    localStorage.setItem(name, JSON.stringify(newValue));
  };

  return [value, setValueAndCacheIt];
};

export default useStateWithLS;
