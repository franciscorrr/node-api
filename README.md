# API NODE

API node example for managing products stored in a MongoDB database with static authentication system.

## Prerequisites

- MongoDB
- Node (+10.5)

## Authentication

The authentication method is based on the JWT token that must be send in the header of each request made to the server.

The token is obtained invoking the method `api/user/logIn` with body `{ "userName": "XXXXX", "password": "XXXXX" }`. 
As the login system is mocked, the user and password is always `test`

An example of an answer could be this:

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoidGVzdCJ9LCJpYXQiOjE1NTM3MjE1MzgsImV4cCI6MTU1MzcyNTEzOH0.OvWWOYvLtDMep-JC5FwPCRdD8hl3f8ZL0AWyWKXsTXA"
}
```

With this token we can make calls to other APIs, adding this token to the `Authorization` header. This is an example of invocation of the POST products method.

```
POST /api/products HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJOYW1lIjoidGVzdCJ9LCJpYXQiOjE1NTM3MjE1MzgsImV4cCI6MTU1MzcyNTEzOH0.OvWWOYvLtDMep-JC5FwPCRdD8hl3f8ZL0AWyWKXsTXA
cache-control: no-cache
Postman-Token: a4be03e6-ee85-4ac6-8139-1675a5b25d18
{ "title": "Product 1", "description": "Description 1" }------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

## Methods
- **GET /api/products**: Returns all products in DDBB.
- **POST /api/products**: Save a new product in DDBB and return the same item with the database ID.
- **DELETE /api/products/:productId**: Remove the product in DDBB with the id _productId_.



