import { respons } from "../types/response.ts"

export class Resp{
    static PropNot(prop:string):respons{
        return {body: {[prop]:null} ,statusText:"no exsite esa propiedad en el modelo",ok:false}
    }
    static PropVoid(prop:string):respons{
        return {body: {[prop]:null} ,statusText:"la propiedad esta vacia",ok:false}
    }
    static CheckFail(prop:string):respons{
        return {body: {[prop]:null} ,statusText:"property fail check",ok:false}
    }
    static CheckOk(obj:{}):respons{
        return {body: obj ,statusText:"OK",ok:true}
    }
}
