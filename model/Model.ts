import { modelClass  } from "./interface/modelClass.ts"
import { response  } from "./types/response.ts"
import { Resp } from "./interface/Resp.ts"

export class Model  {
    model:any
    constructor( model:any){
        this.model=model
    }
    async Put<T>(data:T):Promise<response>{
        // devuelve un nuevo objeto
        let newObj={}
        for( const i in data ){
        // verifica todos los datos (all true)
            if( this.model[i] ){
                const prop=data[i]
                const resp=this.model[i].check.put(prop)
                if(resp.ok){
                    newObj={...newObj ,[i]:prop}
                }else{
                    return {...resp,body:{[i]:resp.body}}
                }
            }else{
                return Resp.PropNot(i)            }

        }
        return Resp.CheckOk(newObj)
    }
    async Post(data:any):Promise<response>{
        // devuelve un nuevo objeto
        let newObj={}
        // deven existir los elementos nesesarios
        for( const i in this.model ){
        // verifica todos los datos (all true)
            if( this.model[i] ){
                const prop=data[i]
                const resp =await this.model[i].check.post(prop)
                if(resp.ok){
                    newObj={...newObj ,[i]:prop}
                }else{
                    return {...resp,body:{[i]:resp.body}}
                }
            }else{
                return Resp.PropNot(i)            
            }

        }
        return Resp.CheckOk(newObj)
    }
        
        // verifica todos los datos (all true)
        // verifica todos los datos (all true)
}
