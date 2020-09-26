import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios
    .get(`${baseUrl}/users.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        axios({
          method: 'post',
          url: `${baseUrl}/users.json`,
          data: {
            image: userObj.photoURL,
            displayName: userObj.displayName,
            uid: userObj.uid,
            email: userObj.email,
            lastSignInTime: userObj.metadata.lastSignInTime,
          },
        }).then(console.warn('user posted'));
      } else {
        console.warn('User Exists');
      }
    });
};

const setCurrentUser = (userObj) => {
  const user = {
    image: userObj.photoURL,
    uid: userObj.uid,
    name: userObj.displayName,
    email: userObj.email,
    lastSignInTime: userObj.metadata.lastSignInTime,
  };
  return user;
};

export default { getUser, setCurrentUser };
