import { useRequest } from 'ahooks'
import type { AxiosRequestConfig } from 'axios'
import type { Options, Result } from 'ahooks/lib/useRequest/src/types'
import { get, post } from './instance'

type TypeCombineService<V extends any[] = any> = (...argv: V) => AxiosRequestConfig

type TypeAipResponse = {
  code?: number
  data?: any
  [key: string]: any
}

function useAxios<P extends any[] = any, U = any, UU extends U = any>(
  url: string,
  service?: TypeCombineService<P>,
  options?: Options<UU, P> & {
    formatResult: (res: TypeAipResponse) => U
  }
): Result<U, P>

function useAxios<P extends any[] = any>(
  url: string,
  service?: TypeCombineService<P>,
  options?: Options<TypeAipResponse, P>
): Result<TypeAipResponse, P>

function useAxios<Result, Data, P extends any[] = any>(url: string, service?: any, options?: any): any {
  return useRequest(async (params) => {
    const realService = service ?? (() => ({}))
    const config = realService(params)
    const { method = 'get', payload, ...rest } = config
    let resPromise = method === 'get' ? get(url, payload, rest) : post(url, payload, rest)
    if (options?.formatResult) {
      resPromise = resPromise.then(options.formatResult)
    }
    return resPromise
  }, options)
}

export { useAxios }
