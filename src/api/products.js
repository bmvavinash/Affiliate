import Input from 'pages/home/Input';
import { apiRequest } from './utils';

function getProductsList() {
  return apiRequest('GET', '/products');
}

function getProduct(id) {
  // return apiRequest('GET', 'products/' + id);
  return Input[id-Input[0].id]; 

}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getList: getProductsList,
  getProduct: getProduct
};
