import { AxiosResponse } from 'axios'
import { Corp } from '../type/Corp'
import { api } from './instance'

export const getCorps = async () => {
  try {
    const response: AxiosResponse<Corp[]> = await api.get('/api/corps')
    return response.data
  } catch (error) {
    console.error('기업 데이터 조회 중 오류 발생:', error)
    throw error
  }
}

// /api/corps/{cno}
export const getCorpByCno = async (cno: number) => {
  const response: AxiosResponse<Corp> = await api.get(`/api/corps/${cno}`)
  return response.data
}
