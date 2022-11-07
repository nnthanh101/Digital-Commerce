const dotenv = require('dotenv')

let ENV_FILE_NAME = '';
switch (process.env.NODE_ENV) {
	case 'production':
		ENV_FILE_NAME = '.env.production';
		break;
	case 'staging':
		ENV_FILE_NAME = '.env.staging';
		break;
	case 'test':
		ENV_FILE_NAME = '.env.test';
		break;
	case 'development':
	default:
		ENV_FILE_NAME = '.env';
		break;
}

try {
	dotenv.config({ path: process.cwd() + '/' + ENV_FILE_NAME });
} catch (e) {
}

// CORS when consuming eCommerce-Backend from admin
const ADMIN_CORS = process.env.ADMIN_CORS || "http://0.0.0.0:7000,http://localhost:7000,http://localhost:7000";

// CORS to avoid issues when consuming eCommerce-Backend from a client
const STORE_CORS = process.env.STORE_CORS || "http://0.0.0.0:8000,http://localhost:8000,http://localhost:8000";

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL =
  process.env.DATABASE_URL || "postgres://localhost/ecommerce-store";

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  // Uncomment to add Stripe support.
  // You can create a Stripe account via: https://stripe.com
  // {
  //   resolve: `medusa-payment-stripe`,
  //   options: {
  //     api_key: STRIPE_API_KEY,
  //     webhook_secret: STRIPE_WEBHOOK_SECRET,
  //   },
  // },
];

module.exports = {
  projectConfig: {
    
    /** Option1 - SQLite (default): Development-like Environment || https://sqlitebrowser.org */
    database_database: "./ecommerce.sql",
    database_type: "sqlite",

    // /** Option2 - PostgresQL: For more production-like environment */
    // redis_url: REDIS_URL,
    // database_url: DATABASE_URL, //postgres connectionstring
    // database_type: "postgres",

    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
  },
  plugins,
};
