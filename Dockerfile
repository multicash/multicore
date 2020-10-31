FROM node:8.17

COPY . /multicash
WORKDIR /multicash

RUN yarn install
RUN yarn bootstrap
RUN yarn compile

EXPOSE 3000
EXPOSE 8100
CMD ["yarn", "run", "node"]
