export interface FoldableRight<A> {
  foldRight<B>(
    init: B,
    f: (a: A, acc: B) => B
  ): B;
}
export function foldRight<A, B>(
  fa: FoldableRight<A>,
  init: B,
  f: (a: A, acc: B) => B
): B;

export function foldRight<A, B>(
  fa: A[],
  init: B,
  f: (a: A, acc: B) => B
): B;

export function foldRight<A, B>(
  fa: FoldableRight<A> | A[],
  init: B,
  f: (a: A, acc: B) => B
): B {
  if (Array.isArray(fa)) {
    return foldArrayRight(fa, init, f);
  }
  return fa.foldRight(init, f);
}

export const foldArrayRight = <A, B>(
  fa: A[],
  init: B,
  f: (a: A, acc: B) => B
): B => {
  let acc = init;
  for (let i = fa.length - 1; i >= 0; i--) {
    acc = f(fa[i]!, acc);
  }
  return acc;
};