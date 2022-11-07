<p align="center">
  <a href="https://oceansoft.io">
    <img alt="OceanSoft" src="admin/public/logo.svg" width="100" />
  </a>
</p>

<h1 align="center">
  🎯 Shopify-like Digital Commerce ⚡
</h1>

<p align="center">
🎯 The Shopify-like digital commerce engine built for developers optimizes operations and creates unique customer experiences; offers extensibility and customization with minimal developer effort; and provides an open, modular architecture that eliminates "hacky" workarounds, as well as speed and maintainability, allowing merchants to scale quickly without incurring technical debt. 

⚡ Digital commerce can be easily integrated with PayPal, Stripe, MeiliSearch, etc., as well as powered by Node.JS, Gatsby, and Next.JS.
</p>

<p align="center">
  <a href="https://github.com/OceanSoftIO/ecommerce-storefront/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Released under the MIT license." />
  </a>
  <a href="https://discord.gg/KAS8GBjs">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=job4u101">
    <img src="https://img.shields.io/twitter/follow/job4u101.svg?label=Follow%20@job4u101" alt="Follow @job4u101" />
  </a>
</p>


## Architecture

> ✅ **Prerequisites**: 

## eCommerce Features

* Ecommerce Features: This storefront provides a wide range of ecommerce capabilities to simplify shopping for your customers.
  * Products and Collections: An easy-to-navigate storefront allows users to browse both products and collections. You can also filter products by collection.
  * Cart and Full Checkout Features: Customers can view and edit their carts at any time. After that, customers can place their order through the one-page checkout process.
  * Customer Accounts: Customers can register or log in to access profile features such as saved addresses, order history, and more.
  * Completely Customizable: This storefront allows you to make changes to every aspect of your storefront, including page designs, components, and styles all located in the src directory.
  
    > As a result, developers are free to redesign the storefront, add more features, and integrate more third-party services.

* In addition to a headless architecture, seamless design and powerful ecommerce features, Next.js's storefront integrates with third-party services and tools for integration of payment providers and search engines.
  * MeiliSearch/Algolia Search Engine Integration: This storefront already has integration with MeiliSearch and Algolia, allowing customers to find the products they need quickly and easily.
  * PayPal and Stripe Integration: If you have Stripe and PayPal plugins installed on your eCommerce Server, the Next.js storefront will show the necessary checkout screen automatically! 


## Developemnt -Setting up your store

- Install the Medusa CLI
  ```
  # npm install -g @medusajs/medusa
  
  # yarn global add @medusajs/medusa@latest @medusajs/medusa-cli@latest medusa-interfaces@latest

  yarn global add @medusajs/medusa
  
  medusa telemetry --disable

  ```
- Create a new eCommerce-Backend project
  ```
  medusa new backend
  ```
- Run your project
  ```
  cd backend
  # medusa develop
  yarn start
  ```

Your local eCommerce-Backend server is now running on port **9000**.

### Seeding your eCommerce Store

---

To seed your eCommerce Store run the following command:

```
# rm medusa-db.sql
medusa seed -f ./data/seed-nft.json
```

This command seeds your database with some sample data to get you started, including a store, an administrator account, a region and a product with variants. What the data looks like precisely you can see in the `./data/seed.json` file.

## Developemnt - Setting up your store with Docker

- Install the Medusa CLI
  ```
  npm install -g @medusajs/medusa-cli
  ```
- Create a new Medusa project
  ```
  medusa new backend
  ```

### Building & Running the Docker Image

* Building the Docker Image

  `docker build -t ecommerce:latest .`

  + The name of the docker image is `ecommerce`, and it's tagged with `:latest`
  + Lastly, grab a cup of coffee ☕️, normally a few minutes , and sit back while Docker does its magic 🪄

  `docker system prune --all --force`

