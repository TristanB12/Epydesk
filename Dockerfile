FROM node:14.18.3

WORKDIR app

COPY . .

RUN cd front && npm install && npm run build
RUN cd back && npm install

EXPOSE 3000
CMD  node ./back/server.js