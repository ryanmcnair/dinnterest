import boardsView from '../views/boardsView';
import dinnsView from '../views/dinnsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'dinnterest':
      return boardsView.boardsView();
    case 'dinns-link':
      return dinnsView.dinnsView();
    default:
      return console.warn('something is wrong');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '#dinns-link', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
