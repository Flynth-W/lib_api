import type { response  } from "../../types/response.ts"
export function length(min:number,max:number){
    return (x:string):response=>{
        const length=x.length
        if( min <= length && length <= max ){
            return {body: x ,message:"OK",ok:true}
        }
        return {body: x ,message:"Out to limits",ok:false}
    }
}
// TEST :
// const ltg = length(3,6)
// console.log(ltg("asda"))
