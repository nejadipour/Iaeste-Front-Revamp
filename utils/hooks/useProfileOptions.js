import { fetchFieldsAndUniversities } from "..";
import { useClient } from "../../src/contexts/client/ClientContext";
import {useState, useEffect} from 'react'

export const useProfileOptions = () => {
    const [fields, setFields] = useState([]);
    const [universities, setUniversities] = useState([]);
    const { client } = useClient();
  
    useEffect(() => {
      fetchFieldsAndUniversities(client)
        .then(([fields, universities]) => {
          setFields(fields);
          setUniversities(universities);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return {fields, universities}
  };