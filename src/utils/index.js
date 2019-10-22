import { message } from 'antd';
import moment from 'moment';

// 全局提示
const globalMessage = (type, msg, duration) => {
  const dur = duration || 3;
  const typeMap = {
    info: () => { message.info(msg, dur); },
    success: () => { message.success(msg, dur); },
    warning: () => { message.warning(msg, dur); },
    error: () => { message.error(msg, dur); },
  };
  if (typeMap[type]) {
    typeMap[type]();
  }
};

// 日期格式转换
const dateFormat = (ISOTime, format) => {
  const defaultFormat = 'YYYY-MM-DD HH:MM';
  const timeStamp = Date.parse(ISOTime);
  const UTCTime = new Date(timeStamp);

  return moment(UTCTime).format(format || defaultFormat);
};

export default {
  globalMessage, dateFormat
};