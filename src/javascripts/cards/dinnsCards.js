const dinnMaker = (dinnObject) => {
    const domString = `<div class="card m-2" style="width: 18rem;" id="${dinnObject.firebaseKey}">
                        <div class="card-body">
                        <img class="card-img-top" src="${dinnObject.image}" alt="${dinnObject.name}">
                        <h5 class="card-title">${dinnObject.name}</h5>
                          <a href="#" id="${dinnObject.firebaseKey}" class="btn btn-danger delete-cow">Delete</a>
                        </div>
                      </div>`;
    return domString;
  };
  
  export default { dinnMaker };
