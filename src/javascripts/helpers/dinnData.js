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
    }).catch((error) => reject(error));
});

const deleteDinn = (firebaseKey) => axios.delete(`${baseUrl}/dinns/${firebaseKey}.json`);

const addDinn = (data) => axios
  .post(`${baseUrl}/dinns.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/dinns/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

export default { getDinns, deleteDinn, addDinn };
