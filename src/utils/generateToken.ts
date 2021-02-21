import { SECRET_KEY } from "./../config/env";
import jwt from "jsonwebtoken";

export const generateToken = (user: any) => {
  return jwt.sign(
    {
      id: user.id,
      role: user.role,
    },
    String(SECRET_KEY),
    {
      expiresIn: "1h",
    }
  );
};

// test
// (() => {
//   const t = jwt.sign(
//     {
//       id: 1,
//       role: "user",
//     },
//     String(SECRET_KEY),
//     {
//       expiresIn: "1h",
//     }
//   );
//   console.log(`token test for  {
//       id: 1,
//       role: "user",
//     }`);
//   console.log(t);
// })();
