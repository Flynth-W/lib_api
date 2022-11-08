import { Connect  } from "../../mods.ts"
// connect to mongodb
const data={
    urlmongo:"mongodb://127.0.0.1:8011",
    dbs:"exampleOne",
    clltn:"collectionExample"
}

export const UserClltn=await Connect(data.urlmongo,data.dbs,data.clltn)
//console.log( await UserClltn.read() )
