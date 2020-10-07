import form from '../forms/boardform';

const addBoardView = () => {
  $('#app').html('<div id="board-form">Put board form here</div>');
  form.boardForm();
};

export default { addBoardView };
