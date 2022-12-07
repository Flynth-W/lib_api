import { response } from "./response.ts"
export type property={
  check:{
    post:(x:any)=>response,
    put:(x:any)=>response
  }
}

