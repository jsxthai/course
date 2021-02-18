import { generateToken } from "./../../utils/generateToken";
import { validateLoginInput } from "./../../utils/validator";
import prisma from "../../config/prisma";
import { UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";
import configModel from "../../config/models.json";

export default {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    user: async (_: any, args: any) => {
      return await prisma.user.findUnique({
        where: {
          id: Number(args.id),
        },
      });
    },
  },
  Mutation: {
    login: async (_: any, { email, password }: any) => {
      const { errors, valid } = validateLoginInput(email, password);

      if (!valid) {
        throw new UserInputError("ERROR", { errors });
      }

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("ERROR", { errors });
      }

      const math = await bcrypt.compare(password, user.password);
      if (!math) {
        errors.general = "Wrong crendetials";
        throw new UserInputError("ERROR", { errors });
      }

      const token = generateToken(user);

      return {
        user,
        token,
      };
    },
    createUser: async (_: any, args: any) => {
      const { name, password, email } = args.registerInput;

      const passwordHash = await bcrypt.hash(password, 12);

      // not yet validate register input
      const user = await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: passwordHash,
          role: configModel["user"].defaultRole,
        },
      });

      const token = generateToken(user);

      return {
        user,
        token,
      };
    },
  },
};
