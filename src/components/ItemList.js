import 'bootstrap/dist/css/bootstrap.min.css';
import my3Dobject from './Item';

const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(my3Dobject);
    }, 2000);
  });
  
  promise.then(
    function (value) {
      console.log(value);
    },
    function (reason) {
      // rechazo
    }
  );



export default promise;