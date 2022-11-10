import { ObjectId } from "../deps.ts"

type Filter=string | Record<never,never>


export class CRUD {
    clltn:any
    constructor(collection:any){
        this.clltn=collection
    }
    create(obj:Record<never,never>[]){
        return this.clltn.insertMany(obj)
    }
    read(filter?:Filter){
        if( typeof(filter) == "string" ){
            return this.clltn.find({[filter]:{$ne:null}}).toArray()
        }
        return this.clltn.find(filter).toArray()
    }
    readById(id:string){
        const _id = new ObjectId(id)
        return this.clltn.findOne({_id})
    }
    update(filter:Filter,obj:Record<never,never>){
        if( typeof(filter) == "string" ){
            return this.clltn.updateMany({[filter]:{$ne:null}},{$set :{...obj}})
        }
        return this.clltn.updateMany(filter,{$set :{...obj}})
    }
    delete(filter:Filter){
        if( typeof(filter) == "string" ){
            return this.clltn.deleteMany({[filter]:{$ne:null}})
        }
        return this.clltn.deleteMany(filter)
    }
    deleteProp(filter:Filter,prop:string){
        if( typeof(filter) == "string" ){
            return this.clltn.updateMany({[filter]:{$ne:null}},{$unset :{[prop]:0}})
        }
        return this.clltn.updateMany(filter,{$unset :{[prop]:0}})
    }
}



