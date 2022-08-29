import type { AxiosRequestConfig, AxiosResponse } from 'axios';
declare type TypeAipResponse = {
    code?: number;
    data?: any;
    [key: string]: any;
};
export declare function initInstance(request?: (req: AxiosRequestConfig) => AxiosRequestConfig, response?: (res: AxiosResponse) => AxiosResponse): void;
/**
 * @param {string} url
 * @param {*} [data]
 * @param {*} [config] config.intact是否是完整的url
 * @returns {Promise<T>}
 */
export declare function post(url: string, data?: Record<string, any>, conf?: Record<string, any>): Promise<TypeAipResponse>;
export declare function get(url: string, data?: Record<string, any>, conf?: Record<string, any>): Promise<TypeAipResponse>;
export {};
