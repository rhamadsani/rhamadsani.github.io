import { getDB } from '$db/mongo';
const db = getDB();

export async function getCollection(collection_name:string, skip:number, limit:number): Promise<JSON>
{
    // get repositories from MongoDB with skip and limit
    // console.log('adfsf')
    // console.log('adfsf', db)
    const data = await db.collection(collection_name).find({}).project({_id:0}).skip(skip).limit(limit).toArray();
    // console.log('dfasf',db)
    // return JSON response
    return data;
}

export async function searchCollection(collection_name:string, search:string): Promise<JSON>
{
    // get repositories from MongoDB with search query and regex options
    // console.log('asdfads', db)
    const data = await db.collection(collection_name).find({group:{$regex:search, $options:'i'}}).project({_id:0}).toArray();
// console.log(db)
    // console.log('dfasf',db)
    // return JSON response
    return data;
}