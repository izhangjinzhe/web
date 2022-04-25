FROM node:16 as build

LABEL maintainer=zhangjinzhe@88.com

WORKDIR /app
COPY . .

RUN yarn install --registry=https://registry.npmmirror.com/ && yarn build

FROM nginx:latest as deploy

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


