FROM node:20-bullseye

WORKDIR /usr/src/focs/app/src

RUN apt update
RUN npm i -g npm@latest

COPY ./src/package.json .
RUN yarn install --production

COPY ./src/ .

EXPOSE 3000

CMD bash -c "./run.sh"
