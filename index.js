// Import dependencies
const express = require('express');
const cors = require('cors');
const {WebhookClient} = require('dialogflow-fulfillment');
const {getWeeklySchedule} = require('./comms.js');
// Set up Express app
const app = express();
//Apply middleware
require("dotenv").config();
app.use(cors());
app.use(express.json());
//Define port number
const PORT = process.env.PORT;



//Define Dialogflow fulfillment function
const dialogflowFulfillment = (req,res) => {
    
    // Create an agent which will process requests and responses 
    const agent = new WebhookClient({request:req, response:res});
    
    //Handler function for getDaySchedule intent
    const getDayScheduleHandler = async (agent) => {
        const dayOfWeek = req.body.queryResult.parameters.dayOfWeek;
        console.log(`Day of week: ${dayOfWeek}`)
        const response = await getWeeklySchedule();
        if(dayOfWeek in response.data){
            return agent.add(response.data[dayOfWeek])
        }
        else{
            return agent.add(`No classes on ${dayOfWeek}`)
        }
        
    }
    //Create a new intent map to map the inents with their handler functions
    let intentMap = new Map();
    intentMap.set('DayClassSchedule',getDayScheduleHandler);
    agent.handleRequest(intentMap);
}
//Define a route for Dialogflow to perform requests to
app.post('/api', (req,res) => {
    dialogflowFulfillment(req,res);
})
//Launch application
app.listen(PORT, () => {
    console.log(`The UniBot API is listening on port: ${PORT}`)
})
