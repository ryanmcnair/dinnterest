import userData from '../helpers/userData';
import boardData from '../helpers/boardData';

const boardForm = () => {
  $('#board-form').html(
    `<h2>Add A Board</h2>
          <div id="success-message"></div>
          <form>
            <div id="error-message"></div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Example: Pastas">
            </div>
            <div class="form-group">
              <label for="image">Image URL</label>
              <input type="text" class="form-control" id="image" placeholder="Example: https://">
            </div>
            <div class="form-group">
              <label for="user">User</label>
                <select class="form-control" id="user">
                  <option value="">Select a User</option>
                </select>
            </div>
            <button id="add-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Add board</button>
          </form>
          `
  );
  userData.getUser().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}">${item.displayName}</option>`);
    });
  });
  $('#add-board-btn').on('click', (e) => {
    e.preventDefault();
    console.warn('button clicked');
    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      user: $('#user').val() || false,
    };
    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      boardData
        .addBoard(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your board wass added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
      $('#name').val();
      $('#image').val();
      $('#user').val();
    }
  });
};

export default { boardForm };
