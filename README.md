# typescript introduction

## Install the typescript npm package

`npm i -g typescript`

## Create a tsconfig.json in your project's root

`touch tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "esnext",
    "watch": true,
    "lib": ["dom", "es2017"]
  }
}
```

## Quick guide

Source: [This great video](https://www.youtube.com/watch?v=ahCwqrYpIuM&t=475s).

### Variables

```javascript
let a: string = 'hello';
// a has been declared as a string, and will throw an error if assigned to any other data type.
```

### Types

```javascript
// This is how you create types
type Status = "PENDING" | "COMPLETE" | "FAILED";

// Status is now a data type and can be used to define another variable.

const someVariable: Status = "PENDING";

// The following will throw an error:
const someOtherVariable: Status = "hello"; // ERROR

```

### Functions


```javascript

function hello(x: number, y: number): number {
  return x * y;
}

//For functions that don't return anything:
function nonReturningFunction(x: string, y: string): void {
  console.log('non returning function');
}
```
### Arrays

const