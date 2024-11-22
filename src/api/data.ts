import { Data } from "@/type/Data"
import { AxiosResponse } from "axios"
import { api } from "./instance"

export const getDataByDno = async (dno: number) => {
  const response: AxiosResponse<Data> = await api.get(`/api/datas/${dno}`)
  return response.data
}
