import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import auth from './components/auth/auth';
import navbar from './myNavbar/myNavbar';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.loginButton();
  navbar.logoutEvent();
  auth.checkLoginStatus();
};

init();
