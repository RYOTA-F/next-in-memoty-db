// NeDb初期化
const Datastore = require('nedb')
const db = new Datastore({
  filename: 'test.db',
  autoload: true,
})

// マスターデータロード (非同期)
db.loadDatabase()

// テストデータ作成
const testObj = {
  name: 'test',
  age: 20,
}

// テストデータ書き込み
db.insert(testObj)
