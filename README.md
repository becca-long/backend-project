# backend-project

The backend-project has been assigned as the second group project for the DigitalCrafts 2018 Flex Cohort.
In this Repository we have emulated the music application Spotify by allowing users to create an account where they can search a music database by artist, genre, album, and year. The songs that are found can be saved to a database and viewed onscreen in a user dashboard. 

## Installation

'''bash
npm install
'''

## Dependencies

```json
"dependencies": {
    "ajax": "0.0.4",
    "bcrypt": "^3.0.3",
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "1.18.3",
    "cookie-parser": "1.4.3",
    "ejs": "^2.6.1",
    "email-validator": "^2.0.4",
    "express": "^4.16.4",
    "express-session": "^1.15.6",
    "mysql2": "^1.6.4",
    "nodemon": "1.18.9",
    "passport": "0.4.0",
    "passport-facebook": "2.1.1",
    "passport-github": "1.1.0",
    "passport-google-oauth20": "^1.0.0",
    "passport-local": "1.0.0",
    "pg": "^7.7.1",
    "pg-hstore": "^2.3.2",
    "sequelize": "4.42.0",
    "sequelize-views-support": "^1.2.2"
  },
  "devDependencies": {
    "sequelize-cli": "5.4.0"
  },
```
## Technologies
 There were specfic requirements that were fulfilled by the following technologies. Each requirement is listed below with the technology used to meet that requirement. 

  1. The project must use some form of HTML templating
    We decide to use EJS. EJS is a simple templating language that lets you generate HTML markup with plain JavaScript
  
  2. The project must be able to swap between database types by using a config file


  3. The project must suppport databasse schemea migrations
    We used sequlize and create models and seeds to generate tables for our database and populate our database

  4. User actions should trigger CRUD operations against the database
    - there must be at least two ```<form>``` submissions that insert or edit data in a database
    - the forms should handle input validation and show errors in the UI (if necessary)
    - AJAX cannot be used for form submission
  
  5. The project must have one AJAX-based GET endpoint that powers a dynamic dropdown or type-ahead component

  6. The project must have user authentication using passport.js
    We used the local strategy, facebook strategy, and github strategy

  7. The project must be publically hosted via https
    TODO: Hose our webiste

  8. Use of client-side JavaScript is limited to 200 lines of code


  9. The repo for the project must be connected to Travis CI
    - there must be at least one test of an API endpoint that touches the database

  10. There must be some form of organization scheme
    All routes besides the passport routes are in the routes folder
    All files calling to the database are in the sequelize folder

## Key Pain Points





## Contributing

[Becca M Randall](https://github.com/becca-long)
[Kim Jasper Manansala](https://github.com/KimjManansala)
[Lee Arnold III](https://github.com/lee-arnoldiii)
[Elizabeth Creech](https://github.com/elizcreech)




## License
N/A
