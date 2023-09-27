window.addEventListener('load', () => {
    let DBOpenReq = indexedDB.open('SabzLearn', 3)

    DBOpenReq.addEventListener('error', (err) => {
        console.warn('Error', err);
    })
    
    DBOpenReq.addEventListener('success', (event) => {
        console.log('Success', event.target.result);
    })

    DBOpenReq.addEventListener('upgradeneeded', (event) => {

        console.log('Old V:', event.oldVersion);
        console.log('upgrade', event);
        console.log('New V:', event.newVersion);
    })

})