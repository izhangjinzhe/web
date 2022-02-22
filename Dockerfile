FROM node:latest as build
WORKDIR /
COPY . /

RUN npm install && npm run build --mode production
VOLUME /docker_volume/nginx/html /dist
