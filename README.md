# My first CRUD using node with Typescript

## Propose:
- API Rest to make donations campaign.

## What it do?
- [x] Enter with Username, email and whatsapp
- [x] create your campaign with Title, Description and Target
- [x] Make a donate for campaign
- [x] List of campaign
- [x] Update your campaign
- [x] Delete your campaign
- [x] List of donate
- [x] List of user

## What it will do?
- [x] for now, thats all folks

## i'll use: 
- [Express](https://expressjs.com/) to create routes

- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) to compile and hotreload

- [TypeORM](https://typeorm.io/#/) to connect with Database, make migrations and entities

# How to use API:
## endpoints:
- /login
    - POST will create a user in database
        - Example of body request
    ``` 
    {
        "username": "Jk Rowling",
        "whatsapp": "123123123123",
        "email": "jk@wizzarduniverse.com"
    }
    ```
    - GET will return list of users
        - Example of response
    ``` 
    {
        "id": 1,
        "username": "Jk Rowling",
        "whatsapp": "123123123123",
        "email": "jk@wizzarduniverse.com"
    }
    ``` 
- /campaign
    - POST will create a campaign in database
        - Example of body request
    ``` 
   {
        "title": "Wizzard ",
        "description": "Help harry potter to cure covid-19",
        "target": 15000.00,
        "user": {		
            "id": 1
        }
    }
    ```
    - UPDATE you'ill need pass id of campaign in de id param
    ```
    {
        "title": "Wizzard Universe",
        "description": "Help harry potter to cure covid-19",
        "target": 1550.00,
        "user": {		
            "id": 1
        }
    }
    ```
    - GET will return list of campaign
        - example of response
    ``` 
    {
        "id": 2,
        "title": "Wizzard Universe",
        "description": "Help harry potter to cure covid-19",
        "target": "15000.00",
        "user": {
            "id": 1,
            "username": "Jk Rowling",
            "whatsapp": "123123123123",
            "email": "jk@wizzarduniverse.com"
        }
    }
    ``` 
    - DELETE need pass the id param and cant have any donates

- /donate
    - POST will create a donate for campaign in database
        - Exemple of body request
    ``` 
    {	
        "campaign": {
            "id": 4
        },
        "user": {		
            "id": 3
        },
        "value": 1000.00
    }
    ```
    - GET will return list of donates filtering by user, campaign or both
        - You'll need pass id of user/campaign by query params
            - Example of response
    ``` 
    {
        "id": 5,
        "value": "1000.00",
        "user": {
            "id": 3,
            "username": "Rowling",
            "whatsapp": "123123123123",
            "email": "jk@wizzarduniverse.com"
        },
        "campaign": {
            "id": 4,
            "title": "Wizzard ",
            "description": "Help harry potter to cure covid-19",
            "target": "15000.00"
        }
    }
    ``` 