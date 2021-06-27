import "reflect-metadata";
import { spException, ErrorTypes } from "../errors/exceptions";
const key = Symbol("required");

export function Required(schema: object) {
  return (target: Object, name: string | symbol, index: number) => {
    const required: { name: string | symbol; index: number; schema: object; }[] = Reflect.getOwnMetadata(key, target, name) ?? [];

    required.push({ name, index, schema });

    Reflect.defineMetadata(key, required, target, name);
  }
}

 export function RuntimeRequired() {
  return (target: any, propertyName: string, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>) => {
    const method = descriptor.value!;

    descriptor.value = function () {
      const requiredParameters: { name: string | symbol; index: number; schema: object; }[] = Reflect.getOwnMetadata(key, target, propertyName);

      if (requiredParameters) {
        for (const { name, index, schema } of requiredParameters) {
          if (typeof arguments[index] === "undefined" || arguments[index] === null) throw new Error(`Parameter ${String(name)} is required.`);

          const validate = (obj: object, schema: object, path = ".") => {
            Object.keys(schema).forEach((key: string) => {
              if (typeof obj[key as keyof typeof obj] !== typeof schema[key as keyof typeof obj]) throw new spException(`In parameter ${String(name)}, at path ${path}${key}, the type does not match.\nExpected type ${typeof schema[key as keyof typeof obj]} but got type ${typeof obj[key as keyof typeof obj]}.`, ErrorTypes.UNDEFINED_PROPERTY)

              if (typeof schema[key as keyof typeof obj] === "object" && schema[key as keyof typeof obj]) {
                validate(obj[key as keyof typeof obj], schema[key as keyof typeof obj], `${path}${key}.`)
              }
            });
          }

          validate(arguments[index], schema);
        }
      }

      return method.apply(this, arguments as unknown as any[]);
    };
  }
}