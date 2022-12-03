import {  MongoClient} from "../deps.ts";




export async function  Connect(urlMongo:string,dbs:string,clltn:string){
  try{
    const client = new MongoClient();
    await client.connect(urlMongo);
    const db = client.database(dbs);
    const _clltn = db.collection(clltn)
    return _clltn
  }catch(_e){
    console.log("no listent" )
    console.log(`:: ${urlMongo} | ${dbs} | ${clltn}`)
    console.error(_e)
    Deno.exit()
  }
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
