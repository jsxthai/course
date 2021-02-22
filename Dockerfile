FROM node:14.15.5-alpine3.10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g prisma

RUN prisma generate

CMD ["npm", "run", "start:prod"]