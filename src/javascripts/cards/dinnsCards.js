import dinn from '../helpers/dinnData';

const dinnMaker = (dinnObject) => {
  const domString = `<div class="card m-2" style="width: 20rem;" id="${dinnObject.firebaseKey}">
                        <div class="card-body">
                        <img class="card-img-top" src="${dinnObject.image}" alt="${dinnObject.name}">
                        <h5 class="card-title">${dinnObject.name}</h5>
                        <a href="${dinnObject.link}" class="btn btn-primary">Link</a>
                          <a href="#" id="${dinnObject.firebaseKey}" class="btn btn-danger delete-dinn">Delete</a>
                        </div>
                      </div>`;
  $('body').on('click', '.delete-dinn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.card#${firebaseKey}`).remove();
    dinn.deleteDinn(firebaseKey);
  });
  return domString;
};

export default { dinnMaker };
