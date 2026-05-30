import { describe, it, expect } from "vitest";
import { foldLeft, type FoldableLeft } from "./fold-left.js";

describe(foldLeft.name, () => {
     const subtraction = (a: number, b: number) => a - b;
     
  it('should fold an array from the left', () => {
   
    const result = foldLeft([1, 2, 3], 0, subtraction);
    expect(result).toBe(-6);
  });

  it('should fold a custom FoldableLeft', () => {
    class MyFoldable implements FoldableLeft<number> {
      constructor(private values: number[]) {}

      foldLeft<B>(init: B, f: (acc: B, a: number) => B): B {
        let acc = init;
        for (const x of this.values) acc = f(acc, x);
        return acc;
      }
    }

    const myFoldable = new MyFoldable([1, 2, 3]);
    const result = foldLeft(myFoldable, 0, subtraction);
    expect(result).toBe(-6);
  });
});