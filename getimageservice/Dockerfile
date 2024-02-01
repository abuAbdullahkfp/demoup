FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install \
    && npm install typescript -g

COPY . .

EXPOSE 3002

CMD ["npm", "run", "dev"]