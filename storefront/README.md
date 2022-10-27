<p align="center">
  <a href="https://ecommerce.oceansoft.io">
    <img alt="OceanSoft" src="https://academy.job4u.io/static/b5b477f8d3c818783b0ec3fb68a5e570/e64f1/logo.webp" width="100" />
  </a>
</p>

<h1 align="center">
  [💰 Ecommerce Frontend] ⚡ Next.js Storefront 💎
</h1>

<p align="center">
⚡ Next.js Storefront 💎 include ready integrations with PayPal, Stripe, MeiliSearch, and many more! 🌥
</p>

<p align="center">
  <a href="https://github.com/OceanSoftIO/ecommerce-storefront/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="Released under the MIT license." />
  </a>
  <a href="https://discord.gg/KAS8GBjs">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=OceanSoft101">
    <img src="https://img.shields.io/twitter/follow/OceanSoft101.svg?label=Follow%20@OceanSoft101" alt="Follow @OceanSoft101" />
  </a>
</p>

<details>
<summary>🚦 Prerequisites:</summary>
  
  * ✅ [eCommerce Backend](https://github.com/medusajs/medusa)

  ```
  echo "Install the Medusa CLI"
  yarn global add @medusajs/medusa

  medusa new backend
  # medusa new backend --seed

  cd backend
  # medusa develop
  yarn start

  ```

  * ✅ An [eCommerce Backend Docker](https://github.com/OceanSoftIO/ecommerce/blob/main/docker/) should be running locally on port 9000.

</details>

<details>
<summary>🚦 The Tech Stack is built with:</summary>
  
  - [x] [Next.js](https://nextjs.org/) [Typescript](https://www.typescriptlang.org/): 
  
      `npx create-next-app@latest --typescript storefront`
  
  - [x] [Tailwind CSS](https://tailwindcss.com/)
  
      ```
      yarn add -D tailwindcss postcss autoprefixer
      npx tailwindcss init -p
      ```
  
  - [ ] [Cypress](https://www.cypress.io/)
  - [x] [Medusa](https://medusajs.com/) || [Medusa Next.js Starter](https://github.com/medusajs/nextjs-starter-medusa)
  - [ ] [Search]
  
</details>

# Quickstart

<details>
<summary>🚀 Deploy in 5 minutes ⏱️</summary>

  * [x] [Easily Deploy to Vercel with One Click](https://vercel.com/solutions/nextjs)

  * [ ] [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/OceanSoftIO/Serverless) || [![Netlify Status](https://api.netlify.com/api/v1/badges/1bf35fab-4d78-4932-91f3-8c8c88c81622/deploy-status)](https://app.netlify.com/sites/serverless-ecommerce-storefront/deploys)

  * [ ] [Next.js plugin from Serverless Framework](https://github.com/serverless-nextjs/serverless-next.js)

  🎓 Stick to **Vercel** if you value your time and sanity, and honestly, I would stick to Vercel for as long as I could, because it's not just about how much of a value it is initially, but the fact that their developer experience is second to none and the wide range of frameworks they support makes them my primary destination to deploy all things front-end.
  
</details>


## 1. Development Environment

### Setting up the environment variables

Navigate into your projects directory and get your enviroment variables ready:

```shell
git clone https://github.com/OceanSoftIO/ecommerce

cd ecommerce/storefront
cp .env.template .env.local
```

### Install dependencies

Use Yarn to install all dependencies.

```shell
yarn
```

### Start developing

You are now ready to start up your project.

```shell
yarn dev
```

### Open the code and start customizing

Your site is now running at http://localhost:8000!

Edit `/pages/index.tsx` to see your site update in real-time!

## 2. Payment integrations

By default this starter supports the following payment integrations

- [Stripe](https://stripe.com/)
- [Paypal](https://www.paypal.com/)

To enable the integrations you need to add the following to your `.env.local` file:

```shell
MEDUSA_PAYMENT_STRIPE_PUBLIC_KEY=<your-stripe-public-key>
MEDUSA_PUBLIC_PAYPAL_CLIENT_ID=<your-paypal-client-id>
```

You will also need to setup the integrations in your Medusa server. See the [Medusa documentation](https://docs.medusajs.com) for more information on how to configure [Stripe](https://docs.medusajs.com/add-plugins/stripe) and [PayPal](https://docs.medusajs.com/add-plugins/paypal) in your Medusa project.

## 3. Search integration

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
