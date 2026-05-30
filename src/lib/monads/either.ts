/**
 * @public
 */
export type Either<L, R> = Left<L> | Right<R>;

/**
 * @public
 */
class Left<L> {
    /**
     * @private
     */
    readonly unit: L;

    private constructor(unit: L) {
        this.unit = unit;
    }

    static of<L>(unit: L): Left<L> {
        return new Left(unit);
    }

    /**
     * @privateApi
     */
    map<U>(_: (_: never) => U): Either<L, never> {
        return this;
    }

    /**
     * @privateApi
     */
    flatMap<U>(_: (_: never) => Either<L, U>): Either<L, never> {
        return this;
    }

    /**
     * @privateApi
     */
    equals<R>(other: Either<L, R>): boolean {
        if (other instanceof Right) {
            return false;
        }
        if (other instanceof Left) {
            return Object.is(this.unit, other.unit);
        }
        return false;
    }
} 

/**
 * @public
 */
export class Right<R> {
    /**
     * @private
     */
    readonly unit: R;

    private constructor(unit: R) {
        this.unit = unit;
    }

    static of<R>(unit: R): Right<R> {
        return new Right(unit);
    }

    /**
     * @privateApi
     */
    map<U, L = never>(f: (x: R) => U): Either<L, U> {
        return Right.of(f(this.unit));
    }

    /**
     * @privateApi
     */
    flatMap<U, L = never>(f: (x: R) => Either<L, U>): Either<L, U> {
        return f(this.unit);
    }

  /**
     * @privateApi
     */
    equals<L>(other: Either<L, R>): boolean {
        if (other instanceof Left) {
            return false;
        }
        if (other instanceof Right) {
            return Object.is(this.unit, other.unit);
        }
        return false;
    }
}
