export const LocalApiUsers = {
  production: false,
  ApiCreateUser: 'http://127.0.0.1:5020/users/',

  ApiDeleteUser: 'http://127.0.0.1:5021/users/',

  ApiUpdateUser: 'http://127.0.0.1:5023/users/',

  ApiListUser: 'http://127.0.0.1:5022/users/',

  ApiFindUser: 'http://127.0.0.1:5022/users/',
};

export const LocalApiProducts = {
  production: false,
  ApiCreateProduct: 'http://localhost:5000/api/products/create',

  ApiDeleteProduct: 'http://localhost:5001/api/products/delete/',

  ApiUpdateProduct: 'http://localhost:5003/api/products/update/',

  ApiListProduct: 'http://localhost:5002/api/products/list',

  ApiFindProduct: 'http://localhost:5002/api/products/',
};

export const LocalApiCategory = {
  production: false,
  ApiCreateCategory: 'http://localhost:5010/api/category/create',

  ApiDeleteCategory: 'http://127.0.0.1:5021/users/',

  ApiUpdateCategory: 'http://127.0.0.1:5023/users/',

  ApiListCategory: 'http://127.0.0.1:5022/users/',

  ApiFindCategory: 'http://127.0.0.1:5022/users/',
};