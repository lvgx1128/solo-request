import type { AxiosRequestConfig } from 'axios'

/**
 * 基础请求配置
 */
export const baseConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000 // 基础请求全局超时时间
}
