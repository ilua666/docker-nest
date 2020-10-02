FROM node:14-alpine
WORKDIR /usr/src/app

COPY . .
COPY package*.json ./

RUN npm install
CMD [ "npm", "run", "start" ]

# replace this with your application's default port