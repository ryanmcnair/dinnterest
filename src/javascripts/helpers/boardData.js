import axios from 'axios';
import firebase from 'firebase/app';
import apiKeys from './apiKeys.json';
import 'firebase/auth';
import dinnData from './dinnData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boards = response.data;
      const boardsArray = [];
      if (boards) {
        Object.keys(boards).forEach((boardId) => {
          boardsArray.push(boards[boardId]);
        });
      }
      resolve(boardsArray);
    })
    .catch((error) => reject(error));
});

const getUserBoards = () => new Promise((resolve, reject) => {
  const user = firebase.auth().currentUser;
  axios
    .get(`https://dinnterest-76486.firebaseio.com/boards.json?orderBy="user"&equalTo="${user.uid}"`)
    .then((response) => {
      const userBoards = response.data;
      const boards = [];
      if (userBoards) {
        Object.keys(userBoards).forEach((boardId) => {
          boards.push(userBoards[boardId]);
        });
      }

      resolve(boards);
    })
    .catch((error) => reject(error));
});

const addBoard = (data) => axios.post(`${baseUrl}/boards.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/boards/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const getSingleBoard = (boardFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/boards/${boardFirebaseKey}.json`).then((response) => {
    const thisBoard = response.data;
    resolve(thisBoard);
  }).catch((error) => reject(error));
});

const deleteBoard = (boardId) => {
  dinnData.getboardDinns(boardId)
    .then((response) => {
      response.forEach((item) => {
        dinnData.deleteDinn(item.firebaseKey);
      });
    })
    .then(() => {
      getSingleBoard(boardId)
        .then((response) => {
          axios.delete(`${baseUrl}/boards/${response.firebaseKey}.json`);
        });
    });
};

export default {
  getBoards, deleteBoard, addBoard, getSingleBoard, getUserBoards
};
