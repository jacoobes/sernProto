import {Database} from "./Database/Database";

interface genDBs {
    path : string,
    load : (path : string) => Database 

}


export class Test implements genDBs {

    path: string

    constructor(path : string) {
        this.path = path
    }

    load() {
        console.log("######################################")
        console.log(`sernProto has found path ${this.path}`)
        console.log("######################################")
        return new Database(this.path)
    }
    
   

}


