import { Model  } from "./deps.ts"
import type { property } from "./deps.ts"
import { age , names , nick } from "./check.ts"







type ussser={
    nick:property | number
    name?:property|string
    age?:property| number
}

const ModelUser:ussser={
    nick:{ check:nick } ,
    name:{ check:names},
    age:{ check:age(2,10)}
}

export const UserModel= new Model(ModelUser)

//console.log( UserDate.Post(user))

