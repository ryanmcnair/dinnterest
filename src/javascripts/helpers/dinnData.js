import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDinns = () => new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/dinns.json`)
      .then((response) => {
        const dinns = response.data;
        const dinnsArray = [];
        if (boards) {
          Object.keys(dinn).forEach((dinnId) => {
            dinnsArray.push(dinns[dinnId]);
          });
        }
        resolve(boardsArray);
      })
      .catch((error) => reject(error));
  });

  export default { getDinns };
