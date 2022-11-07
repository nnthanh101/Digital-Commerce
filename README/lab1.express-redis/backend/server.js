import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { createClient } from 'redis';

// Specify Redis connection parameters.
const client = createClient({
  // host: 'localhost',
  host: 'redis',
  port: '6379'
});

// Redis key name that we will store our counter in.
const COUNTER_KEY_NAME = 'mycounter';

// Initialize Express.
const app = express();
app.set('views', new URL('./views', import.meta.url).pathname);
app.set('view engine', 'ejs');
app.use(express.static('static'));

app.get('/incr', async (req, res) => {
  // Atomically add one to the counter in Redis.
  // If they key doesn't exist, Redis will create it with
  // an initial value of 1.
  const count = await client.incrBy(COUNTER_KEY_NAME, 1);
  return res.json({ count });
});

app.get('/reset', async (req, res) => {
  // Reset by just deleting the key from Redis.
  await client.del(COUNTER_KEY_NAME);
  return res.json({ count: 0 });
});

// Serve the home page, initialize the counter if needed.
app.get('/', async (req, res) => {
  // Get the current counter value.
  let count = await client.get(COUNTER_KEY_NAME);
  if (count === null) {
    count = 0;
  }
  // Render the home page with the current counter value.
  return res.render('homepage', { count });
});

// Connect to Redis.
await client.connect();

// Start the Express server.
app.listen(9999, () => {
  console.log('Server listening on port 9999.');
});
