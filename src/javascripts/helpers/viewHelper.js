import boardsView from '../views/boardsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'dinnterest':
      return boardsView.boardsView();
    default:
      return console.warn('something is wrong');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
