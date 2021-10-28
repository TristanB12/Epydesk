const axios = require('axios')

module.exports = {
    async getProfile(auth) {
        const url = `https://intra.epitech.eu/${auth.autologin}/user/${auth.user_email}/print/?format=json`

        try {
            const res = await axios.get(url);
            if (res.status != 200) {
                console.error(`Invalid getSchoolYear response status = ${res.status}`)
                return null
            }
            return res.data
        } catch (err) {
            console.error(err)
            return null
        }
    },

    async getHubActivities(auth, year, location) {
        const url = `https://intra.epitech.eu/${auth.autologin}/module/${year}`
                + `/B-INN-000/${location}-0-1/`

        try {
            res = await axios.get(url + "?format=json");
            if (res.status != 200) {
                console.error(`res.status = ${res.status}`)
                return null;
            }
            return res.data.activites
        } catch (err) {
            console.error(err);
            return null;
        }
    },

    async getExperience(auth, year, location, codeacti) {
        const url = `https://intra.epitech.eu/${auth.autologin}/module/${year}`
                + `/B-INN-000/${location}-0-1/${codeacti}/project`

        try {
            res = await axios.get(url + "?format=json");
            if (res.status != 200) {
                console.error(`res.status = ${res.status}`)
                return null;
            }
            return res.data
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}