import { UserInputError } from "apollo-server-express";
import bcrypt from "bcrypt";
import configModel from "../../config/models.json";
import prisma from "../../config/prisma";
import { generateToken } from "./../../utils/generateToken";
import { validateLoginInput } from "./../../utils/validator";

export default {
  Query: {
    users: async () => {
      return await prisma.user.findMany({
        include: {
          courses: true,
        },
      });
    },
    user: async (_: any, args: any) => {
      return await prisma.user.findUnique({
        where: {
          id: Number(args.id),
        },
        include: {
          courses: true,
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
    deleteUser: async (_: any, args: any) => {
      const { id } = args;

      try {
        const deleteUser = await prisma.user.delete({
          where: {
            id: Number(id),
          },
        });
      } catch (error) {
        console.log(error);
      }

      return {
        success: true,
        message: "delete success",
      };
    },
  },
};
