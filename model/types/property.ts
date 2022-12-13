import { response } from "./response.ts"
export type property={
  check:{
    post:(x:any)=>response | Promise<response>,
    put:(x:any)=>response  | Promise<response> 
  }
}

