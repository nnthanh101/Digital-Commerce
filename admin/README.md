<p align="center">
  <a href="https://ecommerce.oceansoft.io">
    <img alt="OceanSoft" src="https://academy.job4u.io/static/b5b477f8d3c818783b0ec3fb68a5e570/e64f1/logo.webp" width="100" />
  </a>
</p>
<h1 align="center">
  [💰 Ecommerce Frontend] ⚡ Gatsby.js Admin 💎
</h1>

<p align="center">
⚡ Gatsby.js Admin 💎 for Medusa Open-Source Headless Commerce engine to create amazing Digital Commerce experiences.
</p>

<p align="center">
  <a href="https://github.com/OceanSoftIO/ecommerce/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue" alt="Released under the MIT license." />
  </a>
  <a href="https://discord.gg/KAS8GBjs">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=OceanSoft101">
    <img src="https://img.shields.io/twitter/follow/OceanSoft101.svg?label=Follow%20@OceanSoft101" alt="Follow @OceanSoft101" />
  </a>
</p>


## 🚀 Quickstart

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://https://github.com/OceanSoftIO/ecommerce)

<details>
<summary>🚦 1. Prerequisites:</summary>
  
  * ✅ [eCommerce Backend](https://github.com/medusajs/medusa)

    ```
    echo "Install the Medusa CLI"
    yarn global add @medusajs/medusa

    medusa new backend
    # medusa new backend --seed

    cd backend
    # medusa develop
    yarn start

    echo "Testing APIs"
    curl localhost:9999/store/products | python -m json.tool

    ```

  * ✅ An [eCommerce Backend Docker](https://github.com/OceanSoftIO/ecommerce/blob/main/docker/) should be running locally on port 9999.

  > After these above steps and only a couple of minutes, you now have a complete commerce engine running locally. You may now explore [the documentation](https://docs.medusa-commerce.com/api) to learn how to interact with the Medusa API. You may also add [plugins](https://github.com/medusajs/medusa/tree/master/packages) to your eCommerce Store by specifying them in your `medusa-config.js` file.

</details>
    

## 🗄 2. Setting up Admin

1. **Clone this repository**
   ```
   git clone https://github.com/OceanSoftIO/ecommerce
   cd ecommerce/admin
   ```
2. **Install dependencies**
   ```
   yarn install
   ```
3. **Start the development server**
   ```
   # yarn start
   yarn dev
   ```
4. **Go to [http://localhost:7777](http://localhost:7777)**

* Back in your Medusa engine installation directory, you can create your own user for the admin by running:

    ```
    medusa user -e admin@oceansoft.io -p some-password
    ```
 
 * Alternatively, if you've seeded your server with our dummy data, you can use the following credentials:
 
    ```
    admin@oceansoft.io // supersecret
    ```

## 🛒 3. Setting up a storefront for your Medusa project

<details>
<summary>💰 Medusa is a headless commerce engine which means that it can be used for any type of digital commerce experience 💎</summary>
  
  * you may use it as the backend for an app, a voice application, social commerce experiences, or a traditional e-commerce website, you may even want to integrate Medusa into your own software to enable commerce functionality. All of these are use cases that Medusa supports - to learn more read the documentation or reach out.

  * To provide a quick way to get you started with a storefront install one of our traditional e-commerce starters:

    - [ ] [Gatsby Starter](https://github.com/medusajs/gatsby-starter-medusa)
      ```
      npm install -g gatsby-cli
      gatsby new my-medusa-storefront https://github.com/medusajs/gatsby-starter-medusa
      ```
    - [x] [Nextjs Starter](https://github.com/medusajs/nextjs-starter-medusa)
      ```
      npx create-next-app -e https://github.com/medusajs/nextjs-starter-medusa my-medusa-storefront
      ```
  
  * With your starter and your eCommerce Store running, you can open http://localhost:8888 in your browser and view the products in your store, build a cart, add shipping details and pay and complete an order.
  
</details>
  
<details>
<summary>💰 Deploy to Medusa Cloud 💎</summary>
  
  * With your project in local development, you can link your Medusa instance to Medusa Cloud - this will allow you to manage your store, view orders, and test out the amazing functionalities that you are building. Linking your project to Medusa Cloud requires that you have a Medusa Cloud account.

    1. **Authenticate your CLI with Medusa Cloud:**
       ```
       medusa login
       ```

    2. **Link project**
       ```
       medusa link --develop
       ```

  * You can now navigate to Orders in Medusa Cloud to view the orders in your local Medusa project, just like you would if your store was running in production.

</details>


## ⭐️ Features

> Medusa comes with a set of building blocks that allow you to create amazing digital commerce experiences, below is a list of some of the features that Medusa come with out of the box:

- **Headless**: Medusa is a highly customizable commerce API which means that you may use any presentation layer such as a website, app, chatbots, etc.
- **Regions** allow you to specify currencies, payment providers, shipping providers, tax rates, and more for one or more countries for truly international sales.
- **Orders** come with all the functionality necessary to perform powerful customer service operations with ease.
- **Carts** allow customers to collect products for purchase, add shipping details, and complete payments.
- **Products** come with relevant fields for customs, stock keeping, and sales. Medusa supports multiple options and unlimited variants.
- **Swaps** allow customers to exchange products after purchase (e.g. for incorrect sizes). Accounting, payment, and fulfillment plugins handle all the tedious work for you for automated customer service.
- **Claims** can be created if customers experience problems with one of their products. Plugins make sure to automate sending out replacements, handling refunds, and collecting valuable data for analysis.
- **Returns** allow customers to send back products and can be configured to function in 100% automated flow-through accounting and payment plugins.
- **Fulfillment API** makes it easy to integrate with any fulfillment provider by creating fulfillment plugins, check the `/packages` directory for a full list of plugins.
- **Payments API** makes it easy to integrate with any payment provider by creating payment plugins, we already support Stripe, Paypal, and Klarna.
- **Notification API** allow integrations with email providers, chatbots, Slack channels, etc. 
- **Customer Login** to give customers a way of managing their data, viewing their orders, and saving payment details. 
- **Shipping Options & Profiles** enable powerful rules for free shipping limits, multiple fulfillment methods, and more.
- **Medusa's Plugin Architecture** makes it intuitive and easy to manage your integrations, switch providers, and grow with ease.
- **Customization** is supported for those special use cases that all the other e-commerce platforms can't accommodate.

## Database support

In production, Medusa requires Postgres and Redis, but SQLite is supported for development and testing purposes. It is recommended that you install Redis and Postgres on your development machine if you plan to use Medusa for a project.

- [Install PostgreSQL](https://www.postgresql.org/download/)
- [Install Redis](https://redis.io/download)

To use Postgres and Redis you should provide a `database_url` and `redis_url` in your `medusa-config.js`.
