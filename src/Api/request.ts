/* eslint-disable @typescript-eslint/ban-ts-comment */
import axios from 'axios'
// @ts-ignore

export const resort = {
  getAll: (): Promise<IResort[]> => axios.get(`http://localhost:3000/api/skiresort/`).then(res => res.data),

  getOne: (id: string): Promise<IResort> =>
    axios.get(`http://localhost:3000/api/skiresort/${id}`).then(res => res.data),
}
