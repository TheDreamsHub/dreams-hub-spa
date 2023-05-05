import { AxiosRequestHeaders } from "axios";

import axiosObject from "./axios";
import { HttpMethodsEnum } from "../enums/http-methods.enum";

export const baseURL = process.env["REACT_APP_BACKEND_URL"];
export const emailURL = process.env["REACT_APP_BACKEND_EMAIL_URL"];
export const cmsURL = process.env["REACT_APP_CMS_BACKEND_URL"];

export type MakeRequest = {
  url: string;
  method: HttpMethodsEnum;
  data?: unknown;
  params?: unknown;
  headers?: AxiosRequestHeaders;
  signal?: AbortSignal;
};

export const makeRequest = async (req: MakeRequest) => {
  const { url, method, data, params, headers, signal } = req;

  return axiosObject({
    url,
    method,
    data,
    params,
    headers,
    signal,
  }).then((res) => {
    return res.data;
  });
};
