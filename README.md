# Reveal

## Installation

1. Clone both this repo and its client side counterpart (https://github.com/jacquikeating/reveal).
2. Run `npm i` to install dependencies.
3. Set up a `.env` file. A `.env.sample` file is included for reference.
   `PORT=8080
CROSS_ORIGIN=http://localhost:5173
DB_HOST=localhost
DB_NAME=reveal
DB_USER= (YOUR  DB  USERNAME)
DB_PASSWORD= (YOUR  DB  PASSWORD)`
4. Run `npx knex migrate:latest` and `npx knex seed:run` to seed the database.
5. Run `node --watch index.js` to start the server.
6. Set up front end repo.

## Endpoints

Several endpoints are still in development. Currently functional endpoints include:

- `/users` - GET core data for all users
- `/users/:userID` - GET the full record for a single user
- `/events` - GET core data for all events
- `/events/:eventID` - GET the full record for a single event
- `/cities` - GET core data for all cities
- `/cities/:cityID` - GET the full record for a single city
- `/posts` - GET core data for all posts
- `/posts/:postID` - GET the full record for a single post
- `/posts` - POST a new post
- `/venues` - GET core data for all venues
- `/venues/:venueID` - GET the full record for a single city
