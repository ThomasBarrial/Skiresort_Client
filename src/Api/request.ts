/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios'
// @ts-ignore

export const resort = {
  getAll: (): Promise<IResort[]> => axios.get(`http://localhost:3000/api/skiresort/`).then(res => res.data),

  getOne: (id: number): Promise<IResort> =>
    axios.get(`http://localhost:3000/api/skiresort/${id}`).then(res => res.data),

  post: ({ resortData }: { resortData: IResort }): Promise<IResort> =>
    axios.post<IResort>(`http://localhost:3000/api/skiresort/`, resortData).then(res => res.data),

  put: ({ id, resortData }: { id: number; resortData: IResort }): Promise<IResort> =>
    axios.put<IResort>(`http://localhost:3000/api/skiresort/${id}`, resortData).then(res => res.data),

  delete: (id: number): Promise<IResort> =>
    axios.delete(`http://localhost:3000/api/skiresort/${id}`).then(res => res.data),
}
