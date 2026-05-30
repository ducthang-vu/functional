import type { UnaryFunction } from '../types.js';

interface Functor<T, Self> {
    map<U>(f: (x: T) => U): Self;
}

/**
 * @public
 */
function map<T, U, F extends Functor<T, F>>(
    f: UnaryFunction<T, U>,
    functor: F,
): Functor<U, F> {
    return functor.map(f);
}