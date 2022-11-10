import { ObjectId } from "../deps.ts"

type Filter=string | Record<never,never>


export class CRUD {
    clltn:any
    constructor(collection:any){
        this.clltn=collection
    }
    create(obj:Record<never,never>[]|Record<never,never>){
        if( obj[0] === undefined ){
            return this.clltn.insertOne(obj)
        }

        return this.clltn.insertMany(obj)
    }
    read(filter?:Filter){
        if( typeof(filter) == "string" ){
            return this.clltn.find({[filter]:{$ne:null}}).toArray()
        }
        return this.clltn.find(filter).toArray()
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
    // Crud By Id
    readById(id:string){
        const _id = new ObjectId(id)
        return this.clltn.findOne({_id})
    }
    deleteById(id:string){
        const _id = new ObjectId(id)
        return this.clltn.deleteOne({_id})
    }
    updateById(id:string,obj:Record<never,never>){
        const _id = new ObjectId(id)
        return this.clltn.updateMany({_id},{$set :{...obj}})
    }
    deletePropById(id:string,prop:string){
        const _id = new ObjectId(id)
        return this.clltn.updateMany({_id},{$unset :{[prop]:0}})
    }
}



