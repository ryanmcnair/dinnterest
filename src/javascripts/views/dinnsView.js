import dinnData from '../helpers/dinnData';
import card from '../cards/dinnsCards';

const dinnsView = () => {
  dinnData.getDinns().then((response) => {
    if (response.length) {
      response.forEach((item) => {
        $('#app').append(card.dinnMaker(item));
      });
    } else {
      $('#app').append('<h2>NO DINNS</h2>');
    }
  });
};

export default { dinnsView };
