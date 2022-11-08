import { respons } from "../types/response.ts"
export interface modelClass{
    Put:<T>(x:T)=>respons 
    Post:<T>(x:T)=>respons 
}
