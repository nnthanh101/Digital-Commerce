FROM node:16

WORKDIR /app/ecommerce

COPY package*.json ./
COPY develop.sh .

RUN apt-get update
RUN apt-get install -y python
RUN npm install npm@latest -g
RUN npm install @medusajs/medusa-cli@latest -g

RUN npm install --loglevel=error

COPY . .

ENTRYPOINT ["./develop.sh", "develop"]