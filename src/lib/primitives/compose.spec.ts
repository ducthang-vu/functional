import { describe, it, expect } from 'vitest';
import { compose } from './compose.js';

describe(compose.name, () => {
    it('should compose two functions', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x * 2;
        const h = compose(f, g);
        expect(h(2)).toBe(5);
    });

    it('should compose three functions', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x * 2;
        const h = (x: number) => x - 3;
        const i = compose(f, g, h);
        expect(i(5)).toBe(5);
    });

    it('should compose four functions', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x * 2;
        const h = (x: number) => x - 3;
        const i = (x: number) => x * x;
        const j = compose(f, g, h, i);
        expect(j(2)).toBe(3);   
    });

    it('should compose five functions', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x * 2;
        const h = (x: number) => x - 3;
        const i = (x: number) => x * x;
        const j = (x: number) => x / 2;
        const k = compose(f, g, h, i, j);
        expect(k(4)).toBe(3);
    });

    it('should compose more than five functions', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x * 2;
        const h = (x: number) => x - 3;
        const i = (x: number) => x * x;
        const j = (x: number) => x / 2;
        const k = (x: number) => x - 1;
        const l = compose(f, g, h, i, j, k);
        expect(l(4)).toBe(-0.5);
    });
});