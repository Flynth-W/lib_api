import { Model , Connect  } from "../mods.ts"
import type { property  } from "../mods.ts"
import type { response  } from "../mods.ts"

// connect to mongodb
const data={
    urlmongo:"mongodb://127.0.0.1:8011",
    dbs:"exampleOne",
    clltn:"collectionExample"
}

const UserClltn=await Connect(data.urlmongo,data.dbs,data.clltn)
//console.log( await userclltn.read() )

// scheme model

type _typeUser={
    nick?:property | number
    name?:property|string
    age?:property| number
}

function checkAge(min:number,max:number){
    return (x:number):response=>{
        if( min <= x && x <= max  ){
            return {body: x ,statusText:"OK",ok:true}
        }
        return {body: x ,statusText:`no esta en los limites ${min} ~ ${max}`,ok:false}
    }
}

const ModelUser:_typeUser={
    nick:{ check:(x:number):response=>{return {body: x ,statusText:"OK",ok:true}}},
    name:{ check:(x:string):response=>{return {body: x ,statusText:"OK",ok:true}}},
    age:{ check:checkAge(18,35)},
}

const UserModel= new Model(ModelUser)

const user:_typeUser={
    nick:49029,
    name:"exampleName" ,
    age:19,
}

//console.log( UserModel.Post(user))

// controller
function ctrllUserPOST(data:{}[]){
   const resp = UserModel.Post(data[0])
   if( resp.ok ){
        UserClltn.create(data)
   }
   console.log(resp)
}
console.log( await UserClltn.read() )
ctrllUserPOST([user])
console.log( await UserClltn.read() )

