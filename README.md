# Budgeting-backend
Backend for Budgtr app. Provides crud operations for transactions.
trello board [here](https://trello.com/b/xn5cTQKj/budgtr-be)
## Getting started
1. clone this repo
2. open is editor of your choice
3. run ```npm i``` in the terminal in the root directory of the repo
4. create a .env file and add ```PORT=8008```
5. you can then start backend by running ```npm start``` in your terminal

### Data structure
when visiting http://localhost:/8008/transactions you should recieve an array of objects like the following -
```
[
   {
        id:'f642debe-b43a-49d1-baf8-7b604f5d4463',
        item_name:'food',
        amount:-200,
        date:'2023-01-24',
        from:'key food',
        category:'grocery',   
    },
    {
        id: "6642debe-b43a-49d1-baf8-7b604f5d4463",
        item_name: "Income",
        amount: 2524.45,
        date: "2023-04-19",
        from: "Direct Deposit",
        category: "deposit"
    },
 ]
      
 ```
