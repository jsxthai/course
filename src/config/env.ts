import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 4000;

export const NODE_ENV = process.env.NODE_ENV;

export const SECRET_KEY = process.env.SECRET_KEY;
