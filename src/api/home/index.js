import axios from '../../utils/http'
import { stringify } from 'qs';


//首页店铺
export const getStoreList = async (params) => {
  return await axios.get(`/eleapi/home/getShopList?${stringify(params)}`)
}

//首页banner 分类
export const getHomeClassifyList = async ()=>{
 return await axios.get('/eleapi/home/getClassifyList')
}

//首页活动
export const getActivityList = async ()=>{
  return await axios.get('/eleapi/home/getActivityList')
}

export const getFilter = async ()=>{
  return await axios.get('/eleapi/home/getFilter')
}

export default {
  getStoreList,getHomeClassifyList,getActivityList,getFilter
}
