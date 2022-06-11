import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);
export default instance;
