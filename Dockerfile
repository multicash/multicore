FROM node:8.12

COPY . /multicash
WORKDIR /multicash

RUN npm install
RUN npm run bootstrap
RUN npm run compile

EXPOSE 3000
EXPOSE 8100
CMD ["npm", "run", "node"]
