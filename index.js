const express = require('express');
const cors = require('cors');
const {WebhookClient} = require('dialogflow-fulfillment');
const {getWeeklySchedule} = require('./comms.js');

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());


const dialogflowFulfillment = (req,res) => {
    const agent = new WebhookClient({request:req, response:res});

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

    let intentMap = new Map();
    intentMap.set('DayClassSchedule',getDayScheduleHandler);
    agent.handleRequest(intentMap);
}

app.post('/api', (req,res) => {
    dialogflowFulfillment(req,res);
})

app.listen(PORT, () => {
    console.log(`The UniBot API is listening on port: ${PORT}`)
})