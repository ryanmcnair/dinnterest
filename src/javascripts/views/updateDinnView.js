import dinnData from '../helpers/dinnData';
import form from '../forms/updateDinnForm';

const updateDinnView = (dinnFirebaseKey) => {
  $('#app').html('<div id="update-dinn-form"></div>');
  dinnData.getSingleDinn(dinnFirebaseKey).then((response) => {
    form.updateDinnForm(response);
  });
};

export default { updateDinnView };
