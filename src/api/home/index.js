/*
* 首页店铺列表
* */

export const getStoreList = () => {
  let rsp = {
    status: 0,
    msg: 'success',
    data: {
      "has_next": true,
      "items": [
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"65\": {\"1\": 30.0, \"0\": 0}, \"100\": {\"1\": 38.0, \"0\": 0}, \"38\": {\"1\": 16.0, \"0\": 0}}",
                "description": "满38减16，满65减30，满100减38",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 2110535234,
                "is_exclusive_with_food_activity": true,
                "name": "丰收日满减",
                "tips": "满38减16，满65减30，满100减38",
                "type": 102
              },
              {
                "description": "折扣商品6折起",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 1838866537,
                "name": "单品折扣",
                "tips": "单品折扣"
              },
              {
                "attribute": "20.0",
                "description": "新用户下单立减20元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 21477064130,
                "is_exclusive_with_food_activity": true,
                "name": "杭州ka20-20",
                "tips": "新用户下单立减20元",
                "type": 103
              },
              {
                "description": "特价商品3元起",
                "icon_color": "f1884f",
                "icon_name": "换",
                "id": 1838923601,
                "name": "超值换购",
                "tips": "超值换购"
              }
            ],
            "address": "浙江省杭州市余杭区五常街道文一西路961号6号楼4层410-412",
            "authentic_id": 8344542451497400,
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"38减16\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"65减30\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"100减38\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"a25c03\", \"text\": \"4元会员红包\", \"border\": \"4ca25c03\", \"background\": null, \"type\": 2, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"6折\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"3元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"首单减20\", \"border\": \"4ce23028\", \"background\": null, \"type\": 5, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 0,
            "delivery_mode": {
              "border": "",
              "color": "2395FF",
              "gradient": {
                "rgb_from": "00AAFF",
                "rgb_to": "0085FF"
              },
              "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
              "id": 1,
              "is_solid": true,
              "text": "蜂鸟专送",
              "text_color": "FFFFFF"
            },
            "description": "",
            "distance": 986,
            "favored": false,
            "flavors": [
              {
                "id": 225,
                "name": "江浙菜"
              }
            ],
            "float_delivery_fee": 4,
            "float_minimum_order_amount": 20,
            "has_story": false,
            "id": "E6888710966777068459",
            "image_path": "ace57ecb518203504e0f6e1bb59a1f7epng",
            "is_new": false,
            "is_premium": false,
            "is_star": true,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.281465,
            "longitude": 120.029589,
            "max_applied_quantity_per_order": -1,
            "name": "丰和日丽（亲橙里店）",
            "next_business_time": "明天 10:30",
            "only_use_poi": false,
            "opening_hours": [
              "10:30/21:30"
            ],
            "order_lead_time": 20,
            "out_of_range": false,
            "phone": "0571-88732657",
            "piecewise_agent_fee": {
              "description": "配送费¥4",
              "extra_fee": 0,
              "is_extra": false,
              "no_subsidy_fee": "",
              "rules": [
                {
                  "fee": 4,
                  "price": 20
                }
              ],
              "tips": "配送费¥4"
            },
            "platform": 0,
            "posters": [],
            "promotion_info": "欢迎您选择丰收日，我们的追求：美味、新鲜，极速达！如遇任何用餐问题，欢迎致电：4008206977！",
            "rating": 4.7,
            "rating_count": 1235,
            "recent_order_num": 3709,
            "recommend": {
              "color": "#e8470b",
              "image_hash": "",
              "is_ad": false,
              "reason": "",
              "track": "{\"rankType\":\"27\"}"
            },
            "recommend_reasons": [
              {
                "name": "味道超赞"
              },
              {
                "name": "回头客多"
              },
              {
                "name": "配送飞快"
              }
            ],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/shop/#id=E6888710966777068459",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "江浙菜",
                "type": 1
              },
              {
                "border": "dddddd",
                "color": "666666",
                "text": "口碑人气好店"
              }
            ],
            "supports": [
              {
                "border": "90dddddd",
                "description": "该商家支持开发票，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票",
                "text_color": "666666",
                "two_characters_icon_name": "发票"
              }
            ],
            "tags": [],
            "target_tag_path": "d6a7283753e66cad4c4dc9a459d96a7fpng",
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 0
          }
        },
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"49\": {\"1\": 24.0, \"0\": 0}, \"19\": {\"1\": 12.0, \"0\": 0}, \"105\": {\"1\": 33.0, \"0\": 0}}",
                "description": "满19减12，满49减24，满105减33",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 2123503266,
                "is_exclusive_with_food_activity": true,
                "name": "减免",
                "tips": "满19减12，满49减24，满105减33",
                "type": 102
              },
              {
                "description": "折扣商品5折起",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 2111267794,
                "name": "女神节健康餐5折",
                "tips": "女神节健康餐5折"
              },
              {
                "attribute": "15.0",
                "description": "新用户下单立减15元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 2080866530,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减(不与其他活动共享)",
                "tips": "新用户下单立减15元",
                "type": 103
              },
              {
                "description": "特价商品1元起",
                "icon_color": "f1884f",
                "icon_name": "特",
                "id": 2103418562,
                "name": "新客1元吃大牌",
                "tips": "新客1元吃大牌"
              },
              {
                "attribute": "{\"120.0\": {\"quantity\": 1, \"must_pay_online\": 1, \"name\": \"1.25\\u53ef\\u4e50\\u6216\\u96ea\"}}",
                "description": "满120元赠送1.25可乐或雪1份",
                "icon_color": "3cc791",
                "icon_name": "赠",
                "id": 792252898,
                "is_exclusive_with_food_activity": true,
                "name": "赠品活动",
                "tips": "满120元赠送1.25可乐或雪1份",
                "type": 106
              }
            ],
            "address": "杭州余杭区闲林街道文卫路28号",
            "authentic_id": 8384562458488162,
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"19减12\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"49减24\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"105减33\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"a25c03\", \"text\": \"4元会员红包\", \"border\": \"4ca25c03\", \"background\": null, \"type\": 2, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"品质联盟\", \"border\": \"4ce23028\", \"background\": null, \"type\": 4, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"5折\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"1元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"赠\", \"border\": \"4ce23028\", \"background\": null, \"type\": 10, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"首单减15\", \"border\": \"4ce23028\", \"background\": null, \"type\": 5, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 2,
            "description": "本店酸菜鱼均用新鲜黑鱼制作而成，若不吃黑鱼请备注。谢谢。",
            "distance": 2579,
            "favored": false,
            "flavors": [
              {
                "id": 221,
                "name": "川湘菜"
              },
              {
                "id": 225,
                "name": "江浙菜"
              }
            ],
            "float_delivery_fee": 2,
            "float_minimum_order_amount": 0,
            "has_story": false,
            "id": "E5124742761175139785",
            "image_path": "79157b9ad5eae4853167cdeb3549ac66jpeg",
            "is_new": false,
            "is_premium": false,
            "is_star": false,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.276821,
            "longitude": 120.01718,
            "max_applied_quantity_per_order": -1,
            "name": "酸菜鱼馆",
            "next_business_time": "明天 00:00",
            "only_use_poi": false,
            "opening_hours": [
              "00:00/24:00"
            ],
            "order_lead_time": 40,
            "out_of_range": false,
            "phone": "13515812835",
            "piecewise_agent_fee": {
              "description": "配送费¥2",
              "extra_fee": -1,
              "is_extra": true,
              "no_subsidy_fee": "¥4",
              "rules": [
                {
                  "fee": 2,
                  "price": 0
                }
              ],
              "tips": "配送费¥2"
            },
            "platform": 0,
            "posters": [],
            "promotion_info": "欢迎光临，本店全新装修升级，希望新老顾客光临，谢谢！",
            "rating": 4.6,
            "rating_count": 227,
            "recent_order_num": 1888,
            "recommend": {
              "image_hash": "",
              "is_ad": false,
              "reason": "",
              "track": "{\"rankType\":\"1\"}"
            },
            "recommend_reasons": [],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/shop/#id=E5124742761175139785",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "川湘菜",
                "type": 1
              },
              {
                "border": "dddddd",
                "color": "666666",
                "text": "最近光顾"
              }
            ],
            "supports": [
              {
                "border": "90dddddd",
                "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
                "icon_color": "999999",
                "icon_name": "保",
                "id": 7,
                "name": "食安保",
                "text_color": "666666",
                "two_characters_icon_name": "保险"
              },
              {
                "border": "90dddddd",
                "description": "该商家支持开发票，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票",
                "text_color": "666666",
                "two_characters_icon_name": "发票"
              }
            ],
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 0
          }
        },
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"40\": {\"1\": 28.0, \"0\": 0}, \"60\": {\"1\": 38.0, \"0\": 0}, \"20\": {\"1\": 18.0, \"0\": 0}, \"80\": {\"1\": 48.0, \"0\": 0}, \"100\": {\"1\": 58.0, \"0\": 0}}",
                "description": "满20减18，满40减28，满60减38，满80减48，满100减58",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 2077092026,
                "is_exclusive_with_food_activity": true,
                "name": "满减活动",
                "tips": "满20减18，满40减28，满60减38，满80减48，满100减58",
                "type": 102
              },
              {
                "description": "特价商品1元起",
                "icon_color": "f1884f",
                "icon_name": "特",
                "id": 2110511658,
                "name": "新用户1元吃",
                "tips": "新用户1元吃"
              },
              {
                "attribute": "17.0",
                "description": "新用户下单立减17元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 2087776570,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减(不与其他活动共享)",
                "tips": "新用户下单立减17元",
                "type": 103
              },
              {
                "attribute": "2.0",
                "description": "本店新用户立减2元",
                "icon_color": "00b762",
                "icon_name": "新",
                "id": 794617010,
                "is_exclusive_with_food_activity": true,
                "name": "门店新客立减",
                "tips": "本店新用户立减2元",
                "type": 108
              },
              {
                "description": "折扣商品5折起",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 2066584738,
                "name": "周三半价日",
                "tips": "周三半价日"
              }
            ],
            "address": "杭州市余杭区五常街道文常路8幢5号",
            "authentic_id": 5344532442145146,
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"20减18\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"40减28\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"60减38\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"80减48\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"100减58\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"品质联盟\", \"border\": \"4ce23028\", \"background\": null, \"type\": 4, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"门店新客减2\", \"border\": \"4ce23028\", \"background\": null, \"type\": 6, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"5折\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"1元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"领10元红包\", \"border\": \"4ce23028\", \"background\": null, \"type\": 8, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"返红包\", \"border\": \"4ce23028\", \"background\": null, \"type\": 9, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"首单减17\", \"border\": \"4ce23028\", \"background\": null, \"type\": 5, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 2,
            "description": "",
            "distance": 2525,
            "favored": false,
            "flavors": [
              {
                "id": 212,
                "name": "汉堡"
              },
              {
                "id": 234,
                "name": "炸鸡炸串"
              }
            ],
            "float_delivery_fee": 2.5,
            "float_minimum_order_amount": 20,
            "folding_restaurant_brand": "汉霸汉堡",
            "folding_restaurants": [
              {
                "distance": 5674,
                "id": "E4962621502960095484",
                "name": "汉霸汉堡(五常大道店)",
                "order_lead_time": 40,
                "scheme": "https://h5.ele.me/shop/#id=E4962621502960095484",
                "type": 0
              }
            ],
            "has_story": false,
            "id": "E6154225717888691808",
            "image_path": "d1ac6d067e659c290e3b303937759e1dpng",
            "is_new": false,
            "is_premium": true,
            "is_star": false,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.276888,
            "longitude": 120.017633,
            "max_applied_quantity_per_order": -1,
            "name": "汉霸汉堡(文常路店)",
            "next_business_time": "明天 00:00",
            "only_use_poi": false,
            "opening_hours": [
              "00:00/24:00"
            ],
            "order_lead_time": 39,
            "out_of_range": false,
            "phone": "15926279397 0571-89087001",
            "piecewise_agent_fee": {
              "description": "配送费¥2.5",
              "extra_fee": -1,
              "is_extra": true,
              "no_subsidy_fee": "¥4.5",
              "rules": [
                {
                  "fee": 2.5,
                  "price": 20
                }
              ],
              "tips": "配送费¥2.5"
            },
            "platform": 0,
            "posters": [],
            "promotion_info": "本店所有饮料不能更换！！！",
            "rating": 4.6,
            "rating_count": 571,
            "recent_order_num": 3885,
            "recommend": {
              "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
              "is_ad": false,
              "track": "{\"rankType\":\"3\"}"
            },
            "recommend_reasons": [
              {
                "name": "味道超赞"
              }
            ],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/shop/#id=E6154225717888691808",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "汉堡",
                "type": 1
              }
            ],
            "supports": [],
            "tags": [],
            "target_tag_path": "d53fc0cb4dc67973038cbc591938a1b6png",
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 0
          }
        },
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"32\": {\"1\": 29.0, \"0\": 0}, \"53\": {\"1\": 30.0, \"0\": 0}, \"78\": {\"1\": 44.0, \"0\": 0}}",
                "description": "满32减29，满53减30，满78减44",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 2014100066,
                "is_exclusive_with_food_activity": true,
                "name": "自营销复杂满减活动",
                "tips": "满32减29，满53减30，满78减44",
                "type": 102
              },
              {
                "description": "折扣商品5折起",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 2111506450,
                "name": "女神节健康餐5折",
                "tips": "女神节健康餐5折"
              },
              {
                "attribute": "15.0",
                "description": "新用户下单立减15元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 2081158826,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减(不与其他活动共享)",
                "tips": "新用户下单立减15元",
                "type": 103
              },
              {
                "attribute": "1.0",
                "description": "本店新用户立减1元",
                "icon_color": "00b762",
                "icon_name": "新",
                "id": 797603338,
                "is_exclusive_with_food_activity": true,
                "name": "门店新客立减",
                "tips": "本店新用户立减1元",
                "type": 108
              },
              {
                "description": "特价商品1元起",
                "icon_color": "f1884f",
                "icon_name": "换",
                "id": 2106158082,
                "name": "超值换购",
                "tips": "超值换购"
              }
            ],
            "address": "浙江省杭州市余杭区五常街道文福路44号",
            "authentic_id": 2344542440998130,
            "bidding": "{\"core\":{\"index\":3,\"extraInfo\":\"{\\\"bidding\\\":\\\"{}\\\",\\\"rankId\\\":\\\"4f0b4ff03db94820883ebc2c8cf3deef\\\",\\\"rankType\\\":\\\"8\\\",\\\"latitude\\\":\\\"30.287492\\\",\\\"rankTime\\\":\\\"1552394348\\\",\\\"cityId\\\":\\\"2\\\",\\\"userId\\\":\\\"27737141\\\",\\\"longitude\\\":\\\"120.031855\\\"}\",\"target\":{\"restaurantId\":168987930,\"weight\":80,\"probability\":0.4608300030231476},\"come_from\":0,\"next\":{\"restaurantId\":155749185,\"weight\":130,\"probability\":0.25843000411987305}}}",
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"32减29\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"53减30\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"78减44\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"a25c03\", \"text\": \"3元会员红包\", \"border\": \"4ca25c03\", \"background\": null, \"type\": 2, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"品质联盟\", \"border\": \"4ce23028\", \"background\": null, \"type\": 4, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"门店新客减1\", \"border\": \"4ce23028\", \"background\": null, \"type\": 6, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"5折\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"1元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"已领5元红包\", \"border\": \"\", \"background\": {\"rgb_to\": \"ffdbdd\", \"rgb_from\": \"ffedee\"}, \"type\": 8, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"返红包\", \"border\": \"4ce23028\", \"background\": null, \"type\": 9, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"首单减15\", \"border\": \"4ce23028\", \"background\": null, \"type\": 5, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 2,
            "description": "",
            "distance": 2768,
            "favored": false,
            "flavors": [
              {
                "id": 265,
                "name": "简餐"
              }
            ],
            "float_delivery_fee": 2,
            "float_minimum_order_amount": 20,
            "has_story": false,
            "id": "E6993944574228297272",
            "image_path": "ffc37090f74c299823938042b98d36f4png",
            "is_new": false,
            "is_premium": false,
            "is_star": false,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.276326,
            "longitude": 120.015823,
            "max_applied_quantity_per_order": -1,
            "name": "锡纸诱惑",
            "next_business_time": "明天 09:25",
            "only_use_poi": false,
            "opening_hours": [
              "09:25/22:55"
            ],
            "order_lead_time": 41,
            "out_of_range": false,
            "phone": "18757578285",
            "piecewise_agent_fee": {
              "description": "配送费¥2",
              "extra_fee": -1,
              "is_extra": true,
              "no_subsidy_fee": "¥4",
              "rules": [
                {
                  "fee": 2,
                  "price": 20
                }
              ],
              "tips": "配送费¥2"
            },
            "platform": 0,
            "posters": [],
            "promotion_info": "每一份锡纸美食都是用锡纸盒单独烤出来的，外送锡纸盒经过测试以后发现锡纸盒太软！无法很完美的送到小主身边，故而改为专用打包盒，望各位小主见谅！",
            "rating": 4.6,
            "rating_count": 232,
            "recent_order_num": 2028,
            "recommend": {
              "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
              "is_ad": true,
              "reason": "广告",
              "track": "{\"rankType\":\"8\"}"
            },
            "recommend_reasons": [
              {
                "name": "味道超赞"
              }
            ],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/shop/#id=E6993944574228297272",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "简餐",
                "type": 1
              }
            ],
            "supports": [
              {
                "border": "90dddddd",
                "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
                "icon_color": "999999",
                "icon_name": "保",
                "id": 7,
                "name": "食安保",
                "text_color": "666666",
                "two_characters_icon_name": "保险"
              }
            ],
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 0
          }
        },
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"140\": {\"1\": 88.0, \"0\": 0}, \"93\": {\"1\": 59.0, \"0\": 0}, \"31\": {\"1\": 31.0, \"0\": 0}}",
                "description": "满31减31，满93减59，满140减88",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 2093174210,
                "is_exclusive_with_food_activity": true,
                "name": "155749185",
                "tips": "满31减31，满93减59，满140减88",
                "type": 102
              },
              {
                "description": "特价商品1元起",
                "icon_color": "f1884f",
                "icon_name": "特",
                "id": 2132527530,
                "name": "新客1元吃大牌",
                "tips": "新客1元吃大牌"
              },
              {
                "attribute": "15.0",
                "description": "新用户下单立减15元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 2082168362,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减(不与其他活动共享)",
                "tips": "新用户下单立减15元",
                "type": 103
              }
            ],
            "address": "杭州市余杭区仓前街道仓兴街339号",
            "authentic_id": 5364502451580785,
            "bidding": "{\"core\":{\"index\":4,\"extraInfo\":\"{\\\"bidding\\\":\\\"{}\\\",\\\"rankId\\\":\\\"4f0b4ff03db94820883ebc2c8cf3deef\\\",\\\"rankType\\\":\\\"8\\\",\\\"latitude\\\":\\\"30.287492\\\",\\\"rankTime\\\":\\\"1552394348\\\",\\\"cityId\\\":\\\"2\\\",\\\"userId\\\":\\\"27737141\\\",\\\"longitude\\\":\\\"120.031855\\\"}\",\"target\":{\"restaurantId\":155749185,\"weight\":130,\"probability\":0.25843000411987305},\"come_from\":0,\"next\":{\"restaurantId\":168183211,\"weight\":210,\"probability\":0.12488000094890594}}}",
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"31减31\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"93减59\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"140减88\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"1元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"首单减15\", \"border\": \"4ce23028\", \"background\": null, \"type\": 5, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 2,
            "description": "本店全国连锁加盟，合作电话：400-8080-693",
            "distance": 4685,
            "favored": false,
            "flavors": [
              {
                "id": 265,
                "name": "简餐"
              },
              {
                "id": 209,
                "name": "盖浇饭"
              }
            ],
            "float_delivery_fee": 4.5,
            "float_minimum_order_amount": 20,
            "has_story": false,
            "id": "E10768944396839723787",
            "image_path": "488d7c7bf770a6a10668da61b397db5bpng",
            "is_new": false,
            "is_premium": true,
            "is_star": false,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.288208,
            "longitude": 119.994329,
            "max_applied_quantity_per_order": -1,
            "name": "云荷香居荷叶饭(仓前店)",
            "next_business_time": "明天 08:00",
            "only_use_poi": false,
            "opening_hours": [
              "08:00/22:00"
            ],
            "order_lead_time": 39,
            "out_of_range": false,
            "phone": "17758007113",
            "piecewise_agent_fee": {
              "description": "远距离配送费¥4.5",
              "extra_fee": 2.5,
              "is_extra": true,
              "no_subsidy_fee": "¥6.5",
              "rules": [
                {
                  "fee": 4.5,
                  "price": 20
                }
              ],
              "tips": "远距离配送费¥4.5"
            },
            "platform": 0,
            "posters": [],
            "promotion_info": "本店所有菜品都是现炒的，遇见云荷香居，遇见不一样的好滋味！",
            "rating": 4.6,
            "rating_count": 1053,
            "recent_order_num": 11272,
            "recommend": {
              "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
              "is_ad": true,
              "reason": "广告",
              "track": "{\"rankType\":\"8\"}"
            },
            "recommend_reasons": [
              {
                "name": "味道超赞"
              }
            ],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/shop/#id=E10768944396839723787",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "简餐",
                "type": 1
              }
            ],
            "supports": [
              {
                "border": "90dddddd",
                "description": "商家原因导致订单取消，赔付代金券",
                "icon_color": "999999",
                "icon_name": "赔",
                "id": 10,
                "name": "拒单赔",
                "text_color": "666666",
                "two_characters_icon_name": ""
              },
              {
                "border": "90dddddd",
                "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
                "icon_color": "999999",
                "icon_name": "保",
                "id": 7,
                "name": "食安保",
                "text_color": "666666",
                "two_characters_icon_name": "保险"
              },
              {
                "border": "90dddddd",
                "description": "该商家支持开发票，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票",
                "text_color": "666666",
                "two_characters_icon_name": "发票"
              }
            ],
            "tags": [],
            "target_tag_path": "d53fc0cb4dc67973038cbc591938a1b6png",
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 0
          }
        },
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"128\": {\"1\": 42.0, \"0\": 0}, \"65\": {\"1\": 32.0, \"0\": 0}, \"35\": {\"1\": 28.0, \"0\": 0}}",
                "description": "满35减28，满65减32，满128减42",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 1878572786,
                "is_exclusive_with_food_activity": true,
                "name": "自营销复杂满减活动",
                "tips": "满35减28，满65减32，满128减42",
                "type": 102
              },
              {
                "description": "折扣商品5折起",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 2065866723,
                "name": "周三半价日",
                "tips": "周三半价日"
              },
              {
                "attribute": "20.0",
                "description": "新用户下单立减20元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 21477062018,
                "is_exclusive_with_food_activity": true,
                "name": "杭州ka20-20",
                "tips": "新用户下单立减20元",
                "type": 103
              },
              {
                "description": "特价商品8.8元起",
                "icon_color": "f1884f",
                "icon_name": "换",
                "id": 1833777770,
                "name": "超值换购",
                "tips": "超值换购"
              }
            ],
            "address": "杭州市余杭区五常街道永福社区文常路2幢4号",
            "authentic_id": 3384562443447179,
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"35减28\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"65减32\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"128减42\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"5折\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"8.8元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"首单减20\", \"border\": \"4ce23028\", \"background\": null, \"type\": 5, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 1,
            "description": "咕咕在全国已有100多家门店，主营韩式炸鸡，小吃，丰富的主食与饮品，欢迎各位小主光临。",
            "distance": 2606,
            "favored": false,
            "flavors": [
              {
                "id": 234,
                "name": "炸鸡炸串"
              },
              {
                "id": 229,
                "name": "日韩料理"
              }
            ],
            "float_delivery_fee": 3,
            "float_minimum_order_amount": 20,
            "has_story": false,
            "id": "E6217432586105787206",
            "image_path": "3f73a3dcea450c2851a80f32286c614bpng",
            "is_new": false,
            "is_premium": true,
            "is_star": false,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.276447,
            "longitude": 120.017281,
            "max_applied_quantity_per_order": -1,
            "name": "咕咕韩式炸鸡(淘宝城店)",
            "next_business_time": "明天 09:30",
            "only_use_poi": false,
            "opening_hours": [
              "09:30/00:45"
            ],
            "order_lead_time": 40,
            "out_of_range": false,
            "phone": "18367196101",
            "piecewise_agent_fee": {
              "description": "配送费¥3",
              "extra_fee": 0,
              "is_extra": true,
              "no_subsidy_fee": "¥4",
              "rules": [
                {
                  "fee": 3,
                  "price": 20
                }
              ],
              "tips": "配送费¥3"
            },
            "platform": 0,
            "posters": [],
            "promotion_info": "各位咕咕的铁粉们你们最钟爱的缤纷套餐现已开卖欢迎品尝，感谢各位对咕咕的支持与厚爱，咕咕鸡会继续为大家提供优质的商品与服务！祝广大新老顾客生活愉快",
            "rating": 4.8,
            "rating_count": 441,
            "recent_order_num": 4824,
            "recommend": {
              "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
              "is_ad": false,
              "track": "{\"rankType\":\"3\"}"
            },
            "recommend_reasons": [
              {
                "name": "味道超赞"
              },
              {
                "name": "回头客多"
              }
            ],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/shop/#id=E6217432586105787206",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "炸鸡炸串",
                "type": 1
              }
            ],
            "supports": [
              {
                "border": "90dddddd",
                "description": "商家原因导致订单取消，赔付代金券",
                "icon_color": "999999",
                "icon_name": "赔",
                "id": 10,
                "name": "拒单赔",
                "text_color": "666666",
                "two_characters_icon_name": ""
              },
              {
                "border": "90dddddd",
                "description": "该商家支持开发票，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票",
                "text_color": "666666",
                "two_characters_icon_name": "发票"
              }
            ],
            "tags": [],
            "target_tag_path": "d53fc0cb4dc67973038cbc591938a1b6png",
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 0
          }
        },
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"80\": {\"1\": 35.0, \"0\": 0}, \"50\": {\"1\": 25.0, \"0\": 0}, \"99\": {\"1\": 40.0, \"0\": 0}, \"150\": {\"1\": 55.0, \"0\": 0}, \"30\": {\"1\": 15.0, \"0\": 0}}",
                "description": "满30减15，满50减25，满80减35，满99减40，满150减55",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 2096647578,
                "is_exclusive_with_food_activity": true,
                "name": "回家吃饭",
                "tips": "满30减15，满50减25，满80减35，满99减40，满150减55",
                "type": 102
              },
              {
                "attribute": "{\"185.0\": {\"quantity\": 1, \"must_pay_online\": 1, \"name\": \"1.25\\u5347\\u53ef\\u4e50\"}, \"55.0\": {\"quantity\": 1, \"must_pay_online\": 1, \"name\": \"\\u5f00\\u80c3\\u9178\\u841d\\u535c\"}}",
                "description": "满185元赠送1.25升可乐1份，满55元赠送开胃酸萝卜1份",
                "icon_color": "3cc791",
                "icon_name": "赠",
                "id": 799133082,
                "is_exclusive_with_food_activity": true,
                "name": "赠品活动",
                "tips": "满185元赠送1.25升可乐1份，满55元赠送开胃酸萝卜1份",
                "type": 106
              },
              {
                "attribute": "15.0",
                "description": "新用户下单立减15元",
                "icon_color": "70bc46",
                "icon_name": "首",
                "id": 2081098626,
                "is_exclusive_with_food_activity": true,
                "name": "新用户立减(不与其他活动共享)",
                "tips": "新用户下单立减15元",
                "type": 103
              },
              {
                "attribute": "2.0",
                "description": "本店新用户立减2元",
                "icon_color": "00b762",
                "icon_name": "新",
                "id": 799319586,
                "is_exclusive_with_food_activity": true,
                "name": "门店新客立减",
                "tips": "本店新用户立减2元",
                "type": 108
              },
              {
                "description": "特价商品9.9元起",
                "icon_color": "f1884f",
                "icon_name": "折",
                "id": 2088952458,
                "name": "限时秒杀-9.9午餐",
                "tips": "限时秒杀-9.9午餐"
              },
              {
                "description": "折扣商品5折起",
                "icon_color": "f07373",
                "icon_name": "折",
                "id": 2072459010,
                "name": "周四套餐日",
                "tips": "周四套餐日"
              }
            ],
            "address": "浙江省杭州市余杭区五常街道瑞谷中心6幢206室",
            "authentic_id": 3384502447205606,
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"30减15\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"50减25\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"80减35\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"99减40\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"150减55\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"a25c03\", \"text\": \"3元会员红包\", \"border\": \"4ca25c03\", \"background\": null, \"type\": 2, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"品质联盟\", \"border\": \"4ce23028\", \"background\": null, \"type\": 4, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"门店新客减2\", \"border\": \"4ce23028\", \"background\": null, \"type\": 6, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"5折\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"9.9元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"赠\", \"border\": \"4ce23028\", \"background\": null, \"type\": 10, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"首单减15\", \"border\": \"4ce23028\", \"background\": null, \"type\": 5, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 3,
            "description": "回家吃饭私房菜海创园店开业了（在未来科技城店升级），有着3年以上专业小炒外卖经验,很大程度上满足客户对外卖的时效及品质，我们励志做未来科技城最优质的小炒外卖服务商！",
            "distance": 2476,
            "favored": false,
            "flavors": [
              {
                "id": 221,
                "name": "川湘菜"
              },
              {
                "id": 225,
                "name": "江浙菜"
              }
            ],
            "float_delivery_fee": 0.5,
            "float_minimum_order_amount": 20,
            "has_story": false,
            "id": "E16961822220977037673",
            "image_path": "53c149651bc752edb35b5465410103e9png",
            "is_new": false,
            "is_premium": false,
            "is_star": false,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.286868,
            "longitude": 120.013448,
            "max_applied_quantity_per_order": -1,
            "name": "回家吃饭私房菜(海创园店)",
            "next_business_time": "明天 09:30",
            "only_use_poi": false,
            "opening_hours": [
              "09:30/21:00"
            ],
            "order_lead_time": 34,
            "out_of_range": false,
            "phone": "17705810684",
            "piecewise_agent_fee": {
              "description": "配送费¥0.5",
              "extra_fee": -2.5,
              "is_extra": true,
              "no_subsidy_fee": "¥3.5",
              "rules": [
                {
                  "fee": 0.5,
                  "price": 20
                }
              ],
              "tips": "配送费¥0.5"
            },
            "platform": 0,
            "posters": [],
            "promotion_info": "亲们，原回家吃饭私房菜未来科技城店升级后更名为回家吃饭私房菜海创园店，我们在原有的菜品做了添加和改进，以便更好的服务于大家，爱你们，常来. 另外小金额发票需累计到150以上才可开票，还请亲们留意！",
            "rating": 4.5,
            "rating_count": 431,
            "recent_order_num": 3158,
            "recommend": {
              "is_ad": false,
              "reason": ""
            },
            "recommend_reasons": [
              {
                "name": "味道超赞"
              }
            ],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/shop/#id=E16961822220977037673",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "川湘菜",
                "type": 1
              }
            ],
            "supports": [
              {
                "border": "90dddddd",
                "description": "该商户食品安全已由国泰产险承担，食品安全有保障",
                "icon_color": "999999",
                "icon_name": "保",
                "id": 7,
                "name": "食安保",
                "text_color": "666666",
                "two_characters_icon_name": "保险"
              },
              {
                "border": "90dddddd",
                "description": "该商家支持开发票，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票",
                "text_color": "666666",
                "two_characters_icon_name": "发票"
              }
            ],
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 0
          }
        },
        {
          "restaurant": {
            "act_tag": 0,
            "activities": [
              {
                "attribute": "{\"99\": {\"1\": 45, \"0\": 0}, \"69\": {\"1\": 35, \"0\": 0}, \"49\": {\"1\": 25, \"0\": 0}}",
                "description": "满49减25，满69减35，满99减45",
                "icon_color": "f07373",
                "icon_name": "减",
                "id": 6000041205,
                "is_exclusive_with_food_activity": false,
                "name": "全店满减",
                "tips": "满49减25，满69减35，满99减45",
                "type": 102
              },
              {
                "description": "特价商品0.01元起",
                "icon_color": "f1884f",
                "icon_name": "特",
                "id": 1000000000186903,
                "name": "1",
                "tips": "1"
              }
            ],
            "address": "浙江省杭州市余杭区五常街道向往街317号",
            "authentic_id": 6344532462583008,
            "baidu_id": 2267022975,
            "business_info": "{\"lemon_support_tags\": [{\"color\": \"cce23028\", \"text\": \"49减25\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"69减35\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"99减45\", \"border\": \"4ce23028\", \"background\": null, \"type\": 1, \"icon\": null}, {\"color\": \"cce23028\", \"text\": \"0.01元特价\", \"border\": \"4ce23028\", \"background\": null, \"type\": 7, \"icon\": null}], \"ad_info\": null}",
            "delivery_fee_discount": 0,
            "delivery_mode": {
              "border": "",
              "color": "2395FF",
              "gradient": {
                "rgb_from": "00AAFF",
                "rgb_to": "0085FF"
              },
              "icon_hash": "b9b45d2f6ff0dbeef3a78ef0e4e90abapng",
              "id": 1,
              "is_solid": true,
              "text": "蜂鸟专送",
              "text_color": "FFFFFF"
            },
            "description": "1997年，鲜丰水果创始于杭州，经历二十一年发展，只做一件事：一心一意做水果，目前门店数超1500家,拥有200多位产品专家常年驻扎300多个种植基地，全程监控种植和采摘过程，从而实现供应链的稳定性和可靠性，真正的做到“新鲜才好吃”！",
            "distance": 2106,
            "favored": false,
            "flavors": [
              {
                "id": 245,
                "name": "水果"
              }
            ],
            "float_delivery_fee": 2.5,
            "float_minimum_order_amount": 20,
            "folding_restaurant_brand": "鲜丰水果",
            "folding_restaurants": [
              {
                "distance": 3376,
                "id": "E6650746906603944668",
                "name": "鲜丰水果（杭州欧美金融城店）",
                "order_lead_time": 34,
                "scheme": "https://h5.ele.me/newretail/p/shop/?id=2235491355",
                "type": 1
              },
              {
                "distance": 3813,
                "id": "E14199225908947418366",
                "name": "鲜丰水果（西溪花园店）",
                "order_lead_time": 29,
                "scheme": "https://h5.ele.me/newretail/p/shop/?id=2218009227",
                "type": 1
              }
            ],
            "has_story": false,
            "id": "E17246645906019247304",
            "image_path": "a20d3dbc141c25ab5edda42061f6c5d4jpeg",
            "is_new": false,
            "is_premium": false,
            "is_star": false,
            "is_stock_empty": 0,
            "is_valid": 1,
            "latitude": 30.286395546256,
            "longitude": 120.0162336484,
            "max_applied_quantity_per_order": -1,
            "name": "鲜丰水果（杭州绿城未来park店）",
            "next_business_time": "明天 08:30",
            "only_use_poi": false,
            "opening_hours": [
              "08:30/22:00"
            ],
            "order_lead_time": 26,
            "out_of_range": false,
            "phone": "13472698838",
            "piecewise_agent_fee": {
              "description": "配送费¥2.5",
              "extra_fee": 0.5,
              "is_extra": true,
              "no_subsidy_fee": "",
              "rules": [
                {
                  "fee": 2.5,
                  "price": 20
                }
              ],
              "tips": "配送费¥2.5"
            },
            "platform": 1,
            "posters": [],
            "promotion_info": "努力服务好每一位选择我的客人",
            "rating": 4.7,
            "rating_count": 776,
            "recent_order_num": 1340,
            "recommend": {
              "image_hash": "731111f3f9379e772eedf4855beae8a1jpeg",
              "is_ad": false,
              "track": "{\"rankType\":\"29\"}"
            },
            "recommend_reasons": [
              {
                "name": "回头客多"
              },
              {
                "name": "配送飞快"
              }
            ],
            "regular_customer_count": 0,
            "scheme": "https://h5.ele.me/newretail/p/shop/?id=2267022975",
            "status": 1,
            "support_tags": [
              {
                "border": "dddddd",
                "color": "666666",
                "icon": "4e20966ca2a516de3f02fb9c7fd1bc6dpng",
                "text": "水果",
                "type": 1
              }
            ],
            "supports": [
              {
                "border": "90dddddd",
                "description": "该商家支持开发票，请在下单时填写好发票抬头",
                "icon_color": "999999",
                "icon_name": "票",
                "id": 4,
                "name": "开发票",
                "text_color": "666666",
                "two_characters_icon_name": "发票"
              }
            ],
            "theme": {
              "default_color": "2395ff",
              "header_style": 0,
              "hongbao_style": 0,
              "price_color": "ff5339",
              "third_tab_name": "商家",
              "vanish_fields": []
            },
            "type": 1
          }
        }
      ],
      "meta": {
        "rank_id": "4f0b4ff03db94820883ebc2c8cf3deef"
      }
    }
  }
  return new Promise((resolve, reject) => {
    resolve(rsp)
  })
}

