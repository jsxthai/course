import { AuthenticationError } from "apollo-server-express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "./../config/env";

export const authJwt = async (context: any) => {
  const authHeader: string = context.req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const payload = await jwt.verify(token, String(SECRET_KEY));
        // console.log(userDecode);
        // return user
        if (payload) return payload;
        else throw new AuthenticationError("Invalid/Expired token");
      } catch (error) {
        throw new AuthenticationError("Invalid/Expired token");
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
