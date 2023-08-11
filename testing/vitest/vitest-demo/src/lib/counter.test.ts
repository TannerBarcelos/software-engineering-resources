import {increment, decrement} from './counter.ts'
import { expect, test, describe } from 'vitest'

// Describe a collection of unit tests
describe('Increment and Decrement Unit Tests', () => {
    const count = 50
    test('should increment count', () => {
        const newCount = increment(count)
        // Assert that the new count is equal to the old count + 1 (proves increment works)
        expect(newCount).toBe(count + 1)
    })

    test('should decrement count', () => {
        const newCount = decrement(count)
        // Assert that the new count is equal to the old count - 1 (proves decrement works)
        expect(newCount).toBe(count - 1)
    })

    test('should not decrement count below 0', () => {
        const newCount = decrement(0)
        // Assert that the new count is equal to the old count - 1 (proves decrement works)
        expect(newCount).toBe(0)
    })
})