import { requester } from '../api/axios';

export const getAboutData = async (params = {}) => {
  const response = await requester.get('/about/', { params });
  return response.data;
};

export const getAboutDataById = async (id) => {
  const response = await requester.get(`/about/${id}/`);
  return response.data;
};

export const getAboutImages = async (params = {}) => {
  const response = await requester.get('/about/images/', { params });
  return response.data;
};

export const getAboutImageById = async (id) => {
  const response = await requester.get(`/about/images/${id}/`);
  return response.data;
};

export const getBaseAbout = async (params = {}) => {
  const response = await requester.get('/base/about/', { params });
  return response.data;
};

export const getBaseAboutById = async (id) => {
  const response = await requester.get(`/base/about/${id}/`);
  return response.data;
};

export const getBrands = async (params = {}) => {
  const response = await requester.get('/brands/', { params });
  return response.data;
};

export const getBrandById = async (id) => {
  const response = await requester.get(`/brands/${id}/`);
  return response.data;
};

export const getCart = async () => {
  const response = await requester.get('/cart/');
  return response.data;
};

export const addToCart = async (data) => {
  const response = await requester.post('/cart/add/', data);
  return response.data;
};

export const removeFromCart = async (productId) => {
  const response = await requester.delete(`/cart/remove/${productId}/`);
  return response.data;
};

export const clearCart = async () => {
  const response = await requester.delete('/cart/clear/');
  return response.data;
};

export const getProducts = async (params = {}) => {
  const response = await requester.get('/catalog/products/', { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await requester.get(`/catalog/${id}/`);
  return response.data;
};

export const getCategories = async (params = {}) => {
  const response = await requester.get('/catalog/filters/', { params });
  return response.data;
};

export const getBaseProducts = async (params = {}) => {
  const response = await requester.get('/base/products/', { params });
  return response.data;
};

export const getBaseProductById = async (id) => {
  const response = await requester.get(`/base/products/${id}/`);
  return response.data;
};

export const getContacts = async (params = {}) => {
  const response = await requester.get('/contact/contacts/', { params });
  return response.data;
};

export const getContactById = async (id) => {
  const response = await requester.get(`/contact/contacts/${id}/`);
  return response.data;
};

export const login = async (data) => {
  const response = await requester.post('/auth/login/', data);
  return response.data;
};

export const register = async (data) => {
  const response = await requester.post('/auth/register/', data);
  return response.data;
};

export const googleLogin = async (data) => {
  const response = await requester.post('/auth/google-login/', data);
  return response.data;
};

export const getOrders = async (params = {}) => {
  const response = await requester.get('/orders/orders/', { params });
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await requester.get(`/orders/orders/${id}/`);
  return response.data;
};

export const downloadOrderExcel = async (id) => {
  const response = await requester.get(`/orders/orders/${id}/excel/`);
  return response.data;
};

export const downloadOrderPdf = async (id) => {
  const response = await requester.get(`/orders/orders/${id}/pdf/`);
  return response.data;
};

export const getPrices = async (params = {}) => {
  const response = await requester.get('/prices/price/', { params });
  return response.data;
};

export const getPriceById = async (id) => {
  const response = await requester.get(`/prices/price/${id}/`);
  return response.data;
};

export const downloadPriceFile = async (id) => {
  const response = await requester.get(`/prices/price/${id}/download/`);
  return response.data;
};

export const getBaseModels = async (params = {}) => {
  const response = await requester.get('/base/base-models/', { params });
  return response.data;
};

export const getBaseModelById = async (id) => {
  const response = await requester.get(`/base/base-models/${id}/`);
  return response.data;
};
