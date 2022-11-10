import { nick } from "./check.ts";
import { UserClltn } from "./clltn.ts";
import { UserModel } from "./model.ts";

const user={
    nick:490,
    name:"yes" ,
    age:9
}

async function Put(onj:{}){

    const resp = UserModel.Put(onj) 
    if( resp.ok ){
        return  await UserClltn.update( {nick:onj.nick } , onj )
    }
}

console.log( await Put(user) )


