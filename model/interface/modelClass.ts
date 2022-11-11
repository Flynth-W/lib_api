import { response } from "../types/response.ts"
export interface modelClass{
    Put:<T>(x:T)=>response 
    Post:<T>(x:T)=>response 
}
