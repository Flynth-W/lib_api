import type { response } from "./deps.ts" 

export function names( x:string ):response{
        if( x !== null ){
            return {body: "lopex" ,message:"OK",ok:true}
        }
        return {body: x ,message:"no asignable",ok:false}
}
export function nick( x:number ):response{
        return {body: x ,message:"OK",ok:true}
}
export function age(a:number, b:number){
    return ( x:number ):response=>{
        if(  a < x && x <  b){
            return {body: x ,message:"OK",ok:true}
        }
        if( x === undefined){
            return {body: x ,message:"undefile",ok:false}
        }
        return {body: x ,message:"no asignable",ok:false}
    }
}
