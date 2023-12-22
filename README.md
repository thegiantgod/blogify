# blogify
Serverless AWS API to manage blogs


### How to deploy the project
First, install aws cli on your computer and connect to your aws account with the command ``

Then, go into the content-api directory to run this command `npm install` to get all dependencies

Then, go into the content-api directory to run this command `serverless deploy` to deploy the app, AWS will give you an url to access and use the API.

A current version runs on this url : https://npwpt82302.execute-api.us-east-1.amazonaws.com/dev , you can access the different endpoints from this app (add "/users/" to get all users for instance or "/users/login" to login with a POST request).

Therer is a swagger documentation at the /api-docs endpoint to test the app