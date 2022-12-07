import type { response  } from "../types/response.ts"
import { string } from "./string/main.ts"

export const ModelChecks = {
  string,  
  default:<T>(_x:T):response=>{return {body: null ,message:"????",ok:true}}
}

