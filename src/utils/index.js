import { message } from 'antd';

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

export default {
  globalMessage
};