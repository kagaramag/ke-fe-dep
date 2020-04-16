import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const { VUE_APP_URL_BACKEND } = process.env;
const URL = `${VUE_APP_URL_BACKEND}/api`;
const token = localStorage.getItem('token');
class AxiosHelper {
  static get = path => {
    return new Promise((resolve, reject) => {
      return axios
        .get(`${URL}${path}`, {
          headers: {
            'auth-token': token || '',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  static post = (path, data) => {
    return new Promise((resolve, reject) => {
      return axios
        .post(`${URL}${path}`, data, {
          headers: {
            'auth-token': token || null,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  // post with formData
  static postFormData = (path, data) => {
    return new Promise((resolve, reject) => {
     return axios
       .post(`${URL}${path}`, data, {
         headers: {
           "Content-Type": "multipart/form-data",
           "auth-token": token || null,
           'Access-Control-Allow-Origin': '*',
         }
       })
       .then(response => {
         resolve(response);
       })
       .catch(error => {
         reject(error);
       });
   });
 };

  static put = (path, data) => {
    return new Promise((resolve, reject) => {
      return axios
        .put(`${URL}${path}`, data, {
          headers: {
            'auth-token': token || null,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

  static delete = (path, data) => {
    return new Promise((resolve, reject) => {
      return axios
        .delete(`${URL}${path}`, {
          headers: {
            'auth-token': token || null,
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          data: data || null
        })
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  };

}

export default AxiosHelper;
