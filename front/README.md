<h1 align="center">
  Fullstack internship technical test
</h1>

<h4 align="center">
  Technical test to evaluate the candidate's knowledge.
</h4>

<p align="center">
  <img src="../fullstack-internship-screenshot.png" width="650">
</p>

# Objectives

- Retrieve the list of users with a call to the API
- Display the list of families in the table
- In a column display the first and last name of favoriteChild of each family
- Sort the list by the number of people in each family in descending order
- Find and display the bestChild

### **Bonus :**
- User search by first and last name
- Adds style and effect to the design

<br/><br/>

# Requirements
Before you start, make sure you have this environment

Name | Version
------------ | -------------
<a href="https://nodejs.org/" target="_blank">NodeJS</a> | 14^
<a href="https://www.npmjs.com/get-npm" target="_blank">NPM</a>  | 6^

<br/><br/>

# Getting started

Execute the command `npm install` at the root of the repo `neocity-test` **AND** in the folder `fullstack_internship_test`
```console
~/neocity-test $ npm install
~/neocity-test/fullstack_internship_test $ npm install
```

Start the server using the command at the root of the repo
```console
~/neocity-test $ npm start
```

Start the application using the command in the folder fullstack
```console
~/neocity-test/fullstack_internship_test $ npm start
```

**You don't need to touch the server. Once it is launched the rest of the exercise takes place in the folder fullstack_internship_test**
<br/><br/>
In the folder `src/app` you will find the `angular` application. \
In the folder `src/app/providers` you will find `users.service.ts` where you have to create a method to query the server on this endpoint `http://localhost:1337/users` and retrieve users and then process them with the files `src/app/app.component.[html/css/ts]`

At the end of your test, you must create a branch with your first name, last name and the name of the test.
Example: `clement_saulnier-fullstack_test`

<br/><br/>

# Ressources

### **users**
`GET http://localhost:1337/users` \
**Response**:
```json
[
    {
        "id": 1,
        "family_name": "Marot",
        "email": "jmorot0@ed.gov",
        "picture": "https://picsum.photos/id/454/24/24",
        "favoriteChild": 51,
        "children": [
            {
                "id": 51,
                "first_name": "Helene",
                "last_name": "Marot",
                "email": "hkearf@gizmodo.com",
                "picture": "https://picsum.photos/id/455/24/24",
                "children": [ ... ]
            }
        ]
    },
    ...
]
```
