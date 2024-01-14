FROM node:18

WORKDIR /fidelimax

COPY package*.json ./

RUN rm -rf node_modules && yarn

COPY . .

CMD ["yarn", "start"]
