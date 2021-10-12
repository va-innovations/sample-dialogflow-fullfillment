const axios = require('axios');

const getWeeklySchedule = () => {
    return axios("https://run.mocky.io/v3/601ad5f3-cc20-4eca-ba74-63fb2a5c2ad5")
}

module.exports = {getWeeklySchedule};