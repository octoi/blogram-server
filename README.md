# BLOGRAM API SERVER π

Rest api for blogram [ or any other apps ] π

This project is made using __Node Js, Mongo Db & Much more__

## SETUP π·ββοΈ

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

## DOCUMENTATION π

### User π€

<b><u>FETCH USERΒ  DATA [ GET ]</u></b>

`/user/:userId`: get user data with ID

> You will get ID of user by login, register or update

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

### Blog π

<b><u>GET ALL BLOGS [ GET ]</u></b>

`/blog`: get all blogs

<b><u>GET SINGLE BLOG [ GET ]</u></b>

`/blog/:blogId`: get blog with ID

<b><u>GET ALL BLOG OF USER [ GET ]</u></b>

`/blog/:userId`: get all blogs of user with USER ID

<b><u>NEW BLOG [ POST ]</u></b>

`/blog/new`: create new blog

> You should include following in request body

```json
{
    "username": "username",
    "password": "userpassword",
    "title": "title of blog",
    "blog": "blog content"
}
```

<b><u>DELETE BLOG [ DELETE ]</u></b>

`/blog/delete/:blogId`: delete blog with id

> You need to have following body in request

```json
{
    "username": "username",
    "password": "user password"
}
```

