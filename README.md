# Sample Dialogflow fulfillment API
### Description
This is a simple Dialogflow fulfillment API to handle webhook requests made form Dialogflow.
It does not include authentication, database layer or any other features beyond simply handling the requests made from Dialogflow, making a request to Mocky to receive a JSON response, performing simple logic to extract necessary data from the response and returning it back to Dialogflow.

### Dependencies
This API uses the following dependencies:
- **dialogflow-fulfillment** for simpler way of receiving and returning requests to Dialogflow
- **express** for web application functionality
- **axios** for performing requests outside the API
- **cors** for enabling cross origin resource sharing

### Usage
To run this application you will need node.js installed on your machine.

1. Clone this repository in the desired directory. 
2. Run `npm install` or `npm i` to install the dependencies
3. Set the port number as environment variable either by creating a .env file or when launching the app `PORT=3000 node index.js`

### Deployment on Heroku
To deploy this application on Heroku you will need to create an account on heroku.com and have git installed on your machine.
The deployment steps are as follows:
1. Download and install Heroku CLI https://devcenter.heroku.com/articles/heroku-command-line
2. Initialize an empty git project `git init`
3. Log into Heroku from command line `heroku login`
4. Set up Heroku as the remote repository for your project `heroku git:remote -a <your project name here>`
5. Add, commit and push to Heroku
    ```
    git add .
    git commit -am "make it better"
    git push heroku master

Your application should be deployed now.
