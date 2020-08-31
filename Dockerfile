FROM node:8

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN ./node_modules/.bin/lerna bootstrap

EXPOSE 3000
EXPOSE 8100

CMD ["npm", "run", "node"]
