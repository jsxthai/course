import { SECRET_KEY } from "./../config/env";
import jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
    },
    String(SECRET_KEY),
    {
      expiresIn: "1h",
    }
  );
};
