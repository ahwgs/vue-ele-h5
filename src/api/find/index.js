import axios from '../../utils/http'
/**
 * 获取发现页列表
 * @returns {Promise<any>}
 */
export const getFindList = async (payload) => {
  return await axios.get('/eleapi/find/getList')
}

export default {
  getFindList
}
