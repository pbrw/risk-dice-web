FROM node:lts-slim

WORKDIR /usr/src/client

COPY src ./src
COPY public ./public
COPY package.json .
COPY tsconfig.json .

RUN npm install
RUN npm run build
RUN npm install -g serve

EXPOSE 3000

CMD serve -s build