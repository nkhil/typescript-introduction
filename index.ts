// Creating custom styles

type Status = "PENDING" | "COMPLETE" | "FAILED";

const someVariable: Status = "PENDING";
// It will throw if someVariable is set to anything but 'PENDING', 'COMPLETE' or 'FAILED'

interface Person {
  first: string;
  last: string;
  [key: string]: any;
}

const person: Person = {
  first: 'John',
  last: 'Bourne',
}

const personTwo: Person = {
  first: '23',
  last: '23',
  fast: 23,
}
  
function hello(x: number, y: number): number {
  return x * y;
};

const arr: number[] = [];

arr.push(2);
