# A Node.js Express / Redis Stack on Gitpod

This is a [Node.js](https://nodejs.org/) [Express](http://expressjs.com/) template configured for ephemeral development environments on [Gitpod](https://www.gitpod.io/).

The application is a basic counter that stores a value in Redis in the `mycounter` key.  It's intended as a start point for building your own Express applications that use Redis.


## Quick Start

There are two ways of running this application - entirely in the cloud with Gitpod, or locally on your own machine either with your own install of Redis Stack or using Docker.

### Using Gitpod

When using Gitpod, the only things you need are:

* A modern browser (we have tested with [Google Chrome](https://www.google.com/chrome/)).
* A [GitHub](https://github.com) account.

Click the button below to start a new cloud development environment using Gitpod:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/OceanSoftIO/Digital-Commerce/tree/release/1.0.1/README/lab1.express-redis)

* You will need to authorize your GitHub account before you can use Gitpod.

* Upon clicking on Gitpod, a workspace will be opened in the browser that contains:

  * VS Code for editing code.
  * An embedded browser window in which the application is running.
  * Two terminal sessions: the left terminal can be used for entering commands, and the right terminal runs the application using nodemon. Nodemon restarts the application when you save code changes.

* Take a note of your workspace URL which looks something like this:

```
https://yourgithubusername-gitpodexpr-eamwc2bab7h.ws-eu38.gitpod.io/
```

If you want to open the application in a separate browser tab outside of the Gitpod workspace tab, append `9999-` to the workspace URL, for example:

```
https://9999-yourgithubusername-gitpodexpr-eamwc2bab7h.ws-eu38.gitpod.io/
```

The application should show that the current value of the counter is 0.

### Running Locally

To run the application locally you'll need to install the following:

* The [git command line tools](https://git-scm.com/downloads).
* A recent version of [Node.js](https://nodejs.org/) (use the current LTS / Long Term Stable version where possible).  The application has been tested on Node v16.18.0.
* Your favorite IDE if you want to edit / read the code (we like [VS Code](https://code.visualstudio.com/)).

First, clone the repo and install dependencies:

```bash
$ git clone https://github.com/OceanSoftIO/Digital-Commerce
$ cd README/lab1.express-redis
$ npm install
```

If you're using Docker to run Redis Stack, start the container:

```bash
docker compose up -d
```

This starts a container with Redis listening on port 6379.

Once Redis Stack is up and running, you can go ahead and start the application like this:

```bash
$ npm run dev
```

This starts the application using nodemon.  nodemon restarts the application for you whenever you save code changes from your IDE.

Now, open tabs in your browser for each of the following URLs:

* Application: `http://127.0.0.1:9999`

The application should show that the current value of the counter is 0, and RedisInsight should show you an empty database with no keys yet.

Don't stop the application now, but when you're ready to, press Ctrl-C in the terminal window that npm is running in.

If you're using Docker, you can stop the Redis Stack container like this when you're finished with it:

```bash
$ cd README/lab1.express-redis
$ docker-compose down
```

## How the Application Works

Before diving into code, let's first try out the application and see what data is stored in Redis.

* Initially, there's nothing in Redis and the application shows the counter's value to be 0.
* Pressing the "Increment" button adds one to the counter's current value, which is stored in a key named "mycounter" in Redis.
* Press "Increment" a few times, then refresh your RedisInsight tab's view of the database to see that a key named "mycounter" has been added, and that it's value matches that shown in the application front end.
* Press the "Reset" button, then refresh your RedisInsight tab's view of the database.  Note that the "mycounter" key has now been deleted.

### Front-End

The application's front end isn't our focus here.  It's a simple web application built with Bulma and vanilla JavaScript.  The JavaScript that handles button presses is contained in `static/app.js` and the HTML can be found in `views/homepage.ejs` - it's a simple [EJS template](https://ejs.co/).  There are no CSS files in this repo, the CSS and Font Awesome JS files that Bulma uses are served from a CDN.

### Back-End

Now let's look at the code in `app.js` to see how to use Node Redis to connect to Redis Stack.

#### Initializing Express and Redis 

This is a regular Express application - so we initialize Express and tell it to use EJS as the template engine and the `views` folder as the location to get templates from.  Additionally we'll tell Express to serve static files for this application the only static file is the front end's JavaScript `/static/app.js`) from the `static` folder.  Finally, we'll start the Express server on port 9999:

```javascript
const app = express();
app.set('views', new URL('./views', import.meta.url).pathname);
app.set('view engine', 'ejs');
app.use(express.static('static'));
...
app.listen(9999, () => {
  console.log('Server listening on port 9999.');
});
```

In order to use Redis in our application, we need to create a client and wait for it to connect to the Redis server:

```javascript
import { createClient } from 'redis';
...
const client = createClient({
  host: 'localhost',
  port: '6379'
});
...
await client.connect();
```

#### Home Page

The home page is also the application's only page, and it's rendered like this:

```javascript
app.get('/', async (req, res) => {
  // Get the current counter value.
  let count = await client.get(COUNTER_KEY_NAME);
  if (count === null) {
    count = 0;
  }
  // Render the home page with the current counter value.
  return res.render('homepage', { count });
});
```

Here, we use the Redis `GET` command to get the value stored at our counter's key, if any.  If the key doesn't exist yet (Redis returns `null`), we set `count `to an initial value of `0`.  Note that we don't write this to Redis as there's no need (our increment button code will deal with that).

Finally, we render out the `homepage` EJS template (in `views/homepage.ejs`), passing it the value of `count` - this makes sure that when the homepage is rendered, the current value of the counter is there.

#### Pressing the Increment Button

When the Increment button is pressed in the front end, a request is sent to `/incr`, which is handled by the following code:

```javascript
app.get('/incr', async (req, res) => {
  // Atomically add one to the counter in Redis.
  // If they key doesn't exist, Redis will create it with
  // an initial value of 1.
  const count = await client.incrBy(COUNTER_KEY_NAME, 1);
  return res.json({ count });
});
```

The [Redis `INCRBY`](https://redis.io/commands/incrby/) command atomically increments the numeric value stored at a given key by a specified amount.  If the key doesn't exist, Redis creates it for us (this is why we don't need to store an initial value of 0 in Redis in the home page route).  `INCRBY` returns the new value stored at the key, and that's what we send back to the front end.

#### Pressing the Reset Button

When the Reset button is pressed in the front end, a request is sent to `/reset`, which is handled by the following code:

```javascript
app.get('/reset', async (req, res) => {
  // Reset by just deleting the key from Redis.
  await client.del(COUNTER_KEY_NAME);
  return res.json({ count: 0 });
});
```

To reset the counter, we delete its key from Redis, then return 0 to the front end.  The front end JavaScript then updates the displayed value for the counter.

## Making Changes to the Application

If you change the application code, nodemon will restart the server and pick up your changes immediately.  For example, let's make the Increment button add 10 to the value of the counter rather than 1...

The node-redis `incrBy` function takes two parameters:

* The key name holding the value to increment.
* A number to increment the current value by.

In `server.js`, find the line:

```javascript
const count = await client.incrBy(COUNTER_KEY_NAME, 1);
```

and change it to read:

```javascript
const count = await client.incrBy(COUNTER_KEY_NAME, 10);
```

Save your changes and try hitting the Increment button again... what happens to the value of the counter now?
