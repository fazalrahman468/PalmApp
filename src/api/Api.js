import axios from 'axios';
import {useEffect, useState} from 'react'

const [data, setData] = useState(undefined); 

const getAPIData = async () => {
    const url = 'https://7tracking.com/palm/api.php'; 
    let result = await fetch(url);
    result =await result.json();
    setData(result)
}
useEffect(() => {
    getAPIData();
})



export const login = (username, password) => {
  return axios.post(`${API_URL}/login`, { username, password });
};

export const signup = (username, password, email) => {
  return axios.post(`${API_URL}/signup`, { username, password, email });
};
