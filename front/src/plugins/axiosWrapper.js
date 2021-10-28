const axios = require('axios');
const baseUrl = "";

module.exports = {
    async axiosGet(endpoint, options) {
        try {
            const url = baseUrl + endpoint;
            console.log("request: " + url + "   " + options);
            const res = await axios.get(url, options);

            return [res, null];
        } catch (err) {
            return [null, err];
        }
    }
}