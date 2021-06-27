
import "protobufjs/minimal"
import { pbts, pbjs } from 'protobufjs/cli';
import { join } from 'path';
import { RuntimeRequired, Required } from '../util/required'


interface Options {
    path: string,
    name : string,
}

export class Schema {

    config:Options

   private constructor(options: Options) {
        this.config = options
        this.config.name = options.name
        this.config.path = join(process.cwd(), "s", options.path)
    }

    @RuntimeRequired()
   static config(@Required({
        /**
         * Schema to validate the parameter goes here.
         * `""`         for type string ,
         * `0`          for type number ,
         * `true`       for type boolean,
         * `0n`         for type bigint ,
         * `Symbol("")` for type symbol ,
         * `{}`         for type object ,
         * And you can even nest properties in objects!
         */
        path: "",
        name: "",
      }) options: Options) {
           return new Schema(options)
      } 

    create() {
    
      const pathToOutputSchemas = join(__dirname, "../", "../", "schemas")
      
      pbjs.main(["-t", "static-module", "-o", `${pathToOutputSchemas}/${this.config.name}.js`, this.config.path])

      pbts.main(["-o", `${pathToOutputSchemas}/${this.config.name}.d.ts`, `${pathToOutputSchemas}/${this.config.name}.js`, ])
    }
    
   

}


