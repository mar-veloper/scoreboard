# Among Us Scoreboard

## Why I created this project?

1. **For technical reason**:
I created this project to learn about JAMstack and Serverless.

2. **For client reason**: 
Me and my friends would like to see our live scores on the game we like to play called _Among Us_.

## This project is being built using JAMstack: 
Frontend | Serverless | Database
------------ | ------------- | -------------
[React](https://reactjs.org/) | [Netlify Function](https://www.netlify.com/products/functions/) | [FaunaDB](https://fauna.com/)

### Cloning the project

1. Run this command in your terminal to clone this repository:

```
git clone https://github.com/mar-veloper/scoreboard.git
```

2. Go inside the directory: 

```
cd scoreboard
```

3. In this project directory, you have to install netlify-cli to run netlify function and react at the same time.

Run this to install netlify-cli globally:

```
npm i netlify-cli -g
```

### Starting the project

To start the project run these commmand: 

```
yarn
cd functions
npm i
cd ..
ntl dev
```

Runs the app in the development mode.\
Open [http://localhost:8888](http://localhost:8888) to view it in the browser.

Both backend and frontend will run in this endpoint.
