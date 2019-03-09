/**
 * 获取发现页列表
 * @returns {Promise<any>}
 */
export const getFindList = async (payload) => {
  let rsp = {
    status: 0,
    msg: 'success',
    data: {
      list: [
        {
          block_index: 1,
          content_url: "https://h5.ele.me/exchange/",
          id: 6,
          main_pic_hash: "/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg",
          sub_pic_hash: "",
          subtitle: "0元好物在这里",
          title: "金币商城",
          title_color: "#ff9900",
          ubt_stats_id: 0,
        },
        {
          block_index: 1,
          content_url: "https://h5.ele.me/commend/#/",
          id: 400013,
          main_pic_hash: "/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg",
          sub_pic_hash: "",
          subtitle: "10元现金拿不停",
          title: "推荐有奖",
          title_color: "#1ba9e1",
          ubt_stats_id: 0,
        },
        {
          block_index: 1,
          content_url: "/discover/koubei/",
          id: 400041,
          main_pic_hash: "/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg",
          sub_pic_hash: "",
          subtitle: "领取口碑好券",
          title: "周边优惠",
          title_color: "#ed6660",
          ubt_stats_id: 0,
        }
      ]
    }
  }
  console.log('请求参数', payload);
  return new Promise((resolve, reject) => {
    resolve(rsp)
  })
}

export default {
  getFindList
}
