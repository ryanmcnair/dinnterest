import boardData from '../helpers/boardData';
import card from '../cards/boardsCard';

const boardsView = () => {
  boardData.getBoards().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.boardMaker(item));
      });
    } else {
      $('#app').append('<h2>NO boards</h2>');
    }
  });
};

export default { boardsView };
