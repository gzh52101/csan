const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const bs = require('../js/miwei.js');

let url = "mongodb://112.74.35.224:27017";


async function connect(e) {
    const cliend = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = cliend.db(e.dbName ? e.dbName : 'forum')
    return { cliend, db }

    // MongoClient.connect(url, async (err, clend)=>{
    //     if (err) throw err;
    //     // 链接数据库  
    //     let db =  clend.db('forum');
    //     //获取集合 表 user
    //     let user = db.collection('user');
    //     // 操作 mong

    //     // 查询数据库
    //     let data= await user.find().toArray()
    //     console.log(data)
    //     //关闭链接
    //     clend.close();
    // })
}
//查询 --单 或 多条
async function filt(e, p) {

    let { cliend, db } = await connect(e)

    if (Object.keys(p).length > 0) {

        if (p.id) {
            
            return db.collection(e.dbteb).find({
                _id: ObjectId(p.id)
            }).toArray();

        }else{
            return db.collection(e.dbteb).find(p).toArray();
        }
        
    } else {
        data = db.collection(e.dbteb).find().toArray();
        return data
    }
}


//增加
 async function inse(e,p) {
    let { cliend, db } = await connect(e)
    let data = db.collection(e.dbteb).insertOne(p)
}
module.exports={
    filt,inse
}