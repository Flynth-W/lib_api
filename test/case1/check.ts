import type { response } from "./deps.ts" 

export function names( x:string ):response{
        if( x !== null ){
            return {body: "lopex" ,statusText:"OK",ok:true}
        }
        return {body: x ,statusText:"no asignable",ok:false}
}
export function nick( x:number ):response{
        return {body: x ,statusText:"OK",ok:true}
}
export function age(a:number, b:number){
    return ( x:number ):response=>{
        if(  a < x && x <  b){
            return {body: x ,statusText:"OK",ok:true}
        }
        if( x === undefined){
            return {body: x ,statusText:"undefile",ok:false}
        }
        return {body: x ,statusText:"no asignable",ok:false}
    }
}
