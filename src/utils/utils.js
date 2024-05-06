/**
 * 将图片文件转换为 Base64 格式
 * @param {File} file - 图片文件对象
 * @returns {Promise} - 返回 Promise 对象
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export async function urlToBase64(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const reader = new FileReader();
        const blob = await response.blob();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      } else {
        throw new Error('图片加载失败');
      }
    } catch (error) {
      console.error(error);
    }
  });
}

/**
 * 复制功能
 * @param {String} text 被复制的文本
 */
export function copyText(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

/**
 * 通过value返回arr数组的label
 * @param {Array} arr 
 * @param {Number/String} value 
 * @returns 
 */
export function filterLabel(arr, value) {
  if (!arr.length) {
    return ""
  }
  return arr.find(item => item["value"] === value)["label"]
}

/**
 * 延时函数
 * @param {Number} time 
 * @returns 
 */
export const sleep = async(time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  });
}