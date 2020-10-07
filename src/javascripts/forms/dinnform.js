import boardData from '../helpers/boardData';
import dinnData from '../helpers/dinnData';

const dinnForm = () => {
  $('#dinn-form').html(
    `<h2>Add A Dinn</h2>
            <div id="success-message"></div>
            <form>
              <div id="error-message"></div>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Example: Indian">
              </div>
              <div class="form-group">
                <label for="image">Image URL</label>
                <input type="text" class="form-control" id="image" placeholder="Example: https://">
              </div>
              <div class="form-group">
                <label for="link">URL</label>
                <input type="text" class="form-control" id="link" placeholder="Example: https://">
              </div>
              <div class="form-group">
                <label for="board">Board</label>
                  <select class="form-control" id="board">
                    <option value="">Select a Board</option>
                  </select>
              </div>
              <button id="add-dinn-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i>Add a Dinn</button>
            </form>
            `
  );
  boardData.getBoards().then((response) => {
    response.forEach((item) => {
      $('select').append(
        `<option value="${item.firebaseKey}">${item.name}</option>`
      );
    });
  });
  $('#add-dinn-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      image: $('#image').val() || false,
      link: $('#link').val() || false,
      board: $('#board').val() || false,
    };
    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');
      dinnData
        .addDinn(data)
        .then(() => {
          $('#success-message').html(
            '<div class="alert alert-success" role="alert">Your dinn was added!</div>'
          );
        })
        .catch((error) => console.warn(error));
      setTimeout(() => {
        $('#sucess-message').html('');
      }, 3000);
      $('#name').val();
      $('#image').val();
      $('#link').val();
      $('#board').val();
    }
  });
};

export default { dinnForm };
