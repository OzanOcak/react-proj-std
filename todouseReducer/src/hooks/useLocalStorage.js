import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  }); // we save initial value in function not to invoke it every render

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
// the hook,recieve and return while store the data to local storage in the maeantime
function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue; //initialValue as variable

  if (initialValue instanceof Function) return initialValue(); //initialValue as function
  return initialValue;
}
