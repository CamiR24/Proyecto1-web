import { describe, it, expect } from 'vitest'
import toggleSign from '../hooks/useToggleSign'

describe('toggleSign', () => {
  it('negates positive number', () => {
    let display = '5'
    const setDisplay = (val) => display = val

    const toggle = toggleSign(display, setDisplay)
    toggle()

    expect(display).toBe('-5')
  })

  it('makes negative number positive', () => {
    let display = '-8'
    const setDisplay = (val) => display = val

    const toggle = toggleSign(display, setDisplay)
    toggle()

    expect(display).toBe('8')
  })

  it('does nothing if display is 0', () => {
    let display = '0'
    const setDisplay = (val) => display = val

    const toggle = toggleSign(display, setDisplay)
    toggle()

    expect(display).toBe('0')
  })
})
