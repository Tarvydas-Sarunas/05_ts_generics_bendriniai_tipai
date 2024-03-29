console.log('generics');

// the problem

// function printValue(x: number | string): number | string {
//   console.log('x ===', x);
//   return x;
// }

// sk nera number tipo
// const sk = printValue(50);

// str nera string tipo
// const str = printValue('labas');

// solution

function printValue<Type>(x: Type): Type {
  console.log('x ===', x);
  return x;
}

// sk ura number tipo
const sk = printValue<number>(50);

// str yra string tipo
const str = printValue<string>('labas');

const strArr = printValue<string[]>(['blue', 'green', 'red']);

type OurTuple = [string, number];

function getTupleFromValues<Type1, Type2>(x: Type1, y: Type2): [Type1, Type2] {
  console.log(`making tuple from ${x} and ${y}`);
  return [x, y];
}
const t1 = getTupleFromValues('blue', 300);
const t2 = getTupleFromValues(50, '300');
t2[1].toUpperCase();

// function kuri priima sk arba str masyva
// skaiciu masyva padauginam is 2
// stringu masyve padarom UperCase

function processArr<ElType>(arr: ElType[]): ElType[] {
  return [...arr];
}

// processArr([1, 2, 3, 'green']); //noretumeme gauti kad visi masyvo el butu vieno tipo
const skArr = processArr([1, 2, 3]);
const stringArr = processArr(['red', 'green', 'blue']);
