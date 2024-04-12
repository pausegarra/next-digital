FROM node:18-alpine3.19 as builder

WORKDIR /app
COPY . .

RUN yarn
RUN yarn test
RUN yarn build

FROM node:18-alpine3.19 as server

WORKDIR /app

COPY --from=builder /app/dist ./src
COPY package.json package.json
COPY yarn.lock yarn.lock
COPY .env .env

RUN yarn --prod

ENTRYPOINT [ "node", "src/index.js" ]