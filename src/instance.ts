import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { parseCookies } from 'nookies'
import { baseConfig } from './config'

const instance = axios.create(baseConfig)

type TypeAipResponse = {
  code?: number
  data?: any
  [key: string]: any
}

export function initInstance(
  request?: (req: AxiosRequestConfig) => AxiosRequestConfig,
  response?: (res: AxiosResponse) => AxiosResponse
) {
  instance.interceptors.request.use(
    (conf: AxiosRequestConfig) => {
      const cookies = parseCookies()
      if (cookies?._token) {
        if (!conf.headers) {
          conf.headers = {}
        }
        conf.headers.token = cookies._token
      }
      if (!request) {
        return conf
      }
      return request(conf)
    },
    (error: any) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use((res: AxiosResponse) => {
    if (res.status === 200) {
      if (!response) {
        return res.data
      }
      return response(res)
    } else {
      return Promise.reject(res)
    }
  })
}

/**
 * @param {string} url
 * @param {*} [data]
 * @param {*} [config] config.intact是否是完整的url
 * @returns {Promise<T>}
 */
export function post(url: string, data?: Record<string, any>, conf?: Record<string, any>): Promise<TypeAipResponse> {
  try {
    const config = conf || {}
    return instance({
      ...config,
      method: 'POST',
      url,
      data,
      headers: config.addHeader ? config.addHeader : {}
    })
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

export function get(url: string, data?: Record<string, any>, conf?: Record<string, any>): Promise<TypeAipResponse> {
  try {
    const config = conf || {}
    return instance({
      ...config,
      method: 'GET',
      url,
      data,
      headers: config.addHeader ? config.addHeader : {}
    })
  } catch (error) {
    return Promise.reject(error)
  }
}
