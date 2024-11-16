import getCookie from '../utils/cookie.js';
import { verifyToken } from '../utils/jwt.js';

const authenticate = async (req, res, next) => {
  try {
    const cookies = getCookie(req);

    if (cookies.length === 0) {
      return res.status(401).json({
        message: 'You are not authorized to access this resource.',
        isAuthenticated: false,
      });
    }

    const fullToken = cookies.find((cookie) => cookie.startsWith('postagramToken'));

    if (!fullToken) {
      return res.status(401).json({
        message: 'You are not authorized to access this resource.',
        isAuthenticated: false,
      });
    }

    const token = fullToken.split('=')[1];

    const verified = verifyToken({ token });
    if (!verified) {
      return res.status(401).json({
        message: 'Token expired, please login again',
        isAuthenticated: false,
      });
    }

    req.tokenData = verified;
    next();
  } catch (err) {
    console.error('Error in authentication middleware:', err.message);
    return res.status(500).json({
      message: 'An internal server error occurred.',
      isAuthenticated: false,
    });
  }
};

export default authenticate;