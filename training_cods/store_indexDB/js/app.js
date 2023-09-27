let db = null
let objectStore = null

window.addEventListener('load', () => {
    let DBOpenReq = indexedDB.open('SabzLearn', 12)

    DBOpenReq.addEventListener('error', (err) => {
        console.warn('Error', err);
    })
    
    DBOpenReq.addEventListener('success', (event) => {
        console.log('Success', event.target.result);
    })

    DBOpenReq.addEventListener('upgradeneeded', (event) => {

        db = event.target.result

        console.log('Old V:', event.oldVersion);
        console.log('New V:', event.newVersion);
        
        if (!db.objectStoreNames.contains('users')) {
            objectStore = db.createObjectStore('users')
        }

        if (db.objectStoreNames.contains('courses')) {
            db.deleteObjectStore('courses')
        }


        console.log('upgrade', db.objectStoreNames);

    })

})