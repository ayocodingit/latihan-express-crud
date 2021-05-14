FROM node:10-alpine

ARG HOST=0.0.0.0
ENV HOST=${HOST}

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "production" ]