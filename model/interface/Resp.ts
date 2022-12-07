import { response } from "../types/response.ts"

export class Resp{
    static PropNot(prop:string):response{
        return {body: {[prop]:null} ,message:"no exsite esa propiedad en el modelo",ok:false}
    }
    static PropVoid(prop:string):response{
        return {body: {[prop]:null} ,message:"la propiedad esta vacia",ok:false}
    }
    static CheckFail(prop:string):response{
        return {body: {[prop]:null} ,message:"property fail check",ok:false}
    }
    static CheckOk(obj:{}):response{
        return {body: obj ,message:"OK",ok:true}
    }
}
