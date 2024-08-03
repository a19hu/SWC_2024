FROM node:latest

WORKDIR /myapp

COPY . .

RUN npm install

CMD [ "npm","start" ]