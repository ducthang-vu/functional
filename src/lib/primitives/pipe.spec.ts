import { describe, it, expect } from 'vitest';
import { pipe } from './pipe.js';

describe(pipe.name, () => {
    it('should return the value if no functions are provided', () => {
        expect(pipe(42)).toBe(42);
    });

    it('should apply a single function to the value', () => {
        const f = (x: number) => x + 1;
        expect(pipe(41, f)).toBe(42);
    }); 

    it('should apply multiple functions to the value', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x * 2;
        const h = (x: number) => x - 3;
        expect(pipe(5, f, g, h)).toBe(9);
    });

    it('should apply more than five functions to the value', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x * 2;
        const h = (x: number) => x - 3;
        const i = (x: number) => x * x;
        const j = (x: number) => x / 2;
        const k = (x: number) => x - 1;
        expect(pipe(5, f, g, h, i, j, k)).toBe(39.5);
     });
     
    it('should work with different types', () => {
        const f = (x: number) => x + 1;
        const g = (x: number) => x.toString();
        const h = (x: string) => x + '!';
        expect(pipe(41, f, g, h)).toBe('42!');
     });

    it('should work with no functions', () => {
        expect(pipe('hello')).toBe('hello');
     });

    it('should work with one function', () => {
        const f = (x: string) => x.toUpperCase();
        expect(pipe('hello', f)).toBe('HELLO');
     });

    it('should work with two functions', () => {
        const f = (x: string) => x.toUpperCase();
        const g = (x: string) => x + '!';
        expect(pipe('hello', f, g)).toBe('HELLO!');
     });

    it('should work with three functions', () => {
        const f = (x: string) => x.toUpperCase();
        const g = (x: string) => x + '!';
        const h = (x: string) => x.split('').join('-');
        expect(pipe('hello', f, g, h)).toBe('H-E-L-L-O-!');
     });

    it('should work with more than three functions', () => {
        const f = (x: string) => x.toUpperCase();
        const g = (x: string) => x + '!';
        const h = (x: string) => x.split('').join('-');
        const i = (x: string) => x + '??';
        const j = (x: string) => x.replace(/-/g, '_');
        expect(pipe('hello', f, g, h, i, j)).toBe('H_E_L_L_O_!??');
     });
});
