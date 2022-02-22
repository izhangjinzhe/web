FROM node:latest as build
WORKDIR /home

COPY . /home/
RUN npm install && npm run build --mode production
VOLUME /docker_volume/nginx/html /dist
