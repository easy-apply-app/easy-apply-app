import React from "react"

const SYNC_INTERVAL_MS = 30*60*1000;

const checkIfCan = () => {
    const appString = window.localStorage.getItem('app')
    const currentTimeStamp = new Date().getTime();

    if(!appString) {
        window.loacalStorage.setItem(
            'app', JSON.stringify({lastSync: currentTimeStamp})
        )
        return true
    }
    const appData = JSON.parse(appString)

    if(appData.lastSync + SYNC_INTERVAL_MS >= currentTimeStamp) return;
    //update the current last sync
    window.loacalStorage.setItem(
        'app', JSON.stringify({lastSync: currentTimeStamp})
    )
    return true

}
export default {checkIfCan}