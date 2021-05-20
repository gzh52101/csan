const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const bs = require('../js/miwei.js');

let url = "mongodb://112.74.35.224:12138";
function froda(e) {
    let d = Object.keys(e);
    d = JSON.parse(d[0]);
    return d
}

async function connect(e) {
    const cliend = await MongoClient.connect(url, { useUnifiedTopology: true });
    const db = cliend.db(e.dbName ? e.dbName : 'db2101')
    return { cliend, db }
}
//查询 --单 或 多条
async function filt(e, p) {

    let { cliend, db } = await connect(e)

    if (Object.keys(p).length > 0) {

        if (p.id) {

            return db.collection(e.dbteb).find({
                _id: ObjectId(p.id)
            }).toArray();

        } else {
            return db.collection(e.dbteb).find(p).toArray();
        }

    } else {
        data = db.collection(e.dbteb).find().toArray();
        return data
    }
}


//增加
async function inse(e, p) {
    let { cliend, db } = await connect(e)
    // console.log(e,p)
    let data = db.collection(e.dbteb).insertOne(p)

    return data
}

// 修改

async function update(e, p) {
    let { cliend, db } = await connect(e)
    let data
    if (p.id) {

        data = db.collection(e.dbteb).updateOne({
             _id: ObjectId(p.id) 
            }, 
            {
                 $set: p.set 
            })
    }else{
        ///待定功能
        let key1= Object.keys(p)[0]
            key1=p[key1]
        data = db.collection(e.dbteb).updateOne({
            key1,$set:p.set
        })
    }

    return data
}

//删除
async function remove(e,p){
    let { cliend, db } = await connect(e)
    let data
    if(p.id){
        data= db.collection(e.dbteb).deleteOne({
            _id:ObjectId(p.id)
        })
    }else if(p.all){
        data= db.collection(e.dbteb).deleteMany(p.remove)
    }else{
        data= db.collection(e.dbteb).deleteOne(p.remove)
    }
    return data
}

//分页

async function fisor(e,p){

    let { cliend, db } = await connect(e)
    // console.log(e.dbteb)
    let data= db.collection(e.dbteb).find().sort( { $natural: 1 } ).toArray()

    return data
}


module.exports = {
    filt, inse, froda, update,remove,fisor
}