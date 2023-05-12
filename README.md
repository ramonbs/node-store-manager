# Node Store Manager - Backend Application

Node Store Manager is a backend application created using Node.js, Express, Sinon, Mocha, and MySQL as the database. It is a simple application that allows managing products, categories, and orders for an online store.

## Installation

To install Node Store Manager, you need to have Node.js and MySQL installed on your computer. Follow the steps below to install Node Store Manager:

1.  Clone the repository from GitHub:   

    `git clone https://github.com/<your-username>/node-store-manager.git` 
    
2.  Install the required dependencies using npm:

    `npm install` 
    
3.  Create a MySQL and Seed database for the application:

    `npm run migration && npm run seed`
 
4.  Create a `.env` file in the root directory of the application with the following variables:

    `DB_HOST=localhost
    DB_USER=root
    DB_PASS=yourpassword
    DB_NAME=node_store_manager` 
    
    Replace `yourpassword` with the actual password for your MySQL root user.
    

## Usage

To start the Node Store Manager application, run the following command:

`npm run dev` 

This will start the server at `http://localhost:3001`.

## Testing

To run the tests for Node Store Manager, run the following command:

`npm test` 

This will run the tests using Mocha and Sinon.
