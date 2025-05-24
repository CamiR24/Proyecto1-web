import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button
}

export const Primary = () => <Button text="+" onClick={() => {}} />
export const Danger = () => <Button text="C" style={{ backgroundColor: 'red' }} />