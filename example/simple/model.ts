import { Model } from "../../mods.ts"
import type { property  } from "../../mods.ts"
import type { response  } from "../../mods.ts"

// scheme model

function checkAge(min:number,max:number){
    return (x:number):response=>{
        if( min <= x && x <= max  ){
            return {body: x ,statusText:"OK",ok:true}
        }
        return {body: x ,statusText:`no esta en los limites ${min} ~ ${max}`,ok:false}
    }
}

export type typeUser={
    nick?:property | number
    name?:property|string
    age?:property| number
}


const _modelUser:typeUser={
    nick:{ check:(x:number):response=>{return {body: x ,statusText:"OK",ok:true}}},
    name:{ check:(x:string):response=>{return {body: x ,statusText:"OK",ok:true}}},
    age:{ check:checkAge(18,35)},
}

export const UserModel= new Model(_modelUser)

//const user:_typeUser={
//    nick:49029,
//    name:"exampleName" ,
//    age:19,
//}
//
//console.log( UserModel.Post(user))
