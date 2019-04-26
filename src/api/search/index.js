import axios from '../../utils/http'
import { stringify } from 'qs';

export const getHotList = async ()=>{
  return await axios.get('/eleapi/search/getHotList')
}
export const getSearchList = async (params)=>{
  return await axios.get(`/eleapi/search/getSearchList?${stringify(params)}`)
}

export default {
  getHotList,getSearchList
}
