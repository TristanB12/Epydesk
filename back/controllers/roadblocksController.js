const utils = require("../utils/utils")
const conf = require('../configuration/roadblocksConf');
const roadblocksConf = require("../configuration/roadblocksConf");

function getModuleCredits(title, moduleInstances) {
    let credits = {
        title: title,
        isSubscribed: moduleInstances.length !== 0,
        validated: 0,
        failed: 0,
        inProgress: 0,
    };

    for (const moduleInstance of moduleInstances) {
        if (moduleInstance.grade === "-") {
            credits.inProgress += moduleInstance.credits;
        } else if (moduleInstance.grade === "Echec") {
            credits.failed += moduleInstance.credits;
        } else {
            credits.validated += moduleInstance.credits;
        }
    }
    return credits;
}

function getRoadblockCredits(modules, roadblock) {
    let roadblockCredits = {
        title: roadblock.title,
        validated: 0,
        failed: 0,
        inProgress: 0,
        needed: roadblock.creditsNeeded,
        modules: []
    }
    let moduleCredits = undefined
    let moduleInstances = undefined

    for (const roadblockModule of roadblock.modules) {
        if (roadblockModule === "G-CUS-00x") {
            moduleInstances = modules.filter(curModule =>
                curModule.codemodule.startsWith("G-CUS"))
        } else {
            moduleInstances = modules.filter(curModule =>
                curModule.codemodule === roadblockModule)
        }
        moduleCredits = getModuleCredits(roadblockModule, moduleInstances)
        roadblockCredits.validated += moduleCredits.validated
        roadblockCredits.failed += moduleCredits.failed
        roadblockCredits.inProgress += moduleCredits.inProgress
        roadblockCredits.modules.push(moduleCredits)
    }
    return roadblockCredits
}

async function getRoadblocksInfos(auth) {
    const profile = await utils.getProfile(auth)
    if (profile === null) {
        return null;
    }
    const modules = profile.modules.filter(curModule => curModule.scolaryear == profile.scolaryear)
    const roadblockConf = conf[`tek${profile.studentyear}`]

    return roadblocks = [
        getRoadblockCredits(modules, roadblockConf.innovation),
        getRoadblockCredits(modules, roadblockConf.softSkills),
        getRoadblockCredits(modules, roadblockConf.technicalFoundation),
        getRoadblockCredits(modules, roadblockConf.technicalSupplement)
    ]
}

module.exports = {
    getRoadblocks(req, res) {
        getRoadblocksInfos(req.query)
            .then(infos => {
                if (infos)
                    res.status(200).json(infos);
                else
                    res.status(500).json({message: "failed to load ressources"})
            })
    }
}