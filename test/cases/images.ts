import { Connect  } from "../../mods.ts"
// connect to mongodb
const data={
    urlmongo:"mongodb://127.0.0.1:8011",
    dbs:"exampleOne",
    clltn:"collectionExample"
}

const UserClltn=await Connect(data.urlmongo,data.dbs,data.clltn)
//console.log( await UserClltn.read() )


//read 

const file =  Deno.readFileSync("files.random.jpg")
const dat = [...file]
UserClltn.create({name:"guez.jpg",img:dat})
// write 
const resp = await UserClltn.read({name:"guez.jpg"})
console.log(resp[0].img)
const files = new Uint8Array(resp[0].img)
await Deno.writeFile('hello.jpg', files); // Create a new fiule or ove

