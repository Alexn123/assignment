# Inbank assignment

assignment was to create a decision engine and provide working code with a single api endpoint and front-end application which uses the functionality. The engine takes in personal code, loan amount, loan period in
months and returns a decision (negative or positive) and the amount.

The engine uses a simple scoring algorithm of credit score = (credit modifier / loan amount) \* loan period  
The engine returns the maximum amount (<= 10000) which a client could get in the months the client chose(engine does not change months if the scoring algorithm is >=1, only the loan amount increases).  
If the client's scoring algorithm is lower than 1, the engine decreases the loan amount by -100 until equal to 2000 or until the client's scoring algorithm is equal to 1. If the scoring algorithm is still less than 1, the engine increases the months by 1 until the client's scoring algorithm is finally equal to 1.

# File descriptions

server.js - start server on port 3000 and includes all routes and all api calls  
api.js - used to make all loan calculations for the server.js file  
decisionEngine.html - html file with the form and POST call script  
decisionEngine.css - all styling

# Used technologies

Javascript  
Node.js  
Express.js

## Installation

clone repository

```bash
$ git clone https://github.com/Alexn123/assignment.git
```

in assignment folder install npm

```bash
$ npm i
```

start server on localhost:3000

```bash
$ node server.js
```

Now open localhost:3000.  
All calculations are done in console not on browser. Open up the console on your browser or in terminal to see loan results.  
There is also a localhost:3000/calculate-loan endpoint for a separate JSON api only file, just in case
