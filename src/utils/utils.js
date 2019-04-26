//处理ele图片
import {ELE_IMG_URL} from "./config";

export const formatImgWithEle = (path) => {
  if (!path) return ''
  const reg = /jpg$|jpeg$|png$|tif$/g
  const imgType = path.match(reg)
  return ELE_IMG_URL + insertStr(insertStr(path, 2, '/'), 1, '/') + '.' + imgType
}

// 往字符串指定位置插入新字符
export const insertStr = (soure, start, newStr) => {
  return soure.slice(0, start) + newStr + soure.slice(start);
}

export const findIndex = (list,target,key)=>{
  let oldIndex = -1
  list && list.length > 0 && list.map((item, index) => {
    if (item[key] === target) {
      oldIndex = index
    }
  })
  return oldIndex
}


