export enum ErrorTypes {
   UNDEFINED_PROPERTY = 1,

}

export class spException extends Error {
    
    typeError : ErrorTypes

    constructor(message : string, typeErr: ErrorTypes) {
        super(message)
        this.typeError = typeErr
    }
}