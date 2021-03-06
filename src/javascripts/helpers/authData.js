import firebase from 'firebase/app';
import 'firebase/auth';
import navbar from '../myNavbar/myNavbar';
import auth from '../components/auth/auth';
import userData from './userData';
import viewHelper from './viewHelper';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      userData.getUser(user);
      $('#navbar-logout-button').removeClass('hide');
      $('#auth').addClass('hide');
      $('#app').html('<h1>Boards</h1');
      viewHelper.viewListener('boards-link');
      navbar.myNavbar();
    } else {
      auth.loginButton();
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