* Running the Docker Image

  ```
  # docker run -d -p 9000:9000 ecommerce
  docker run --name ecommerce -d -p 9000:9000 ecommerce 
  ```

  + Docker will run the image cms-backend, or whatever you called your project, 🤔 on port 9999.
  + `-d` means detached and is a fancy way of saying "Runs in the background"
  + Tip: To use Medusa on another port while developing, change the first part of the run port.

  ```
  # docker run -d -p 9999:9000 ecommerce
  docker run --name ecommerce -d -p 9999:9000 ecommerce 
  ```

  `docker exec ecommerce medusa seed -f ./data/seed.json`

  + Finally, [run on port 9000](http://localhost:9000/admin/) 👍 

> ✍️ We are currently using an SQLite database, which is always inside the container. Whenever we stop a container, we lose all changes. Using `docker-compose`, we can use a Postgres database and run multiple instances of Docker if needed.

---

- Update project config in `medusa-config.js`:

  ```
  module.exports = {
    projectConfig: {
      redis_url: REDIS_URL,
      database_url: DATABASE_URL, //postgres connectionstring
      database_type: "postgres",
      store_cors: STORE_CORS,
      admin_cors: ADMIN_CORS,
    },
    plugins,
  };
  ```

- Run your project

  When running your project the first time `docker compose` should be run with the `build` flag to build your container locally:

  ```
  # docker-compose up --build
  docker-compose -p ecommerce-app up --build
  ```

  When running your project subsequent times you can run docker compose with no flags to spin up your local environment in seconds:

  ```
  # docker-compose up
  docker-compose -p ecommerce-app up
  ```

Your local eCommerce-Backend server is now running on port **9000**.

### Seeding your eCommerce-Backend store with Docker

---

To add seed data to your eCommerce-Backend running with Docker, run this command in a seperate terminal:

```
docker exec ecommerce medusa seed -f ./data/seed.json
```

This will execute the previously described seed script in the running `medusa-server` Docker container.

## Try it out

```
curl -X GET localhost:9000/store/products | python -m json.tool
```

After the seed script has run you will have the following things in you database:

- a User with the email: admin@oceansoft.io and password: supersecret
- a Region called Default Region with the countries GB, DE, DK, SE, FR, ES, IT
- a Shipping Option called Standard Shipping which costs 10 EUR
- a Product called Cool Test Product with 4 Product Variants that all cost 19.50 EUR


## Deployment

### Deploy eCommerce Server in 5 minutes

### Deploy eCommerce Storefront in 5 minutes

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/OceanSoftIO/ecommerce-storefront)

### Deploy eCommerce Admin in 5 minutes


## Payment integrations

By default this starter supports the following payment integrations

- [Stripe](https://stripe.com/)
- [Paypal](https://www.paypal.com/)

To enable the integrations you need to add the following to your `.env.local` file:

```shell
MEDUSA_PAYMENT_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
MEDUSA_PUBLIC_PAYPAL_CLIENT_ID=<your-paypal-client-id>
```

You will also need to setup the integrations in your Medusa server. See the [Medusa documentation](https://docs.medusajs.com) for more information on how to configure [Stripe](https://docs.medusajs.com/add-plugins/stripe) and [PayPal](https://docs.medusajs.com/add-plugins/paypal) in your Medusa project.

## Search integration

This starter is configured to support using the `medusa-search-meilisearch` plugin out of the box. To enable search you will need to enable the feature flag in `./store-config.json`, which you do by changing the config to this:

```json
{
  "features": {
    "search": true
  }
}
```

Before you can search you will need to install the plugin in your Medusa server, for a written guide on how to do this – [see our documentation](https://docs.medusajs.com/add-plugins/meilisearch).

The search components in this starter are developed with Algolia's `react-instant-search-hooks-web` library which should make it possible for you to seemlesly change your search provider to Algoli instead of MeiliSearch.

To do this you will need to add `algoliasearch` to the project, by running

```shell
yarn add algoliasearch
```

After this you will need to switch the current MeiliSearch `SearchClient` out with a Alogolia client. To do this update `@lib/search-client`.

```ts
import algoliasearch from "algoliasearch/lite"

const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "test_app_id" // You should add this to your environment variables

const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"

export const searchClient = algoliasearch(appId, apiKey)

export const SEARCH_INDEX_NAME =
  process.env.NEXT_PUBLIC_INDEX_NAME || "products"
```

After this you will need to set up Algolia with your Medusa server, and then you should be good to go. For a more thorough walkthrough of using Algolia with Medusa – [see our documentation](https://docs.medusajs.com/add-plugins/algolia), and the [documentation for using `react-instantsearch-hooks-web`](https://www.algolia.com/doc/guides/building-search-ui/getting-started/react-hooks/).

## Tech Stack

The Tech Stack is built with:

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Medusa](https://medusajs.com/)