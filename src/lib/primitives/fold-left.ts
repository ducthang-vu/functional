export interface FoldableLeft<A> {
  foldLeft<B>(
    init: B,
    f: (acc: B, a: A) => B
  ): B;
}

export function foldLeft<A, B>(fa: FoldableLeft<A>, init: B, f: (acc: B, a: A) => B): B;

export function foldLeft<A, B>(fa: Array<A>, init: B, f: (acc: B, a: A) => B): B;

export function foldLeft<A, B>(
  fa: FoldableLeft<A> | Array<A>,
  init: B,
  f: (acc: B, a: A) => B
): B {
  if (Array.isArray(fa)) {
    return foldArray(fa, init, f);
  }
  return fa.foldLeft(init, f);
}

export const foldArray = <A, B>(
  fa: A[],
  init: B,
  f: (acc: B, a: A) => B
): B => {
  let acc = init;
  for (const x of fa) acc = f(acc, x);
  return acc;
};