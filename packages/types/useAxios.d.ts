import type { AxiosRequestConfig } from 'axios';
import type { Options, Result } from 'ahooks/lib/useRequest/src/types';
declare type TypeCombineService<V extends any[] = any> = (...argv: V) => AxiosRequestConfig;
declare type TypeAipResponse = {
    code?: number;
    data?: any;
    [key: string]: any;
};
declare function useAxios<P extends any[] = any, U = any, UU extends U = any>(url: string, service?: TypeCombineService<P>, options?: Options<UU, P> & {
    formatResult: (res: TypeAipResponse) => U;
}): Result<U, P>;
declare function useAxios<P extends any[] = any>(url: string, service?: TypeCombineService<P>, options?: Options<TypeAipResponse, P>): Result<TypeAipResponse, P>;
export { useAxios };
