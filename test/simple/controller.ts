import { UserModel } from "./model.ts"
import type { typeUser } from "./model.ts"
import { UserClltn } from "./data.ts"

function ctrllUserPOST(data:{}[]){
   const resp = UserModel.Post(data[0])
   if( resp.ok ){
        UserClltn.create(data)
   }
   console.log(resp)
}
const user:typeUser={
    nick:49029,
    name:"exampleName" ,
    age:19,
}
ctrllUserPOST([user])
console.log( await UserClltn.read() )

