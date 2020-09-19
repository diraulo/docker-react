FROM node:alpine as base


RUN apk add --update yarn

WORKDIR /app

COPY package.json .
RUN yarn

COPY . .

RUN yarn build


FROM nginx
COPY --from=base /app/build /usr/share/nginx/html
