

export function _switch(array:string[]){
// si existe el elemento previamente establesido en el array
  return (x:string)=>{
    const ok = array.find( element =>  x === element )
    if( ok === undefined ){return false}
    return true
  }
}

// TEST:
// const themes = _switch(["orange","dark"])
// const oks = themes("orange ")
// console.log(oks)


