FROM node:17.1.0 as deps

WORKDIR /app/ecommerce

COPY package*.json ./

RUN yarn global add @medusajs/medusa-cli@latest

COPY . .

RUN ls
RUN yarn install

## ===== DEVELOPMENT STAGE =====

FROM deps as dev

ENV NODE_ENV=development

ENTRYPOINT ["./develop.sh", "develop"]