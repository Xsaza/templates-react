FROM node:14.17.6-alpine3.13
WORKDIR /app
ARG port_to_expose

COPY package.json .
COPY package-lock.json .
RUN npm i

COPY tsconfig.json .
COPY tsconfig.app.json .
COPY webpack.config.ts .
COPY src src

EXPOSE ${port_to_expose}

CMD npm start