export const getHomeClassifyList = ()=>{
  let rsp = {
    status: 0,
    msg: 'success',
    data:[
      {name: '美食', image_hash: "7d8a867c870b22bc74c87c348b75528djpeg"},
      {name: '夜宵', image_hash: "92160ac33f023d9074e13cd78f9b5964jpeg"},
      {name: '商超便利', image_hash: "c7e76a23eb90dada42528bc41499d6f8jpeg"},
      {name: '水果', image_hash: "0d0dd7c960f08cdc756b1d3ad54978fdjpeg"},
      {name: '医药健康', image_hash: "70aaf108e256ebc9f02db599592ae655jpeg"},
      {name: '浪漫鲜花', image_hash: "301c888acb2c8ba9e0c813f36ec9e90ajpeg"},
      {name: '汉堡披萨', image_hash: "b7f432619fb21a40b05cd25d11eca02djpeg"},
      {name: '厨房生鲜', image_hash: "c21e42997b86b232161a5a16ab813ae8jpeg"},
      {name: '炸鸡烤串', image_hash: "a780fb469b2da210827ec16896e00420jpeg"},
      {name: '地方菜系', image_hash: "a8aec21096d528b7cfd23cdd894f01c6jpeg"},
      {name: '麻辣烫', image_hash: "ec7b7ba9547aa700bd20d0420e1794a8jpeg"},
      {name: '速食简餐', image_hash: "01a314b6da88ab6c7ae9828f91652d40jpeg"},
      {name: '地方小吃', image_hash: "7d66f2631288a44ec177204e05cbcb93jpeg"},
      {name: '大牌惠吃', image_hash: "a7bb02bd836411c016935d258b300cfejpeg"},
      {name: '米粉面馆', image_hash: "e89185f7259ebda19e16123884a60ef2jpeg"},
      {name: '包子粥店', image_hash: "51adc885d2ce022d2ee60495acafb795jpeg"},
    ]
  }
  return new Promise((resolve, reject) => {
    resolve(rsp)
  })
}

export default {
  getStoreList,getHomeClassifyList
}
