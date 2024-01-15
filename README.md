# Summary 
    TO DO

# Setup

1. Clone this repo
2. ``` npm i ``` in the project root
3. Create a ```.env``` file. It should contain a field called ```DB_LINK``` with the connection link to your database.
4. Run ```npm start```

# Migrations
1. Make sure the project setup is finished
2. To create a model run ```npx sequelize-cli model:generate --name <model name> --attributes <list of attributes and type>```, for instance ```npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,userName:string```
3. Execute ```npx sequelize-cli db:migrate```, which effectively does the migration.

# DB description
    TO DO

# How to use jwt login with altair

0. Make sure u have ```JWT_SECRET = "<anything you want>"``` in the ```.env``` file 
1. Perform a correct ```login``` and get the jwt token
2. From the upper left headers (sun like symbol) create the header with ```Authorization```  ```Bearer <your_jwt_token>```