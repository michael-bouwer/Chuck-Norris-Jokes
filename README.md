# Chuck-Norris-Jokes

This solution contains two projects, one for the client and one for the server.

## Server
A GraphQL server that wraps the ChuckNorris.io api (https://api.chucknorris.io/).
Dependancies:
- apollo-server
- apollo-datasource-rest
- graphql

To initialize and start the server:
### `cd server && npm install` 
then 
### `node src/index.js`
The server will run at http://localhost:4000/


## Client
The client project is bootsrapped with Create-React-App.
Dependancies:
- apollo-client
- bootstrap
- react-router-dom
- styled-components
- typescript

in a separate terminal, initialize and run the SPA with:
### `cd client && npm install`
then 
### `npm start`
The client will run at http://localhost:3000/
