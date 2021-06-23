# BLOGRAM API SERVER 😎

Rest api for blogram [ or any other apps ] 😉

## SETUP 👷‍♂️

> You need __MONGO DB, NODE JS & NPM__ to run this project 

<b><u>INSTALL DEPENDENCIES</u></b>

```bash
$ npm install
# Or yarn
$ yarn install
```

<b><u>START SERVER</u></b>

```BASH
$ npm start
# or yarn
$ yarn start
```

## DOCUMENTATION 📚

### User 👤

<b><u>REGISTER [ POST ]</u></b>

`/user/register` : Register user

> This should be a __POST__ request, and include following data on request body .

```json
{
    "username": "username",
    "name": "name",
    "password": "password"
}
```

<b><u>LOGIN [ POST ]</u></b>

`/user/login` : Login user

> This should be a __POST__ request, and include following data on request body .

```json
{
    "username": "username",
    "password": "password"
}
```

<b><u>UPDATE [ POST ]</u></b>

`/user/update` : Update user

> This should be a __POST__ request, and include old user data & new user data on request body .
>
> If you are updating one entity fille others with old data

```json
{
    // old user data
    "username": "username",
    "name": "name",
    "password": "password",
    // new user data
    "newUsername": "new username",
    "newName": "new name",
    "newPassword": "new password",
}
```

