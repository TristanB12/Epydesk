const utils = require("../utils/utils")
const axios = require('axios')
const conf = require('../configuration/hubConf')

function getTalkOrWorkshopXP(activity, user_email, conf)
{
    let xps = {
        validated: 0,
        inProgress: 0,
        title: "",
        isOrganiser: false
    }

    for (const event of activity.events) {
        if (event.user_status === "present") {
            xps.validated += conf.participationInc
            xps.title = activity.title
        } else if (event.user_status === "absent") {
            xps.validated += conf.participationDec
            xps.title = activity.title
        }
        for (const assistant of event.assistants) {
            if (assistant.login !== user_email) {
                continue
            }
            xps.isOrganiser = true
            xps.title = activity.title
            if (assistant.manager_status === "present") {
                xps.validated += conf.organizationInc
            } else if (assistant.manager_status === "absent") {
                xps.validated += conf.organizationDec
            } else if (assistant.manager_status === "accept") {
                xps.inProgress += conf.organizationInc
            }
        }
    }
    return xps
}

async function getExperienceXP(codeacti, body, year, location)
{
    let xps = {
        validated: 0,
        inProgress: 0,
        title: ""
    }
    const experience = await utils.getExperience(body, year, location, codeacti)

    for (const student of experience.registered) {
        if (student.master.login !== body.user_email) {
            continue
        }
        if (experience.closed === true) {
            xps.validated += conf.experience.participationInc
        } else {
            xps.inProgress += conf.experience.participationInc
        }
    }

    return xps
}

async function getActivitiesXPs(body, year, location) {
    const activities = await utils.getHubActivities(body, year, location)
    if (activities === null) {
        return null
    }
    const getActivitiesOf = (activities, type) => {
        return activities.filter(activity => activity.type_title === type)
    }
    const talks = getActivitiesOf(activities, "Talk")
    const workshops = getActivitiesOf(activities, "Workshop")
    const experiences = getActivitiesOf(activities, "Experience")

    let xps = {
        validated: 0,
        inProgress: 0,
        activities: []
    }

    const addActivityXP = (activityXP) => {
        if (activityXP.validated !== 0 || activityXP.inProgress !== 0) {
            xps.validated += activityXP.validated
            xps.inProgress += activityXP.inProgress
            xps.activities.push(activityXP)
        }
    }
    for (const talk of talks) {
        addActivityXP(getTalkOrWorkshopXP(talk, body.user_email, conf.talk))
    }
    for (const workshop of workshops) {
        addActivityXP(getTalkOrWorkshopXP(workshop, body.user_email, conf.workshop))
    }
    if (body.getExperiences) {
        for (const experience of experiences) {
            addActivityXP(await getExperienceXP(experience.codeacti, body, year, location))
        }
    }
    return xps
}

function getXpGoal(modules, scolaryear) {
    return modules.find(item =>
        item.codemodule.startsWith("B-INN")
        && item.codemodule !== "B-INN-000"
        && item.scolaryear == scolaryear
    ).credits * 10
}

async function getHubInfos(body) {
    const profile = await utils.getProfile(body)
    if (profile === null) {
        return null
    }
    const location = profile.location.substring(profile.location.indexOf('/') + 1)
    const localXPs = await getActivitiesXPs(body, profile.scolaryear, location)
    const nationalXPs = await getActivitiesXPs(body, profile.scolaryear, "FR")
    return {
        validated: localXPs.validated + nationalXPs.validated,
        inProgress: localXPs.inProgress + nationalXPs.inProgress,
        needed: getXpGoal(profile.modules, profile.scolaryear),
        activities: localXPs.activities.concat(nationalXPs.activities)
    }
}

module.exports = {
    getXP(req, res) {
        getHubInfos(req.query)
            .then(infos => {
                if (infos)
                    res.status(200).json(infos);
                else
                    res.status(500).json({message: "failed to load ressources"})
            })
    }
}