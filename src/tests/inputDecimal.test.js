import { describe, it, expect } from 'vitest'
import inputDecimal from '../hooks/useDecimal'

describe('inputDecimal', () => {
  it('starts with 0. if waitingForOperand is true', () => {
    let display = '0'
    const setDisplay = (val) => display = val
    const setWaiting = () => {}

    const input = inputDecimal(display, setDisplay, true, setWaiting)
    input()
    expect(display).toBe('0.')
  })

  it('appends . if not present and length < 9', () => {
    let display = '12'
    const setDisplay = (val) => display = val

    const input = inputDecimal(display, setDisplay, false, () => {})
    input()

    expect(display).toBe('12.')
  })

  it('does nothing if already has .', () => {
    let display = '3.14'
    const setDisplay = (val) => display = val

    const input = inputDecimal(display, setDisplay, false, () => {})
    input()

    expect(display).toBe('3.14')
  })
})
