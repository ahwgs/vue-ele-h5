//处理ele图片
export const formatImgWithEle = (path) => {
  if (!path) return ''
  const reg = /jpg$|jpeg$|png$|tif$/g
  const imgType = path.match(reg)
  return insertStr(insertStr(path, 2, '/'), 1, '/') + '.' + imgType
}

// 往字符串指定位置插入新字符
export const insertStr = (soure, start, newStr) => {
  return soure.slice(0, start) + newStr + soure.slice(start);
}
