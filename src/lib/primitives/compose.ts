import type { UnaryFunction } from '../types.js';
import { foldRight } from './fold-right.js';

export function compose<A, B>(
    f: UnaryFunction<A, B>
): UnaryFunction<A, B>;

export function compose<A, B, C>(
    f: UnaryFunction<B, C>,
    g: UnaryFunction<A, B>
): UnaryFunction<A, C>;

export function compose<A, B, C, D>(
    f: UnaryFunction<C, D>,
    g: UnaryFunction<B, C>,
    h: UnaryFunction<A, B>
): UnaryFunction<A, D>;

export function compose<A, B, C, D, E>(
    f: UnaryFunction<D, E>,
    g: UnaryFunction<C, D>,
    h: UnaryFunction<B, C>,
    i: UnaryFunction<A, B>
): UnaryFunction<A, E>;

export function compose<A, B, C, D, E, F>(
    f: UnaryFunction<E, F>,
    g: UnaryFunction<D, E>,
    h: UnaryFunction<C, D>,
    i: UnaryFunction<B, C>,
    j: UnaryFunction<A, B>
): UnaryFunction<A, F>;

export function compose(...fns: UnaryFunction<any, any>[]): UnaryFunction<any, any>;

export function compose(...fns: UnaryFunction<any, any>[]) {
    return (x: any) =>
        foldRight(fns, x, (f, acc) => f(acc));
}
export const c = compose;
