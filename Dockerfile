FROM nginx:stable-alpine
LABEL maintainer="Dylan Garvis <dylan@garvis.dev>"

RUN apk -U upgrade
RUN apk add nodejs npm

RUN mkdir /code
COPY ./ /code/

WORKDIR /code
RUN npm i
RUN npm run build
RUN mv ./dist/* /usr/share/nginx/html/
RUN rm -rf /code

RUN apk del nodejs npm
