import dinnData from '../helpers/mergedData';
import card from '../cards/dinnsCards';

const dinnsView = (boardId) => {
  dinnData.getSingleBoardView(boardId).then((response) => {
    const { board, dinns } = response;

    $('#auth').html(`<div id="single-view">
                        <h1>${board.name} Dinns</h1>
                      </div>`);
    if (dinns.length) {
      dinns.forEach((dinn) => {
        $('#app').append(card.dinnMaker(dinn));
      });
    } else {
      $('#app').append('<h1>NO DINNS!</h1>');
    }
  });
};

export default { dinnsView };
