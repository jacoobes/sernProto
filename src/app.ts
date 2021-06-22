export { Test } from "./Interface/interface"

import "module-alias/register" 




// const test : Promise<Message> = new Promise( (resolve) => {

//     load("./protoSchemas/test.proto", function(err, root) {
//         if(err || root === undefined) throw err
        
//         const test = root.lookupType("yo.Sup")
//         const instance = test.fromObject( {
//             name: "hi",
//             mappo : {
//                 int : 1
//             }
//          }
//         )
//         const buffer : Uint8Array = test.encode(instance).finish()
        
//         resolve(test.decode(buffer))
//     })
// })

// test.then(console.log)

