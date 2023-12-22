FROM nginx:stable-alpine
LABEL maintainer="Dylan Garvis <dylan@garvis.dev>"

RUN apk -U upgrade
RUN apk add nodejs npm

RUN mkdir /code
COPY ./ /code/
RUN rm -rf /code/node_modules
RUN rm -rf /code/dist


WORKDIR /code
RUN npm i
RUN npm run build
COPY ./dist/ /usr/share/nginx/html/
RUN rm -rf /code

RUN apk del nodejs npm
