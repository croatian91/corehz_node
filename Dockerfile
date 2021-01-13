FROM node:12.18.1

WORKDIR /code

COPY ["package*.json", "yarn.lock", "./"]

RUN yarn install

COPY . .