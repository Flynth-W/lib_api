import type { response  } from "../../types/response.ts"

export function _switch(array:string[]){
// si existe el elemento previamente establesido en el array
  return (x:string):response=>{
    const ok = array.find( element =>  x === element )
    if( ok === undefined ){
      return {body:x,message:"element not found",ok:false}
    }
    return {body:x,message:"OK",ok:true}
  }
}

// TEST:
// const themes = _switch(["orange","dark"])
// const oks = themes("orange ")
// console.log(oks)



