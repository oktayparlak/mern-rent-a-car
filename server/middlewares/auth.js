import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    let token = req.header('Authorization');

    if (!token) {
      return res.status(403).json({ message: 'No token provided' });
    }

    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      req.user = decoded;
      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
