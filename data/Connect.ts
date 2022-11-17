import {  MongoClient} from "../deps.ts";
//import { CRUD } from "./CRUD.ts"




export async function  Connect(urlMongo:string,dbs:string,clltn:string){
    const client = new MongoClient();
    await client.connect(urlMongo);
    const db = client.database(dbs);
    const _clltn = db.collection(clltn)
    return _clltn
//    const cltm= new CRUD(_clltn)
//    return cltm
}

//Forma de usar :

/*  const data={
 *      urlMongo:"mongodb://127.0.0.1:8011",
 *      dbs:"exampleOne",
 *      clltn:"collectionExample"
 *  }
 *  
 *  const userClltn=await connect(data.urlMongo,data.dbs,data.clltn)
 *  
 *  console.log(await userClltn.read() )
 */
