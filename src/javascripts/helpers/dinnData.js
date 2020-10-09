import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDinns = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/dinns.json`)
    .then((response) => {
      const dinns = response.data;
      const dinnsArray = [];
      if (dinns) {
        Object.keys(dinns).forEach((dinnId) => {
          dinnsArray.push(dinns[dinnId]);
        });
      }
      resolve(dinnsArray);
    })
    .catch((error) => reject(error));
});

const getboardDinns = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/dinns.json?orderBy="boardId"&equalTo="${firebaseKey}"`)
    .then((response) => {
      const boardDinns = response.data;
      const dinns = [];
      if (boardDinns) {
        Object.keys(boardDinns).forEach((dinnId) => {
          dinns.push(boardDinns[dinnId]);
        });
      }

      resolve(dinns);
    })
    .catch((error) => reject(error));
});

const addDinn = (data) => axios.post(`${baseUrl}/dinns.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/dinns/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const deleteDinn = (firebaseKey) => axios.delete(`${baseUrl}/dinns/${firebaseKey}.json`);

const getSingleDinn = (dinnFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dinns/${dinnFirebaseKey}.json`).then((response) => {
    const thisDinn = response.data;
    resolve(thisDinn);
  }).catch((error) => reject(error));
});

const updateDinn = (firebaseKey, dinnObject) => axios.patch(`${baseUrl}/dinns/${firebaseKey}.json`, dinnObject);

export default {
  getDinns, deleteDinn, addDinn, getSingleDinn, updateDinn, getboardDinns
};
