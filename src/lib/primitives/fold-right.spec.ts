import { describe, it, expect } from "vitest";
import { foldRight, type FoldableRight } from "./fold-right.js";

describe(foldRight.name, () => {
     const subtraction = (a: number, b: number) => a - b;
  it('should fold an array from the left', () => {
    const result = foldRight([1, 2, 3], 0, subtraction);
    expect(result).toBe(2);
  });

  it('should fold a custom FoldableRight', () => {
    class MyFoldable implements FoldableRight<number> {
      constructor(private values: number[]) {}

      foldRight<B>(init: B, f: (a: number, acc: B) => B): B {
        let acc = init;
        for (const x of this.values) acc = f(x, acc);
        return acc;
      }
    }

    const myFoldable = new MyFoldable([1, 2, 3]);
    const result = foldRight(myFoldable, 0, subtraction);
    expect(result).toBe(2);
  });
});