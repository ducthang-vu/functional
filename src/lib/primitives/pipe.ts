import type { UnaryFunction } from '../types.js';

export function pipe<A>(value: A): A;

export function pipe<A, B>(
  value: A,
  f: UnaryFunction<A, B>
): B;

export function pipe<A, B, C>(
  value: A,
  f: UnaryFunction<A, B>,
  g: UnaryFunction<B, C>
): C;

export function pipe<A, B, C, D>(
  value: A,
  f: UnaryFunction<A, B>,
  g: UnaryFunction<B, C>,
  h: UnaryFunction<C, D>
): D;

export function pipe<A, B, C, D, E>(
  value: A,
  f: UnaryFunction<A, B>,
  g: UnaryFunction<B, C>,
  h: UnaryFunction<C, D>,
  i: UnaryFunction<D, E>
): E;

export function pipe<A, B, C, D, E, F>(
    value: A,
    f: UnaryFunction<A, B>,
    g: UnaryFunction<B, C>,
    h: UnaryFunction<C, D>,
    i: UnaryFunction<D, E>,
    j: UnaryFunction<E, F>,
): F;

export function pipe(value: any, ...fns: UnaryFunction<any, any>[]): any;

/**
 * @public
 */
export function pipe(...args: any[]) {
  const [value, ...fns] = args;
  return fns.reduce((acc, fn) => fn(acc), value);
}


/**
 * @public
 */
export const p = pipe;