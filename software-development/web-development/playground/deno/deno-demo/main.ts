import { parse }  from "https://deno.land/std@0.224.0/flags/mod.ts";

export function sumNums(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const numbers = parse(Deno.args)._
  const sum = sumNums(...numbers.map(n => Number(n)));
  console.log(sum)
}