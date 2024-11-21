import axios from 'axios'
import { AxiosResponse } from 'axios'
import { Corp } from '../type/Corp'

// 파일 상단에 추가
const api = axios.create({})

// fetch 버전
// export const getCorps = async () => {
//   try {
//     const response = await fetch('http://your-backend-url/api/corps');
//     if (!response.ok) {
//       throw new Error('API 호출에 실패했습니다');
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('기업 데이터 조회 중 오류 발생:', error);
//     throw error;
//   }
// };

// axios 버전
export const getCorpsWithAxios = async () => {
  try {
    // 현재 백엔드 API 없음
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
