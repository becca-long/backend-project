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
    "body-parser": "1.18.3",
    "cookie-parser": "1.4.3",
    "express": "4.16.4",
    "express-session": "1.15.6",
    "nodemon": "1.18.9",
    "passport": "0.4.0",
    "passport-facebook": "2.1.1",
    "passport-github": "1.1.0",
    "passport-google-oauth20": "^1.0.0",
    "passport-local": "1.0.0",
    "sequelize": "4.42.0"
  }
```
## Technologies
 There were specfic requirements that were fulfilled by the following technologies. Each requirement is listed below with the technology used to meet that requirement. 

  1. The project must use some form of HTML templating
  
  2. The project must be able to swap between database types by using a config file

  3. The project must suppport databasse schemea migrations

  4. User actions should trigger CRUD operations against the database
    - there must be at least two ```<form>``` submissions that insert or edit data in a database
    - the forms should handle input validation and show errors in the UI (if necessary)
    - AJAX cannot be used for form submission
  
  5. The project must have one AJAX-based GET endpoint that powers a dynamic dropdown or type-ahead component

  6. The project must have user authentication using passport.js

  7. The project must be publically hosted via https

  8. Use of client-side JavaScript is limited to 200 lines of code

  9. The repo for the project must be connected to Travis CI
    - there must be at least one test of an API endpoint that touches the database

  10. There must be some form of organization scheme

## Key Pain Points


## Contributing

[Becca M Randall](https://github.com/becca-long)
[Kim Jasper Manansala](https://github.com/KimjManansala)
[Lee Arnold III](https://github.com/lee-arnoldiii)
[Elizabeth Creech](https://github.com/elizcreech)




## License
N/A
