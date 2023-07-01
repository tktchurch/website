import axios from 'axios';
const baseUrl = 'https://api.tktchurch.com/connect/v2/app/api';
const API = axios.create({baseURL: baseUrl});

const getAPIWithToken = async () => {
  const APIWithToken = axios.create({baseURL: baseUrl});

  APIWithToken.interceptors.request.use(async req => {
    
    let authToken = process.env.AUTH_TOKEN;

    req.headers.Authorization = `Bearer ${authToken}`;
    return req;
  });
  return APIWithToken;
};

export {API, getAPIWithToken, baseUrl};

