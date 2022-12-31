# Dashboard Application

This is a simple dashboard application that uses the MERN stack.
This application is not meant to be used in production, but rather as a learning tool for those who are interested in learning the MERN stack.
The forntend is built using React, Redux, and React-Router.
The backend is built using Node.js, Express, and MongoDB.

## Running example

An deployed version of this application can be found at [https://admin-frontend-pmlf.onrender.com/](https://admin-frontend-pmlf.onrender.com/).
Both frontend and backend are hosted on Render.com. \
The first time you open the application, it may take a few seconds to load as the server is sleeping. \
Refreshing the page will also cause and issue.
This is due to the free tier of Render.com. \
So make sure to always use the URL provided above when refreshing the page.

## Running the application

To run this application, you will need to have Node.js installed on your machine.

### Backend

#### MongoDB

You will have to set up a MongoDB database and create a .env file in the server directory.
The **.env** file should contain the following:

- MONGO_URI - The URI to your MongoDB database.
- PORT - The port that you want the server to run on.

To add sample data to your database, uncomment lines of code in the **index.js** file under the mongoose setup comment.
Make sure to comment out the code once you have added the data.

#### Node.js

Navigate into the server directory and run the following commands:

```bash
npm install
npm run dev
```

### Frontend

Add an **.end.local** file in the client directory.
The **.env.local** file should contain the following:

- REACT_APP_API_URL - The URL to your backend server.

Navigate into the client directory and run the following commands:

```bash
npm install
npm run start
```
