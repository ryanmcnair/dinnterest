# Dinnterest

Pinterest for dinners only

## Requirements
* Clean code - single responsibility principle
* ES6 Modules bundled with webpack
* No errors - linters should be clean
* Jquery for any DOM manipulation (selectors, modifying css classes, events)
* SASS and Bootstrap for styling
* Completely planned out - before each section you should be making new cards before you code.  You should have wireframes and an ERD

## Deployed Site

https://dinnterest-76486.web.app/

### Features
* User authorization with Google sign in
* Allows users to Create, Read, Update & Delete

### Code Example
```javascript
const addDinn = (data) => axios.post(`${baseUrl}/dinns.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/dinns/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const deleteDinn = (firebaseKey) => axios.delete(`${baseUrl}/dinns/${firebaseKey}.json`);
```

### ERD

![Screenshot](https://user-images.githubusercontent.com/67588177/95528985-570f4280-099f-11eb-97e5-f97e3b141006.png)