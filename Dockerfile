FROM node:20.15.1-alpine

WORKDIR /var/nextjs

COPY package.json package-lock.json /var/nextjs/

RUN npm install

RUN npm install -g eslint@6.8.0

COPY . /var/nextjs

RUN npm run build

EXPOSE 5000

CMD ["npm","start"]