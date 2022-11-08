import { Connect } from "./deps.ts"

const data={
    urlMongo:"mongodb://127.0.0.1:8011",
    dbs:"exampleOne",
    clltn:"collectionExample"
}

export const UserClltn=await Connect(data.urlMongo,data.dbs,data.clltn)



