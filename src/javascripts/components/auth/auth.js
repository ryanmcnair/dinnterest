import firebase from 'firebase/app';
import 'firebase/auth';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = '<div class="d-flex jusify-content-end"><div class="welcome-container"><span class="welcome-logo"><i class="fas fa-cookie-bite"></i></span><h4>Welcome to Dinnterest</h4><button id="google-auth" class="welcome-button btn btn-primary btn-lg"><i class="fab fa-google"></i></i>oogle Login</button></div></div>';
  $('#auth').html(domString);
  $('#google-auth').on('click', signMeIn);
};

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      $('#auth').addClass('hide');
      $('#maindom').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
      $('#maindom').html('<h1>Boards</h1>');
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#maindom').addClass('hide');
    }
  });
};

export default { loginButton, checkLoginStatus };
