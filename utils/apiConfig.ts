import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axios.defaults.withCredentials = false;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    token: "7081740f-bd48-49e7-bf46-e77f8b64732e",
  },
});

const addTimeStampQueryParam = ({ url, ...restConfig }: any) => {
  return {
    ...restConfig,
    url: appendTimeStampInUrlQueryParams(url),
  };
};
export const appendTimeStampInUrlQueryParams = (url: string) => {
  return url + (url.split("?")[1] ? "&" : "?") + `t=${new Date().getTime()}`;
};

axiosInstance.interceptors.request.use(
  addTimeStampQueryParam,
  function (error) {
    return Promise.reject(error);
  }
);

export const S3Instance = axios.create({
  baseURL: baseURL,
  headers: {
    token: "7081740f-bd48-49e7-bf46-e77f8b64732e",
  },
});
