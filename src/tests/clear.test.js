import { describe, it, expect } from 'vitest'
import clear from '../hooks/useClear'

describe('clear', () => {
  it('resets everything to initial state', () => {
    let display = '99'
    let prev = 20
    let op = '+'
    let wait = true

    const setDisplay = (val) => display = val
    const setPrev = (val) => prev = val
    const setOp = (val) => op = val
    const setWait = (val) => wait = val

    const fn = clear(setDisplay, setPrev, setOp, setWait)
    fn()

    expect(display).toBe('0')
    expect(prev).toBe(null)
    expect(op).toBe(null)
    expect(wait).toBe(false)
  })
})

