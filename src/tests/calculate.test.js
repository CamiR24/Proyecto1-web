import { describe, it, expect } from 'vitest'
import calculate from '../hooks/calculate'

describe('calculate', () => {
  it('adds correctly', () => {
    expect(calculate(2, 3, '+')).toBe(5)
  })

  it('subtracts correctly', () => {
    expect(calculate(5, 2, '-')).toBe(3)
  })

  it('multiplies correctly', () => {
    expect(calculate(4, 3, '*')).toBe(12)
  })

  it('divides correctly', () => {
    expect(calculate(6, 2, '/')).toBe(3)
  })

  it('returns NaN on division by zero', () => {
    expect(calculate(6, 0, '/')).toBeNaN()
  })

  it('calculates modulo', () => {
    expect(calculate(7, 3, '%')).toBe(1)
  })

})

