// write your custom hook here to control your checkout form
import {useState} from "react"
import {useLocalStorage} from "./useLocalStorage"

export const useForm = (key, intialValue) => {
    const [values, setValues] = useLocalStorage(key, intialValue);

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      

      return [values, handleChanges];

};