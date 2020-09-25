import firebase from 'firebase/app';
import 'firebase/auth';
import navbar from '../myNavbar/myNavbar';
import auth from '../components/auth/auth';
import userData from './userData';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData.getUser(user);
      $('#navbar-logout-button').removeClass('hide');
      $('#auth').addClass('hide');
      $('#app').html('<h1>Boards</h1');
    } else {
      auth.loginButton();
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
    }
  });
  navbar.myNavbar();
};

export default { checkLoginStatus };
