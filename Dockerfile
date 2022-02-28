FROM node:16.14-alpine

EXPOSE 80

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]