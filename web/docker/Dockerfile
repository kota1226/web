FROM node:20-bullseye

WORKDIR /usr/src/

COPY ./frontend/package.json .
COPY ./frontend/yarn.lock .

RUN yarn install

EXPOSE 3000
