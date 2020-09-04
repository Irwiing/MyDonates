# My first CRUD using node with Typescript

## Propose:
- API Rest to make donations campaign.

## What it do?
- [x] Enter with Username, email and whatsapp
- [x] create your campaign with Title, Description and Target
- [x] Make a donate for campaign
- [x] List of campaign
- [x] List of donate
- [x] List of user

## What it will do?
- [ ] Update your campaign
- [ ] Delete your campaign

## i'll use: 
- [Express](https://expressjs.com/) to create routes

- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) to compile and hotreload

- [TypeORM](https://typeorm.io/#/) to connect with Database, make migrations and entities

# How to use API:
## endpoints:
- /login
    - POST will create a user in database
        - Exemplo of body request
    ``` 
    {
        "username": "Irwing Testone",
        "whatsapp": "12123412345",
        "email": "irwing@irwing.com"
    }
    ```
    - GET will return list of users
    ``` 
    {
        "id": 1,
        "username": "Irwing Testone",
        "whatsapp": "12123412345",
        "email": "irwing@irwing.com"
    }
    ``` 
- /campaign
    - POST will create a campaign in database
        - Exemplo of body request
    ``` 
   {
        "title": "Corona",
        "description": "Help us to buy masks",
        "target": 300,
        "user": {		
            "id": 1
        }
    }
    ```
    - GET will return list of campaign (need upgrade with inner join)
    ``` 
    {
        "id": 1,
        "title": "Corona",
        "description": "Help us to buy masks",
        "target": "300.00"
    }
    ``` 
- /donate
    - POST will create a donate for campaign in database
        - Exemplo of body request
    ``` 
    {	
        "campaign": {
            "id": 1
        },
        "user": {		
            "id": 1
        },
        "value": 300
    }
    ```
    - GET will return list of donates (need upgrade with inner join)
    ``` 
    {
        "id": 1,
        "value": "300.00"
    }
    ``` 