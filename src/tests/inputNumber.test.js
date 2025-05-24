import { describe, it, expect } from 'vitest'
import inputNumber from '../hooks/useDisplay'

describe('inputNumber', () => {
  it('replaces display if waitingForOperand is true', () => {
    let display = '0'
    const setDisplay = (val) => display = val
    const setWaiting = () => {}

    const input = inputNumber(display, setDisplay, true, setWaiting)
    input(7)

    expect(display).toBe('7')
  })

  it('appends number if not waiting', () => {
    let display = '2'
    const setDisplay = (val) => display = val

    const input = inputNumber(display, setDisplay, false, () => {})
    input(5)

    expect(display).toBe('25')
  })

  it('does not exceed 9 characters', () => {
    let display = '123456789'
    const setDisplay = (val) => display = val

    const input = inputNumber(display, setDisplay, false, () => {})
    input(0)

    expect(display).toBe('123456789')
  })
})
