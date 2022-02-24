FROM node:16.14-alpine

EXPOSE 3000

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]