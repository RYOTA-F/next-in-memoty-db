// import { createRxDatabase } from 'rxdb/plugins/core'

// /**
//  * For browsers, we use the dexie.js based storage
//  * which stores data in IndexedDB in the browser.
//  * In other JavaScript runtimes, we can use different storages:
//  * @link https://rxdb.info/rx-storage.html
//  */
// import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
// 6259
// // create a database
// const db = await createRxDatabase({
//   name: 'heroesdb', // the name of the database
//   storage: getRxStorageDexie(),
// })

// // add collections
// await db.addCollections({
//   heroes: {
//     schema: mySchema,
//   },
// })

// // insert a document
// await db.heroes.insert({
//   name: 'Bob',
//   healthpoints: 100,
// })
