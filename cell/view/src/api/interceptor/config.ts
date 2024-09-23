import { APIURL } from '../../config/api';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { message as antdMessage } from 'antd';

interface Response {
  status: number;
  message?: string;
  response?: any;
}

// 配置文件
export const config: AxiosRequestConfig = {
  // default  所有请求都是post
  method: 'post',
  baseURL: APIURL,
  timeout: 15 * 1000, // 10s的超时
  // 其他属性采用默认值
};

// 请求拦截器
export const requestInterceptor: ((
  config: AxiosRequestConfig,
) => AxiosRequestConfig | Promise<AxiosRequestConfig>)[] = [
  (config: AxiosRequestConfig) => config,
  (config: AxiosRequestConfig) => Promise.reject('数据发送失败，检查网络配置'),
];

// 响应拦截器
export const responseInterceptor: ((value: AxiosResponse<Response>) => Promise<any | null>)[] = [
  (res: AxiosResponse<Response>) => {
    const { status, message, response } = res.data;

    if (status === 200) {
      return Promise.resolve(response);
    }
    antdMessage.error(message);
    return Promise.reject(null);
  },
];
