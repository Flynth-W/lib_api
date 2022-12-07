import { Model  } from "./deps.ts"
import type { property } from "./deps.ts"
import { age , names , nick } from "./check.ts"







type ussser={
    nick:property | number
    name?:property|string
    age?:property| number
}
const ModelUser:ussser={
    nick:{ check:{post:nick,put:nick} } ,
    name:{ check:{post:names,put:names} },
    age:{ check:{post:age(2,6),put:age(2,10)} }
}

export const UserModel= new Model(ModelUser)

const user = { 
  nick:3,
  name:"juas",
  age:6
}

console.log( UserModel.Put(user))

