import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      res.json({ success: false, message: "Unauthorized , Login again" });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    req.body.userId = token_decode.userId;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
