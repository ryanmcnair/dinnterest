const boardMaker = (boardObject) => {
  const domString = `<div class="card m-2" style="width: 18rem;" id="${boardObject.firebaseKey}">
                      <div class="card-body">
                      <img class="card-img-top" src="${boardObject.image}" alt="${boardObject.name}">
                      <h5 class="card-title">${boardObject.name}</h5>
                        <a href="#" id="${boardObject.firebaseKey}" class="btn btn-danger delete-board">Delete</a>
                        <a href="#" id="${boardObject.firebaseKey}" class="btn btn-primary add-dinn">Add Dinn</a>
                      </div>
                    </div>`;
  return domString;
};

export default { boardMaker };
