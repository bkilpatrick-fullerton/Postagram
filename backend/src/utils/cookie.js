import logger from "./logger.js";

const getCookie = (req) => {
  // grab all cookies
  const { cookie } = req.headers;
  logger.debug(cookie);

  // if no cookies []
  if (!cookie) return [];

  // return cookie array
  return cookie.split('; ');
};

export default getCookie;
