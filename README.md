# batues
batues can make it easy to transform class with the help of decorators.

## How to Install
```sh
npm install batues --save
```

## All available decorator

* `@Name(name: string)`, set the field's name when transform to json.
* `@Ignore`, ignore field when transform to json.
* `@If<V = any>(callback: (value: V) => boolean)`, only include field when success to passed the callback.

## How to transform
* `toJSON`, transform to json.

## Example
```ts
import { toJSON } from "batues";

class User {
    @Name("id")
    Id!: number;

    @Name("name")
    Name!: string;

    @Name("email")
    Email!: string;

    @Ignore
    Password!: string;

    @If((v) => v !== undefined)
    CreatedAt?: Date;
}

const user = new User();
user.Id = 1;
user.Name = "Malma";
user.Email = "malma@example.com";
user.Password = "password";
user.CreatedAt = undefined;

const userJson = toJSON(user);
console.log(userJSON);
```
will produces
```sh
{
    "id": 1,
    "name": "Malma",
    "email": "malma@example.com"
}
```

## Note
set the `emitDecoratorMetadata` and `experimentalDecorators` to `true` in `tsconfig.json` to enable the decorator.