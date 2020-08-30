FROM node:8

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN ./node_modules/.bin/lerna bootstrap

EXPOSE 3000
EXPOSE 8100
