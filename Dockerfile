FROM node:16.14-alpine

EXPOSE ${NODE_ENV_PORT}

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]