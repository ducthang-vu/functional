import { describe, expect, it } from 'vitest';
import { Either, Right } from './either.js';

describe('Either', () => {
    describe('privateApi', () => {
        it('should create a right instance', () => {
            const right = Right.of(42);
            expect(right.unit).toBe(42);

            const mapped = right.map(x => x + 1);
            expect(mapped.unit).toBe(43);

            const flatMapped = right.flatMap(x => Right.of(x * 2));
            expect(flatMapped.unit).toBe(84);

            const equalsRight = right.equals(Right.of(42));
            expect(equalsRight).toBe(true);

            const notEqualsRight = right.equals(Right.of(43));
            expect(notEqualsRight).toBe(false);

            const equalsLeft = right.equals({ unit: 'error' } as any);
            expect(equalsLeft).toBe(false);
        });

        it('should create a left instance', () => {
            const left = Right.of('error');
            expect(left.unit).toBe('error');

            const mapped = left.map(x => x + '!');
            expect(mapped.unit).toBe('error!');

            const flatMapped = left.flatMap(x => Right.of(x.toUpperCase()));
            expect(flatMapped.unit).toBe('ERROR');

            const equalsRight = left.equals(Right.of('error'));
            expect(equalsRight).toBe(true);

            const notEqualsRight = left.equals(Right.of('other error'));
            expect(notEqualsRight).toBe(false);

            const equalsLeft = left.equals({ unit: 'error' } as any);
            expect(equalsLeft).toBe(false);
        });
    })
    
    describe('public API', () => {
        const f = (x: number) => x + 1;
    })
});